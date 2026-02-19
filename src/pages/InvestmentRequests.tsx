import { useState } from "react";
import { ArrowLeft, Search, Building2, TrendingUp, Filter, Bookmark, Send, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const DataRoom = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <div className="min-h-screen bg-background">
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
                  <Search className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Investment Requests</h1>
                  <p className="text-xs text-muted-foreground">Find Private Capital Opportunities</p>
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-xs text-muted-foreground">Matches</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-xs text-muted-foreground">Startups</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Saved Searches</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-xs text-muted-foreground">Requests Sent</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search startups by name, sector, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-xl"
                />
              </div>
              <Button variant="outline" className="rounded-xl border-primary text-primary">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                onClick={() => setShowRequestForm(true)}
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Request
              </Button>
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2 mt-4 flex-wrap">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">CleanTech</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Energy Storage</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Smart Grid</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Seed</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Series A</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">€1M-5M</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Investment Search Request Form */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Search Request to EIN Energy
            </CardTitle>
            <CardDescription>Commission EIN Energy to search for investments or secondaries on your behalf</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => { 
              e.preventDefault(); 
              toast.success("Your search request has been submitted successfully. We will get back to you shortly.");
              setShowRequestForm(false);
            }}>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Type of Search Request (multiple selection possible)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-primary/50 transition-colors">
                    <Checkbox id="investment" className="mt-1" />
                    <div>
                      <Label htmlFor="investment" className="font-medium cursor-pointer">Primary Investment</Label>
                      <p className="text-sm text-muted-foreground">Direct investment in startups or funds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-primary/50 transition-colors">
                    <Checkbox id="secondary" className="mt-1" />
                    <div>
                      <Label htmlFor="secondary" className="font-medium cursor-pointer">Secondary</Label>
                      <p className="text-sm text-muted-foreground">Purchase of existing shares</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Target Sectors</Label>
                  <Input placeholder="e.g. CleanTech, Renewables, Energy Storage" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Investment Stage</Label>
                  <Input placeholder="e.g. Seed, Series A, Series B, Growth" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Ticket Size</Label>
                  <Input placeholder="e.g. €500K - €2M" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Geographic Focus</Label>
                  <Input placeholder="e.g. DACH, EU, Global" className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Special Requirements</Label>
                <Textarea 
                  placeholder="Describe specific criteria: minimum traction, team background, technology requirements, desired returns..."
                  className="rounded-xl min-h-24"
                />
              </div>
              <div className="flex gap-3 justify-end">
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Search Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>


      </main>
    </div>
  );
};

export default DataRoom;