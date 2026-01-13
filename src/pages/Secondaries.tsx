import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  TrendingUp, ArrowLeft, Plus,
  Euro, Building2, Search,
  BarChart3, Clock, Repeat, Filter, Send, Settings,
  User, Mail, Phone, MapPin, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useSecondariesData, AvailableSecondary } from "@/hooks/useSecondariesData";
import { useUserProfile } from "@/hooks/useUserProfile";

const ExitPreparation = () => {
  const { toast } = useToast();
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [showInterestDialog, setShowInterestDialog] = useState(false);
  const [selectedSecondary, setSelectedSecondary] = useState<AvailableSecondary | null>(null);
  const { availableSecondaries, myOffers, negotiations, exits } = useSecondariesData();
  const { userProfile, companyProfile } = useUserProfile();

  const handleExpressInterest = (secondary: AvailableSecondary) => {
    setSelectedSecondary(secondary);
    setShowInterestDialog(true);
  };

  const confirmInterest = () => {
    if (selectedSecondary) {
      toast({
        title: "Interesse bekundet",
        description: `Ihr Kaufinteresse für ${selectedSecondary.company} wurde übermittelt.`,
      });
    }
    setShowInterestDialog(false);
    setSelectedSecondary(null);
  };

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-600";
      case "Pending Review":
        return "bg-accent/20 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleSubmitOffer = () => {
    toast({
      title: "Offer Submitted",
      description: "Your secondary offer has been submitted for review.",
    });
    setShowOfferForm(false);
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

        {/* Tabs for Offers and Requests */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 rounded-xl bg-card p-1 border border-border">
            <TabsTrigger value="requests" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Search className="w-4 h-4 mr-2" />
              Requests (Buy)
            </TabsTrigger>
            <TabsTrigger value="offers" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Send className="w-4 h-4 mr-2" />
              Offers (Sell)
            </TabsTrigger>
          </TabsList>

          {/* Requests Tab - Browse Available Secondaries */}
          <TabsContent value="requests" className="space-y-6">
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
                        <Link to="/edit-available-secondaries" className="flex-1">
                          <Button variant="outline" className="w-full border-accent/30 text-accent hover:bg-accent/10 rounded-xl">
                            Angebot platzieren
                          </Button>
                        </Link>
                        <Button 
                          onClick={() => handleExpressInterest(secondary)}
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                        >
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
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" />
                      Active Negotiations
                    </CardTitle>
                    <CardDescription>Your ongoing secondary deals</CardDescription>
                  </div>
                  <Link to="/edit-negotiations">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-3">
                  {negotiations.map((deal) => (
                    <div 
                      key={deal.id}
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
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Recent Exits
                    </CardTitle>
                    <CardDescription>Your successful portfolio exits</CardDescription>
                  </div>
                  <Link to="/edit-exits">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-3">
                  {exits.map((exit) => (
                    <div 
                      key={exit.id}
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
          </TabsContent>

          {/* Offers Tab - Sell Your Secondaries */}
          <TabsContent value="offers" className="space-y-6">
            {/* Create Offer Button */}
            <div className="flex justify-end">
              <Button 
                onClick={() => setShowOfferForm(!showOfferForm)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create New Offer
              </Button>
            </div>

            {/* New Offer Form */}
            {showOfferForm && (
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Create Secondary Offer</CardTitle>
                  <CardDescription>List your shares for sale on the secondary market</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Company Name</label>
                      <Input placeholder="Enter company name" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Sector</label>
                      <Input placeholder="e.g., CleanTech, Smart Grid" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Shares Offered (%)</label>
                      <Input placeholder="e.g., 5%" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Current Valuation</label>
                      <Input placeholder="e.g., €20M" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Asking Price</label>
                      <Input placeholder="e.g., €1M" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Priority Level</label>
                      <Input placeholder="High, Medium, Low" className="rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Highlights (comma separated)</label>
                    <Input placeholder="e.g., Profitable, Strong Growth, Key Partnerships" className="rounded-xl" />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowOfferForm(false)}
                      className="rounded-xl"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleSubmitOffer}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Offer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* My Offers */}
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary" />
                    My Offers
                  </CardTitle>
                  <CardDescription>Your secondary shares listed for sale</CardDescription>
                </div>
                <Link to="/edit-my-offers">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Settings className="w-4 h-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {myOffers.map((offer) => (
                  <div 
                    key={offer.id}
                    className="p-5 rounded-2xl bg-secondary border border-border hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-foreground text-lg">{offer.company}</h3>
                            <Badge className={getStatusColor(offer.status)}>
                              {offer.status}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="border-muted-foreground/30">{offer.sector}</Badge>
                            <Badge variant="outline" className="border-muted-foreground/30">Created: {offer.createdAt}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{offer.askingPrice}</p>
                          <p className="text-sm text-muted-foreground">for {offer.sharesOffered} shares</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 p-3 bg-background/50 rounded-xl">
                        <div>
                          <p className="text-xs text-muted-foreground">Valuation</p>
                          <p className="font-semibold text-foreground">{offer.valuation}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Shares</p>
                          <p className="font-semibold text-foreground">{offer.sharesOffered}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Inquiries</p>
                          <p className="font-semibold text-foreground">{offer.inquiries}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                          Edit Offer
                        </Button>
                        <Button variant="outline" className="flex-1 rounded-xl text-destructive border-destructive/30 hover:bg-destructive/10">
                          Remove
                        </Button>
                        <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                          View Inquiries ({offer.inquiries})
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Express Interest Dialog */}
      <Dialog open={showInterestDialog} onOpenChange={setShowInterestDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Kaufinteresse bekunden
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2">
              Mit dieser Anfrage bekunden Sie Ihr Kaufinteresse für das folgende Angebot. Ihre Kontaktdaten werden dem Verkäufer übermittelt.
            </DialogDescription>
          </DialogHeader>
          
          {selectedSecondary && (
            <div className="space-y-4">
              {/* Selected Offer Info */}
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground">{selectedSecondary.company}</h4>
                <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
                  <span>{selectedSecondary.sector}</span>
                  <span>•</span>
                  <span>{selectedSecondary.sharesAvailable} Anteile</span>
                  <span>•</span>
                  <span className="font-semibold text-primary">{selectedSecondary.askingPrice}</span>
                </div>
              </div>

              {/* User Data */}
              <div className="p-4 rounded-xl bg-secondary border border-border space-y-3">
                <h4 className="font-medium text-foreground text-sm flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Ihre Kontaktdaten
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Name</p>
                    <p className="font-medium text-foreground">{userProfile.firstName} {userProfile.lastName}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Position</p>
                    <p className="font-medium text-foreground">{userProfile.position}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-muted-foreground" />
                    <p className="font-medium text-foreground">{userProfile.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-muted-foreground" />
                    <p className="font-medium text-foreground">{userProfile.phone}</p>
                  </div>
                </div>
              </div>

              {/* Company Data */}
              <div className="p-4 rounded-xl bg-secondary border border-border space-y-3">
                <h4 className="font-medium text-foreground text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  Unternehmensdaten
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="col-span-2">
                    <p className="text-muted-foreground text-xs">Unternehmen</p>
                    <p className="font-medium text-foreground">{companyProfile.name}</p>
                  </div>
                  <div className="col-span-2 flex items-start gap-2">
                    <MapPin className="w-3 h-3 text-muted-foreground mt-0.5" />
                    <p className="font-medium text-foreground">{companyProfile.street}, {companyProfile.zip} {companyProfile.city}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowInterestDialog(false)}
                  className="flex-1 rounded-xl"
                >
                  Abbrechen
                </Button>
                <Button 
                  onClick={confirmInterest}
                  className="flex-1 bg-primary hover:bg-primary/90 rounded-xl"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Interesse bestätigen
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExitPreparation;