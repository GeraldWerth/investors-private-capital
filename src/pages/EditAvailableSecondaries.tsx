import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, Trash2, Repeat, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSecondariesData, AvailableSecondary } from "@/hooks/useSecondariesData";
import { useToast } from "@/hooks/use-toast";

const EditAvailableSecondaries = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { availableSecondaries, saveAvailableSecondaries } = useSecondariesData();
  const [items, setItems] = useState<AvailableSecondary[]>(availableSecondaries);
  const [newItem, setNewItem] = useState<Partial<AvailableSecondary>>({
    company: "",
    sector: "",
    sharesAvailable: "",
    valuation: "",
    askingPrice: "",
    seller: "",
    urgency: "Medium",
    highlights: []
  });
  const [highlightsInput, setHighlightsInput] = useState("");

  const handleAddItem = () => {
    if (!newItem.company || !newItem.sector || !newItem.askingPrice) {
      toast({
        title: "Fehlende Daten",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    const item: AvailableSecondary = {
      id: Date.now().toString(),
      company: newItem.company || "",
      sector: newItem.sector || "",
      sharesAvailable: newItem.sharesAvailable || "",
      valuation: newItem.valuation || "",
      askingPrice: newItem.askingPrice || "",
      seller: newItem.seller || "",
      urgency: newItem.urgency as "High" | "Medium" | "Low" || "Medium",
      highlights: highlightsInput.split(",").map(h => h.trim()).filter(h => h)
    };

    setItems([...items, item]);
    setNewItem({
      company: "",
      sector: "",
      sharesAvailable: "",
      valuation: "",
      askingPrice: "",
      seller: "",
      urgency: "Medium",
      highlights: []
    });
    setHighlightsInput("");
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSave = () => {
    saveAvailableSecondaries(items);
    toast({
      title: "Gespeichert",
      description: "Verfügbare Secondaries wurden aktualisiert."
    });
    navigate("/secondaries");
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High": return "bg-red-500/20 text-red-600";
      case "Medium": return "bg-accent/20 text-accent";
      case "Low": return "bg-muted text-muted-foreground";
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
                  <Repeat className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Verfügbare Secondaries</h1>
                  <p className="text-xs text-muted-foreground">Kaufangebote verwalten</p>
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
            <CardTitle className="text-xl font-bold">Neues Angebot hinzufügen</CardTitle>
            <CardDescription>Fügen Sie ein neues Secondary-Kaufangebot hinzu</CardDescription>
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
                placeholder="Anteile (z.B. 8%)"
                value={newItem.sharesAvailable}
                onChange={(e) => setNewItem({ ...newItem, sharesAvailable: e.target.value })}
                className="rounded-xl"
              />
              <Input
                placeholder="Bewertung (z.B. €45M)"
                value={newItem.valuation}
                onChange={(e) => setNewItem({ ...newItem, valuation: e.target.value })}
                className="rounded-xl"
              />
              <Input
                placeholder="Kaufpreis * (z.B. €3.6M)"
                value={newItem.askingPrice}
                onChange={(e) => setNewItem({ ...newItem, askingPrice: e.target.value })}
                className="rounded-xl"
              />
              <Input
                placeholder="Verkäufer"
                value={newItem.seller}
                onChange={(e) => setNewItem({ ...newItem, seller: e.target.value })}
                className="rounded-xl"
              />
              <Select
                value={newItem.urgency}
                onValueChange={(value) => setNewItem({ ...newItem, urgency: value as "High" | "Medium" | "Low" })}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Priorität" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">High Priority</SelectItem>
                  <SelectItem value="Medium">Medium Priority</SelectItem>
                  <SelectItem value="Low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Highlights (kommagetrennt)"
                value={highlightsInput}
                onChange={(e) => setHighlightsInput(e.target.value)}
                className="rounded-xl md:col-span-2"
              />
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
                    <Badge className={getUrgencyColor(item.urgency)}>{item.urgency}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{item.sector}</span>
                    <span>•</span>
                    <span>{item.sharesAvailable} Anteile</span>
                    <span>•</span>
                    <span>{item.askingPrice}</span>
                    <span>•</span>
                    <span>Bewertung: {item.valuation}</span>
                  </div>
                  {item.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {item.highlights.map((h) => (
                        <Badge key={h} className="bg-primary/10 text-primary text-xs">{h}</Badge>
                      ))}
                    </div>
                  )}
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

export default EditAvailableSecondaries;
