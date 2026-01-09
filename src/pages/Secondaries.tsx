import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, ArrowLeft, ArrowRight,
  Euro, Building2, Users,
  BarChart3, Clock, Repeat, Filter
} from "lucide-react";
import { Link } from "react-router-dom";

const ExitPreparation = () => {
  const availableSecondaries = [
    {
      id: 1,
      company: "SolarFlow GmbH",
      sector: "CleanTech",
      sharesAvailable: "8%",
      valuation: "€45M",
      askingPrice: "€3.6M",
      seller: "Early Investor",
      urgency: "High",
      highlights: ["Profitable", "Strong Growth", "Strategic Buyer Interest"]
    },
    {
      id: 2,
      company: "GridOptimize",
      sector: "Smart Grid",
      sharesAvailable: "5%",
      valuation: "€28M",
      askingPrice: "€1.4M",
      seller: "Founder",
      urgency: "Medium",
      highlights: ["Series B Upcoming", "Key Partnerships"]
    },
    {
      id: 3,
      company: "BatteryNext",
      sector: "Energy Storage",
      sharesAvailable: "12%",
      valuation: "€62M",
      askingPrice: "€7.4M",
      seller: "VC Fund",
      urgency: "Low",
      highlights: ["Market Leader", "Patent Portfolio"]
    }
  ];

  const activeNegotiations = [
    { company: "EnergyAI Platform", shares: "6%", stage: "Due Diligence", lastUpdate: "2 days ago" },
    { company: "WindTech Pro", shares: "4%", stage: "Term Sheet", lastUpdate: "1 week ago" }
  ];

  const portfolioExits = [
    { company: "CleanEnergy Co", exitType: "Trade Sale", multiple: "4.2x", date: "Dec 2025" },
    { company: "SmartMeter GmbH", exitType: "Secondary", multiple: "2.8x", date: "Oct 2025" }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High":
        return "bg-red-500/20 text-red-600";
      case "Medium":
        return "bg-accent/20 text-accent";
      case "Low":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

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
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                  <Repeat className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Secondaries</h1>
                  <p className="text-xs text-muted-foreground">Secondary Market Opportunities</p>
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
                <Repeat className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Euro className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">€18M</p>
                <p className="text-xs text-muted-foreground">Total Value</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-xs text-muted-foreground">In Negotiation</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3.5x</p>
                <p className="text-xs text-muted-foreground">Avg. Multiple</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex gap-3 flex-wrap">
          <Button variant="outline" size="sm" className="rounded-xl border-primary text-primary">
            <Filter className="w-4 h-4 mr-2" />
            All Sectors
          </Button>
          <Button variant="outline" size="sm" className="rounded-xl">€500K - €2M</Button>
          <Button variant="outline" size="sm" className="rounded-xl">€2M - €5M</Button>
          <Button variant="outline" size="sm" className="rounded-xl">€5M+</Button>
        </div>

        {/* Available Secondaries */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Repeat className="w-5 h-5 text-primary" />
              Available Secondary Shares
            </CardTitle>
            <CardDescription>Explore secondary market opportunities from our network</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {availableSecondaries.map((secondary) => (
              <div 
                key={secondary.id}
                className="p-5 rounded-2xl bg-secondary border border-border hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground text-lg">{secondary.company}</h3>
                        <Badge className={getUrgencyColor(secondary.urgency)}>
                          {secondary.urgency} Priority
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="border-muted-foreground/30">{secondary.sector}</Badge>
                        <Badge variant="outline" className="border-muted-foreground/30">Seller: {secondary.seller}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{secondary.askingPrice}</p>
                      <p className="text-sm text-muted-foreground">for {secondary.sharesAvailable} shares</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 bg-background/50 rounded-xl">
                    <div>
                      <p className="text-xs text-muted-foreground">Valuation</p>
                      <p className="font-semibold text-foreground">{secondary.valuation}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Shares</p>
                      <p className="font-semibold text-foreground">{secondary.sharesAvailable}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-muted-foreground mb-1">Highlights</p>
                      <div className="flex flex-wrap gap-1">
                        {secondary.highlights.map((h) => (
                          <Badge key={h} className="bg-primary/10 text-primary text-xs">{h}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                      View Details
                    </Button>
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                      Express Interest
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Negotiations */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Active Negotiations
              </CardTitle>
              <CardDescription>Your ongoing secondary deals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {activeNegotiations.map((deal, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border"
                >
                  <div>
                    <p className="font-medium text-foreground">{deal.company}</p>
                    <p className="text-sm text-muted-foreground">{deal.shares} · {deal.lastUpdate}</p>
                  </div>
                  <Badge className="bg-accent/20 text-accent">{deal.stage}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Portfolio Exits */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Recent Exits
              </CardTitle>
              <CardDescription>Your successful portfolio exits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {portfolioExits.map((exit, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{exit.company}</p>
                      <p className="text-sm text-muted-foreground">{exit.exitType} · {exit.date}</p>
                    </div>
                  </div>
                  <span className="font-bold text-primary">{exit.multiple}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ExitPreparation;