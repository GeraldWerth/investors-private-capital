import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Repeat, Send, Building2, User, Mail, Phone, MapPin, Euro, Target, FileText } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSecondariesData } from "@/hooks/useSecondariesData";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useToast } from "@/hooks/use-toast";

const EditAvailableSecondaries = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const { availableSecondaries } = useSecondariesData();
  const { userProfile, companyProfile } = useUserProfile();

  const selectedSecondary = availableSecondaries.find((s) => s.id === id);

  const [offerType, setOfferType] = useState<"full" | "partial" | "counter">("full");
  const [bidPrice, setBidPrice] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitOffer = () => {
    if (!bidPrice && offerType !== "full") {
      toast({
        title: "Missing Information",
        description: "Please enter your bid price.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Offer Submitted",
      description: `Your ${offerType === "full" ? "full" : offerType === "partial" ? "partial" : "counter"} offer has been submitted successfully.`,
    });
    navigate("/secondaries");
  };

  // Fallback when no secondary selected
  if (!selectedSecondary) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16 gap-4">
              <Link to="/secondaries" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Secondaries</span>
              </Link>
            </div>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Repeat className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">No Offer Selected</h2>
          <p className="text-muted-foreground mb-6">Please select a secondary offer from the marketplace first.</p>
          <Link to="/secondaries">
            <Button className="bg-primary hover:bg-primary/90 rounded-xl">Browse Available Secondaries</Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Place Offer</h1>
                  <p className="text-xs text-muted-foreground">Respond to Secondary Deal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Original Deal Summary */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Original Deal
            </CardTitle>
            <CardDescription>Details of the secondary offer you are responding to</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-5 rounded-2xl bg-secondary border border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{selectedSecondary.company}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-muted-foreground/30">{selectedSecondary.sector}</Badge>
                    <Badge variant="outline" className="border-muted-foreground/30">{selectedSecondary.jurisdiction}</Badge>
                    <Badge variant="outline" className="border-muted-foreground/30">{selectedSecondary.securityType}</Badge>
                    <Badge variant="outline" className="border-muted-foreground/30">{selectedSecondary.transactionType}</Badge>
                    <Badge className="bg-accent/20 text-accent">{selectedSecondary.sellerType}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{selectedSecondary.totalOfferedSize}</p>
                  <p className="text-sm text-muted-foreground">total offered</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 bg-background/50 rounded-xl">
                <div>
                  <p className="text-xs text-muted-foreground">Valuation</p>
                  <p className="font-semibold text-foreground">{selectedSecondary.valuation}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Price / Share</p>
                  <p className="font-semibold text-foreground">{selectedSecondary.pricePerShare}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Min. Investment</p>
                  <p className="font-semibold text-foreground">{selectedSecondary.minimumInvestment}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total Size</p>
                  <p className="font-semibold text-foreground">{selectedSecondary.totalOfferedSize}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Offer */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-l-4 border-l-accent">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Euro className="w-5 h-5 text-accent" />
              Your Offer
            </CardTitle>
            <CardDescription>Choose how you want to respond to this deal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Offer Type Selection */}
            <div>
              <Label className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 block">Offer Type</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  onClick={() => setOfferType("full")}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    offerType === "full"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <p className="font-semibold text-foreground">Full Purchase</p>
                  <p className="text-sm text-muted-foreground mt-1">Buy the entire offered position at asking price</p>
                </button>
                <button
                  onClick={() => setOfferType("partial")}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    offerType === "partial"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <p className="font-semibold text-foreground">Partial Purchase</p>
                  <p className="text-sm text-muted-foreground mt-1">Buy only a portion of the offered position</p>
                </button>
                <button
                  onClick={() => setOfferType("counter")}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    offerType === "counter"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <p className="font-semibold text-foreground">Counter Offer</p>
                  <p className="text-sm text-muted-foreground mt-1">Propose a different price for the position</p>
                </button>
              </div>
            </div>

            {/* Conditional Fields */}
            {offerType === "full" && (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground">
                  You are offering to purchase the <span className="font-bold text-primary">full position</span> of{" "}
                  <span className="font-bold">{selectedSecondary.totalOfferedSize}</span> at the asking price of{" "}
                  <span className="font-bold">{selectedSecondary.pricePerShare}</span> per share.
                </p>
              </div>
            )}

            {offerType === "partial" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Your Desired Amount *</Label>
                  <Input
                    placeholder={`e.g. €500k (of ${selectedSecondary.totalOfferedSize} total)`}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Min. investment: {selectedSecondary.minimumInvestment}
                  </p>
                </div>
                <div>
                  <Label className="mb-2 block">Your Bid Price per Share</Label>
                  <Input
                    placeholder={`Asking: ${selectedSecondary.pricePerShare}`}
                    value={bidPrice}
                    onChange={(e) => setBidPrice(e.target.value)}
                    className="rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Leave empty to accept asking price
                  </p>
                </div>
              </div>
            )}

            {offerType === "counter" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Your Counter Price per Share *</Label>
                  <Input
                    placeholder={`Asking: ${selectedSecondary.pricePerShare}`}
                    value={bidPrice}
                    onChange={(e) => setBidPrice(e.target.value)}
                    className="rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Original asking price: {selectedSecondary.pricePerShare}
                  </p>
                </div>
                <div>
                  <Label className="mb-2 block">Amount to Purchase</Label>
                  <Input
                    placeholder={`Total available: ${selectedSecondary.totalOfferedSize}`}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Leave empty for full position
                  </p>
                </div>
              </div>
            )}

            {/* Message */}
            <div>
              <Label className="mb-2 block">Message to Seller (optional)</Label>
              <Textarea
                placeholder="Add a personal message, e.g. reasons for your offer, timeline preferences, or questions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-xl min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Your Contact Details (auto-filled) */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Your Contact Details
            </CardTitle>
            <CardDescription>These details will be shared with the seller upon submission</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Info */}
              <div className="p-4 rounded-xl bg-secondary border border-border space-y-3">
                <h4 className="font-medium text-foreground text-sm flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Personal
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
                    <p className="font-medium text-foreground text-xs">{userProfile.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-muted-foreground" />
                    <p className="font-medium text-foreground text-xs">{userProfile.phone}</p>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="p-4 rounded-xl bg-secondary border border-border space-y-3">
                <h4 className="font-medium text-foreground text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  Company
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Company</p>
                    <p className="font-medium text-foreground">{companyProfile.name}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3 h-3 text-muted-foreground mt-0.5" />
                    <p className="font-medium text-foreground text-xs">{companyProfile.street}, {companyProfile.zip} {companyProfile.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={() => navigate("/secondaries")} className="rounded-xl">
            Cancel
          </Button>
          <Button onClick={handleSubmitOffer} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8">
            <Send className="w-4 h-4 mr-2" />
            Submit Offer
          </Button>
        </div>
      </main>
    </div>
  );
};

export default EditAvailableSecondaries;
