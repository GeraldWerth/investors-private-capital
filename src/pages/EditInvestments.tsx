import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, TrendingUp, Plus, Building2, Trash2, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useInvestmentCriteria } from "@/hooks/useInvestmentCriteria";

import { Investment } from "@/hooks/useInvestmentCriteria";

const stageOptions = [
  "Pre-Seed", "Seed", "Series A", "Series B", "Series C", "Series D+", "Growth Equity", "Bridge"
];

const statusOptions: Investment["status"][] = [
  "Closed", "In Progress", "Due Diligence", "Term Sheet"
];

const sectorOptions = [
  "CleanTech", "Energy Storage", "Smart Grid", "Renewables", "Carbon Capture",
  "Hydrogen & Fuel Cells", "Energy Efficiency", "Offshore Wind", "Onshore Wind",
  "Solar Technology", "Grid Infrastructure", "EV Charging", "Geothermal Energy",
  "Biogas & Biomass", "Nuclear Energy", "Hydropower", "Heat Pumps",
  "Power Electronics", "Energy Trading", "Building Energy"
];

const EditInvestments = () => {
  const navigate = useNavigate();
  const { investments, saveInvestments } = useInvestmentCriteria();
  const [investmentList, setInvestmentList] = useState<Investment[]>(investments);
  const [showForm, setShowForm] = useState(false);
  
  // Form state
  const [newInvestment, setNewInvestment] = useState<Omit<Investment, "id">>({
    company: "",
    sector: "",
    stage: "",
    amount: "",
    status: "In Progress",
    date: new Date().toISOString().split("T")[0],
  });

  const handleAddInvestment = () => {
    if (!newInvestment.company || !newInvestment.sector || !newInvestment.stage || !newInvestment.amount) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const investment: Investment = {
      ...newInvestment,
      id: Date.now().toString(),
    };

    setInvestmentList(prev => [investment, ...prev]);
    setNewInvestment({
      company: "",
      sector: "",
      stage: "",
      amount: "",
      status: "In Progress",
      date: new Date().toISOString().split("T")[0],
    });
    setShowForm(false);
    toast({
      title: "Investment Added",
      description: `${investment.company} has been added to your investments.`,
    });
  };

  const handleDeleteInvestment = (id: string) => {
    setInvestmentList(prev => prev.filter(inv => inv.id !== id));
    toast({
      title: "Investment Removed",
      description: "The investment has been removed from your list.",
    });
  };

  const handleSave = () => {
    saveInvestments(investmentList);
    toast({
      title: "Investments Saved",
      description: `${investmentList.length} investments have been saved.`,
    });
    navigate("/investment-focus");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/investment-focus"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Manage Investments</h1>
                  <p className="text-xs text-muted-foreground">Add and manage your deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Add New Investment */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Plus className="w-5 h-5 text-primary" />
                  Add New Investment
                </CardTitle>
                <CardDescription>Record a new deal in your portfolio</CardDescription>
              </div>
              {!showForm && (
                <Button 
                  onClick={() => setShowForm(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Investment
                </Button>
              )}
            </div>
          </CardHeader>
          
          {showForm && (
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-semibold">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    placeholder="e.g. SolarFlow GmbH"
                    value={newInvestment.company}
                    onChange={(e) => setNewInvestment(prev => ({ ...prev, company: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sector" className="text-foreground font-semibold">
                    Sector *
                  </Label>
                  <Select 
                    value={newInvestment.sector} 
                    onValueChange={(value) => setNewInvestment(prev => ({ ...prev, sector: value }))}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select sector" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      {sectorOptions.map(sector => (
                        <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="stage" className="text-foreground font-semibold">
                    Investment Stage *
                  </Label>
                  <Select 
                    value={newInvestment.stage} 
                    onValueChange={(value) => setNewInvestment(prev => ({ ...prev, stage: value }))}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      {stageOptions.map(stage => (
                        <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-foreground font-semibold">
                    Investment Amount *
                  </Label>
                  <Input
                    id="amount"
                    placeholder="e.g. €2.5M"
                    value={newInvestment.amount}
                    onChange={(e) => setNewInvestment(prev => ({ ...prev, amount: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="status" className="text-foreground font-semibold">
                    Status
                  </Label>
                  <Select 
                    value={newInvestment.status} 
                    onValueChange={(value) => setNewInvestment(prev => ({ ...prev, status: value as Investment["status"] }))}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      {statusOptions.map(status => (
                        <SelectItem key={status} value={status}>{status}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground font-semibold">
                    Investment Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={newInvestment.date}
                    onChange={(e) => setNewInvestment(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  onClick={handleAddInvestment}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Investment
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Investment List */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Your Investments ({investmentList.length})
            </CardTitle>
            <CardDescription>Manage your investment portfolio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {investmentList.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Building2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No investments yet. Add your first deal above.</p>
              </div>
            ) : (
              investmentList.map((deal) => (
                <div 
                  key={deal.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{deal.company}</p>
                      <p className="text-sm text-muted-foreground">{deal.sector} · {deal.stage}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-primary">{deal.amount}</span>
                    <Badge className={
                      deal.status === "Closed" 
                        ? "bg-primary/20 text-primary" 
                        : deal.status === "In Progress"
                        ? "bg-accent/20 text-accent"
                        : "bg-muted text-muted-foreground"
                    }>
                      {deal.status}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteInvestment(deal.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}

            {/* Save Button */}
            <div className="pt-4 border-t border-border mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {investmentList.length} Investment{investmentList.length !== 1 ? "s" : ""} in Portfolio
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Save changes to update your Investment Focus
                  </p>
                </div>
                <Button 
                  onClick={handleSave}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Investments
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditInvestments;
