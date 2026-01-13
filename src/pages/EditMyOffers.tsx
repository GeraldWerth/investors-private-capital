import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, Trash2, Send, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSecondariesData, MyOffer } from "@/hooks/useSecondariesData";
import { useToast } from "@/hooks/use-toast";

const EditMyOffers = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { myOffers, saveMyOffers } = useSecondariesData();
  const [items, setItems] = useState<MyOffer[]>(myOffers);
  const [newItem, setNewItem] = useState<Partial<MyOffer>>({
    company: "",
    sector: "",
    sharesOffered: "",
    valuation: "",
    askingPrice: "",
    status: "Pending Review",
    inquiries: 0
  });

  const handleAddItem = () => {
    if (!newItem.company || !newItem.sector || !newItem.askingPrice) {
      toast({
        title: "Fehlende Daten",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    const item: MyOffer = {
      id: Date.now().toString(),
      company: newItem.company || "",
      sector: newItem.sector || "",
      sharesOffered: newItem.sharesOffered || "",
      valuation: newItem.valuation || "",
      askingPrice: newItem.askingPrice || "",
      status: newItem.status as "Active" | "Pending Review" | "Sold" || "Pending Review",
      inquiries: 0,
      createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    };

    setItems([...items, item]);
    setNewItem({
      company: "",
      sector: "",
      sharesOffered: "",
      valuation: "",
      askingPrice: "",
      status: "Pending Review",
      inquiries: 0
    });
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSave = () => {
    saveMyOffers(items);
    toast({
      title: "Gespeichert",
      description: "Ihre Verkaufsangebote wurden aktualisiert."
    });
    navigate("/secondaries");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/20 text-green-600";
      case "Pending Review": return "bg-accent/20 text-accent";
      case "Sold": return "bg-primary/20 text-primary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/secondaries" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Zurück</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Send className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Meine Angebote</h1>
                  <p className="text-xs text-muted-foreground">Verkaufsangebote verwalten</p>
                </div>
              </div>
            </div>
            <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 rounded-xl">
              <Save className="w-4 h-4 mr-2" />
              Speichern
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Add New Form */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Neues Verkaufsangebot</CardTitle>
            <CardDescription>Listen Sie Ihre Anteile zum Verkauf</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Unternehmen *"
                value={newItem.company}
                onChange={(e) => setNewItem({ ...newItem, company: e.target.value })}
                className="rounded-xl"
              />
              <Input
                placeholder="Sektor *"
                value={newItem.sector}
                onChange={(e) => setNewItem({ ...newItem, sector: e.target.value })}
                className="rounded-xl"
              />
              <Input
                placeholder="Anteile (z.B. 10%)"
                value={newItem.sharesOffered}
                onChange={(e) => setNewItem({ ...newItem, sharesOffered: e.target.value })}
                className="rounded-xl"
              />
              <Input
                placeholder="Bewertung (z.B. €32M)"
                value={newItem.valuation}
                onChange={(e) => setNewItem({ ...newItem, valuation: e.target.value })}
                className="rounded-xl"
              />
              <Input
                placeholder="Verkaufspreis * (z.B. €3.2M)"
                value={newItem.askingPrice}
                onChange={(e) => setNewItem({ ...newItem, askingPrice: e.target.value })}
                className="rounded-xl"
              />
              <Select
                value={newItem.status}
                onValueChange={(value) => setNewItem({ ...newItem, status: value as "Active" | "Pending Review" | "Sold" })}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Pending Review">Pending Review</SelectItem>
                  <SelectItem value="Sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleAddItem} className="bg-primary hover:bg-primary/90 rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              Hinzufügen
            </Button>
          </CardContent>
        </Card>

        {/* Existing Items */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Aktuelle Angebote ({items.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-secondary border border-border flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">{item.company}</h3>
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{item.sector}</span>
                    <span>•</span>
                    <span>{item.sharesOffered} Anteile</span>
                    <span>•</span>
                    <span>{item.askingPrice}</span>
                    <span>•</span>
                    <span>Bewertung: {item.valuation}</span>
                    <span>•</span>
                    <span>{item.inquiries} Anfragen</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Erstellt: {item.createdAt}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
            {items.length === 0 && (
              <p className="text-center text-muted-foreground py-8">Keine Angebote vorhanden</p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditMyOffers;
