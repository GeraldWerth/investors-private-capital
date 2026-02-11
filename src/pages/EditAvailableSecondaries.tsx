import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    jurisdiction: "",
    securityType: "Common",
    transactionType: "Secondary",
    sellerType: "Investor",
    valuation: "",
    pricePerShare: "",
    minimumInvestment: "",
    totalOfferedSize: "",
  });

  const handleAddItem = () => {
    if (!newItem.company || !newItem.sector || !newItem.valuation) {
      toast({
        title: "Missing Data",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const item: AvailableSecondary = {
      id: Date.now().toString(),
      company: newItem.company || "",
      sector: newItem.sector || "",
      jurisdiction: newItem.jurisdiction || "",
      securityType: newItem.securityType || "Common",
      transactionType: newItem.transactionType || "Secondary",
      sellerType: newItem.sellerType || "Investor",
      valuation: newItem.valuation || "",
      pricePerShare: newItem.pricePerShare || "",
      minimumInvestment: newItem.minimumInvestment || "",
      totalOfferedSize: newItem.totalOfferedSize || "",
    };

    setItems([...items, item]);
    setNewItem({
      company: "",
      sector: "",
      jurisdiction: "",
      securityType: "Common",
      transactionType: "Secondary",
      sellerType: "Investor",
      valuation: "",
      pricePerShare: "",
      minimumInvestment: "",
      totalOfferedSize: "",
    });
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSave = () => {
    saveAvailableSecondaries(items);
    toast({
      title: "Saved",
      description: "Available secondaries have been updated."
    });
    navigate("/secondaries");
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
                  <Repeat className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Available Secondaries</h1>
                  <p className="text-xs text-muted-foreground">Manage purchase offers</p>
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
            <CardTitle className="text-xl font-bold">Add New Offer</CardTitle>
            <CardDescription>Add a new secondary purchase offer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Asset Identifier */}
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">1. Asset Identifier</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="mb-2 block">Company / Name *</Label>
                  <Input placeholder='e.g. "Confidential – SaaS Scaleup, EU"' value={newItem.company} onChange={(e) => setNewItem({ ...newItem, company: e.target.value })} className="rounded-xl" />
                </div>
                <div>
                  <Label className="mb-2 block">Sector / Industry *</Label>
                  <Input placeholder="e.g. AI, Fintech, Energy" value={newItem.sector} onChange={(e) => setNewItem({ ...newItem, sector: e.target.value })} className="rounded-xl" />
                </div>
                <div>
                  <Label className="mb-2 block">Jurisdiction</Label>
                  <Input placeholder="Country / Region" value={newItem.jurisdiction} onChange={(e) => setNewItem({ ...newItem, jurisdiction: e.target.value })} className="rounded-xl" />
                </div>
              </div>
            </div>

            {/* Transaction Snapshot */}
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">2. Transaction Snapshot</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="mb-2 block">Security Type</Label>
                  <Select value={newItem.securityType} onValueChange={(v) => setNewItem({ ...newItem, securityType: v as any })}>
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Common">Common</SelectItem>
                      <SelectItem value="Preferred">Preferred</SelectItem>
                      <SelectItem value="Convertible">Convertible</SelectItem>
                      <SelectItem value="LP Interest">LP Interest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Transaction Type</Label>
                  <Select value={newItem.transactionType} onValueChange={(v) => setNewItem({ ...newItem, transactionType: v as any })}>
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Secondary">Secondary</SelectItem>
                      <SelectItem value="Tender">Tender</SelectItem>
                      <SelectItem value="Structured">Structured</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Seller Type</Label>
                  <Select value={newItem.sellerType} onValueChange={(v) => setNewItem({ ...newItem, sellerType: v as any })}>
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Founder">Founder</SelectItem>
                      <SelectItem value="Employee">Employee</SelectItem>
                      <SelectItem value="Investor">Investor</SelectItem>
                      <SelectItem value="Fund">Fund</SelectItem>
                      <SelectItem value="SPV">SPV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Price Signal */}
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">3. Price Signal</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Valuation *</Label>
                  <Input placeholder="e.g. €45M" value={newItem.valuation} onChange={(e) => setNewItem({ ...newItem, valuation: e.target.value })} className="rounded-xl" />
                </div>
                <div>
                  <Label className="mb-2 block">Price per Share</Label>
                  <Input placeholder="e.g. €120" value={newItem.pricePerShare} onChange={(e) => setNewItem({ ...newItem, pricePerShare: e.target.value })} className="rounded-xl" />
                </div>
              </div>
            </div>

            {/* Ticket Size */}
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">4. Ticket Size</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Minimum Investment</Label>
                  <Input placeholder="e.g. €100k" value={newItem.minimumInvestment} onChange={(e) => setNewItem({ ...newItem, minimumInvestment: e.target.value })} className="rounded-xl" />
                </div>
                <div>
                  <Label className="mb-2 block">Total Offered Size</Label>
                  <Input placeholder="e.g. €3.5M available" value={newItem.totalOfferedSize} onChange={(e) => setNewItem({ ...newItem, totalOfferedSize: e.target.value })} className="rounded-xl" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={() => navigate("/secondaries")} className="rounded-xl">Cancel</Button>
              <Button onClick={handleAddItem} className="bg-primary hover:bg-primary/90 rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Existing Items */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Current Offers ({items.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-secondary border border-border flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">{item.company}</h3>
                    <Badge variant="outline">{item.sellerType}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{item.sector}</span>
                    <span>•</span>
                    <span>{item.jurisdiction}</span>
                    <span>•</span>
                    <span>{item.securityType}</span>
                    <span>•</span>
                    <span>{item.transactionType}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>Valuation: {item.valuation}</span>
                    <span>•</span>
                    <span>Price/Share: {item.pricePerShare}</span>
                    <span>•</span>
                    <span>Min: {item.minimumInvestment}</span>
                    <span>•</span>
                    <span>Total: {item.totalOfferedSize}</span>
                  </div>
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
              <p className="text-center text-muted-foreground py-8">No offers available</p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditAvailableSecondaries;
