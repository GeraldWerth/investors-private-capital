import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, Trash2, TrendingUp, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSecondariesData, PortfolioExit } from "@/hooks/useSecondariesData";
import { useToast } from "@/hooks/use-toast";

const EditExits = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { exits, saveExits } = useSecondariesData();
  const [items, setItems] = useState<PortfolioExit[]>(exits);
  const [newItem, setNewItem] = useState<Partial<PortfolioExit>>({
    company: "",
    exitType: "Trade Sale",
    multiple: "",
    date: ""
  });

  const handleAddItem = () => {
    if (!newItem.company || !newItem.multiple) {
      toast({
        title: "Missing Data",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const item: PortfolioExit = {
      id: Date.now().toString(),
      company: newItem.company || "",
      exitType: newItem.exitType as "Trade Sale" | "Secondary" | "IPO" | "Buyback" || "Trade Sale",
      multiple: newItem.multiple || "",
      date: newItem.date || new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
    };

    setItems([...items, item]);
    setNewItem({
      company: "",
      exitType: "Trade Sale",
      multiple: "",
      date: ""
    });
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSave = () => {
    saveExits(items);
    toast({
      title: "Saved",
      description: "Portfolio exits have been updated."
    });
    navigate("/secondaries");
  };

  const getExitTypeColor = (type: string) => {
    switch (type) {
      case "Trade Sale": return "bg-green-500/20 text-green-600";
      case "Secondary": return "bg-blue-500/20 text-blue-600";
      case "IPO": return "bg-primary/20 text-primary";
      case "Buyback": return "bg-accent/20 text-accent";
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
                <span className="hidden sm:inline font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Portfolio Exits</h1>
                  <p className="text-xs text-muted-foreground">Manage completed exits</p>
                </div>
              </div>
            </div>
            <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 rounded-xl">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Add New Form */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Neuen Exit hinzufügen</CardTitle>
            <CardDescription>Erfassen Sie einen abgeschlossenen Portfolio-Exit</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                placeholder="Unternehmen *"
                value={newItem.company}
                onChange={(e) => setNewItem({ ...newItem, company: e.target.value })}
                className="rounded-xl"
              />
              <Select
                value={newItem.exitType}
                onValueChange={(value) => setNewItem({ ...newItem, exitType: value as "Trade Sale" | "Secondary" | "IPO" | "Buyback" })}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Exit-Typ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Trade Sale">Trade Sale</SelectItem>
                  <SelectItem value="Secondary">Secondary</SelectItem>
                  <SelectItem value="IPO">IPO</SelectItem>
                  <SelectItem value="Buyback">Buyback</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Multiple * (z.B. 4.2x)"
                value={newItem.multiple}
                onChange={(e) => setNewItem({ ...newItem, multiple: e.target.value })}
                className="rounded-xl"
              />
              <Input
                placeholder="Datum (z.B. Dec 2025)"
                value={newItem.date}
                onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
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
            <CardTitle className="text-xl font-bold">Abgeschlossene Exits ({items.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-secondary border border-border flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-foreground">{item.company}</h3>
                    <Badge className={getExitTypeColor(item.exitType)}>{item.exitType}</Badge>
                    <span className="font-bold text-primary">{item.multiple}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
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
              <p className="text-center text-muted-foreground py-8">Keine Exits vorhanden</p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditExits;
