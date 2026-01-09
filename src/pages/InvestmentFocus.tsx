import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, ArrowLeft, ArrowRight,
  Target, Euro, Building2, Briefcase,
  Factory, Zap, Leaf, Globe, Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const FundingRounds = () => {
  const investmentCriteria = {
    sectors: ["CleanTech", "Energy Storage", "Smart Grid", "Renewables"],
    stages: ["Seed", "Series A", "Series B"],
    ticketSize: { min: "500K", max: "5M" },
    geography: ["DACH", "Nordics", "Benelux"]
  };

  const sectorFocus = [
    { name: "CleanTech", icon: Leaf, allocation: 35, deals: 8, color: "text-green-500" },
    { name: "Energy Storage", icon: Zap, allocation: 25, deals: 5, color: "text-yellow-500" },
    { name: "Smart Grid", icon: Globe, allocation: 20, deals: 4, color: "text-blue-500" },
    { name: "Industrial Tech", icon: Factory, allocation: 12, deals: 3, color: "text-purple-500" },
    { name: "Carbon Capture", icon: Shield, allocation: 8, deals: 2, color: "text-teal-500" }
  ];

  const recentDeals = [
    { company: "SolarFlow GmbH", stage: "Series A", amount: "€2.5M", sector: "CleanTech", status: "Closed" },
    { company: "GridOptimize", stage: "Seed", amount: "€800K", sector: "Smart Grid", status: "Closed" },
    { company: "BatteryNext", stage: "Series B", amount: "€4.2M", sector: "Energy Storage", status: "In Progress" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/private-capital-dashboard"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Investment Focus</h1>
                  <p className="text-xs text-muted-foreground">Your Investment Criteria</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="hidden sm:inline text-sm font-semibold text-foreground">EIN Energy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">22</p>
                <p className="text-xs text-muted-foreground">Total Deals</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Euro className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">€28M</p>
                <p className="text-xs text-muted-foreground">Invested</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-xs text-muted-foreground">Sectors</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Regions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Criteria */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Your Investment Criteria
            </CardTitle>
            <CardDescription>Define and manage your investment preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-secondary border border-border">
                <h4 className="font-semibold text-foreground mb-3">Target Sectors</h4>
                <div className="flex flex-wrap gap-2">
                  {investmentCriteria.sectors.map((sector) => (
                    <Badge key={sector} className="bg-primary/20 text-primary">{sector}</Badge>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary border border-border">
                <h4 className="font-semibold text-foreground mb-3">Investment Stages</h4>
                <div className="flex flex-wrap gap-2">
                  {investmentCriteria.stages.map((stage) => (
                    <Badge key={stage} variant="outline" className="border-accent text-accent">{stage}</Badge>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary border border-border">
                <h4 className="font-semibold text-foreground mb-3">Ticket Size</h4>
                <p className="text-lg font-bold text-primary">
                  €{investmentCriteria.ticketSize.min} - €{investmentCriteria.ticketSize.max}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-secondary border border-border">
                <h4 className="font-semibold text-foreground mb-3">Geographic Focus</h4>
                <div className="flex flex-wrap gap-2">
                  {investmentCriteria.geography.map((geo) => (
                    <Badge key={geo} variant="outline" className="border-muted-foreground">{geo}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
              Edit Investment Criteria
            </Button>
          </CardContent>
        </Card>

        {/* Sector Allocation */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Sector Allocation
            </CardTitle>
            <CardDescription>Portfolio distribution by sector</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sectorFocus.map((sector) => (
                <div key={sector.name} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <sector.icon className={`w-5 h-5 ${sector.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-medium text-foreground">{sector.name}</span>
                      <span className="text-muted-foreground">{sector.deals} deals · {sector.allocation}%</span>
                    </div>
                    <Progress value={sector.allocation} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Deals */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Recent Investments
            </CardTitle>
            <CardDescription>Your latest deals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentDeals.map((deal, index) => (
              <div 
                key={index}
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
                  <Badge className={deal.status === "Closed" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}>
                    {deal.status}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
              View All Investments
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FundingRounds;