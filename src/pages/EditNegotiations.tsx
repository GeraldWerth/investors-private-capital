import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, Trash2, Clock, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSecondariesData, ActiveNegotiation } from "@/hooks/useSecondariesData";
import { useToast } from "@/hooks/use-toast";

const EditNegotiations = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { negotiations, saveNegotiations } = useSecondariesData();
  const [items, setItems] = useState<ActiveNegotiation[]>(negotiations);
  const [newItem, setNewItem] = useState<Partial<ActiveNegotiation>>({
    company: "",
    shares: "",
    stage: "Negotiation",
    lastUpdate: ""
  });

  const handleAddItem = () => {
    if (!newItem.company || !newItem.shares) {
      toast({
        title: "Fehlende Daten",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    const item: ActiveNegotiation = {
      id: Date.now().toString(),
      company: newItem.company || "",
      shares: newItem.shares || "",
      stage: newItem.stage as "Due Diligence" | "Term Sheet" | "Negotiation" | "Closing" || "Negotiation",
      lastUpdate: newItem.lastUpdate || "Heute"
    };

    setItems([...items, item]);
    setNewItem({
      company: "",
      shares: "",
      stage: "Negotiation",
      lastUpdate: ""
    });
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSave = () => {
    saveNegotiations(items);
    toast({
      title: "Gespeichert",
      description: "Verhandlungen wurden aktualisiert."
    });
    navigate("/secondaries");
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Due Diligence": return "bg-blue-500/20 text-blue-600";
      case "Term Sheet": return "bg-accent/20 text-accent";
      case "Negotiation": return "bg-yellow-500/20 text-yellow-600";
      case "Closing": return "bg-green-500/20 text-green-600";
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
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Aktive Verhandlungen</h1>
                  <p className="text-xs text-muted-foreground">Laufende Deals verwalten</p>
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
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-l-4 border-l-accent">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Neue Verhandlung hinzufügen</CardTitle>
            <CardDescription>Erfassen Sie einen neuen laufenden Deal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                placeholder="Unternehmen *"
                value={newItem.company}
                onChange={(e) => setNewItem({ ...newItem, company: e.target.value })}
                className="rounded-xl"
              />
              <Input
                placeholder="Anteile * (z.B. 6%)"
                value={newItem.shares}
                onChange={(e) => setNewItem({ ...newItem, shares: e.target.value })}
                className="rounded-xl"
              />
              <Select
                value={newItem.stage}
                onValueChange={(value) => setNewItem({ ...newItem, stage: value as "Due Diligence" | "Term Sheet" | "Negotiation" | "Closing" })}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Phase" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Negotiation">Negotiation</SelectItem>
                  <SelectItem value="Due Diligence">Due Diligence</SelectItem>
                  <SelectItem value="Term Sheet">Term Sheet</SelectItem>
                  <SelectItem value="Closing">Closing</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Letztes Update (z.B. Heute)"
                value={newItem.lastUpdate}
                onChange={(e) => setNewItem({ ...newItem, lastUpdate: e.target.value })}
                className="rounded-xl"
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
            <CardTitle className="text-xl font-bold">Aktuelle Verhandlungen ({items.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-secondary border border-border flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-foreground">{item.company}</h3>
                    <Badge className={getStageColor(item.stage)}>{item.stage}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.shares} Anteile • Letztes Update: {item.lastUpdate}
                  </p>
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
              <p className="text-center text-muted-foreground py-8">Keine Verhandlungen vorhanden</p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditNegotiations;
