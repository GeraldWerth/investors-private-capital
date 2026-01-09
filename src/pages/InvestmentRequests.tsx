import { useState } from "react";
import { ArrowLeft, Search, Building2, TrendingUp, Filter, Bookmark, Send, Euro, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DataRoom = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const matchingOpportunities = [
    {
      id: 1,
      company: "HydrogenNext GmbH",
      sector: "CleanTech",
      stage: "Series A",
      seeking: "€3M",
      valuation: "€15M Pre",
      traction: "€800K ARR",
      team: "Ex-Siemens founders",
      matchScore: 95,
      highlights: ["Strong IP", "LOI from strategic", "Growing 3x YoY"]
    },
    {
      id: 2,
      company: "PowerGrid AI",
      sector: "Smart Grid",
      stage: "Seed",
      seeking: "€1.5M",
      valuation: "€6M Pre",
      traction: "3 Pilot Customers",
      team: "PhD team from TUM",
      matchScore: 88,
      highlights: ["Patent pending", "B2B Focus", "First revenues"]
    },
    {
      id: 3,
      company: "StorageFlow",
      sector: "Energy Storage",
      stage: "Series A",
      seeking: "€5M",
      valuation: "€25M Pre",
      traction: "€2.1M ARR",
      team: "Serial entrepreneurs",
      matchScore: 82,
      highlights: ["Market leader DACH", "Expansion ready", "Strong unit economics"]
    }
  ];

  const savedSearches = [
    { name: "CleanTech Series A", filters: "€2-5M, DACH, 2024", matches: 8 },
    { name: "Smart Grid Seed", filters: "€500K-2M, B2B", matches: 12 },
    { name: "Storage Growth", filters: "€5M+, Revenue >€1M", matches: 4 }
  ];

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

        {/* Request Form */}
        {showRequestForm && (
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Submit Investment Request
              </CardTitle>
              <CardDescription>Describe what you're looking for and we'll match you with opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Target Sectors</Label>
                    <Input placeholder="e.g. CleanTech, Energy Storage" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Investment Stage</Label>
                    <Input placeholder="e.g. Seed, Series A, Series B" className="rounded-xl" />
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
                  <Label>Additional Requirements</Label>
                  <Textarea 
                    placeholder="Describe any specific criteria: minimum traction, team background, technology requirements..."
                    className="rounded-xl min-h-24"
                  />
                </div>
                <div className="flex gap-3 justify-end">
                  <Button variant="outline" onClick={() => setShowRequestForm(false)} className="rounded-xl">
                    Cancel
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                    Submit Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Matching Opportunities */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Matching Opportunities
            </CardTitle>
            <CardDescription>Startups that match your investment criteria</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {matchingOpportunities.map((opp) => (
              <div 
                key={opp.id}
                className="p-5 rounded-2xl bg-secondary border border-border hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground text-lg">{opp.company}</h3>
                        <Badge className="bg-primary/20 text-primary">{opp.matchScore}% Match</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{opp.sector}</Badge>
                        <Badge variant="outline">{opp.stage}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{opp.seeking}</p>
                      <p className="text-sm text-muted-foreground">{opp.valuation}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-3 bg-background/50 rounded-xl">
                    <div>
                      <p className="text-xs text-muted-foreground">Traction</p>
                      <p className="font-semibold text-foreground">{opp.traction}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Team</p>
                      <p className="font-semibold text-foreground">{opp.team}</p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <p className="text-xs text-muted-foreground mb-1">Highlights</p>
                      <div className="flex flex-wrap gap-1">
                        {opp.highlights.map((h) => (
                          <Badge key={h} className="bg-primary/10 text-primary text-xs">{h}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                      Request Introduction
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Saved Searches */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-accent" />
              Saved Searches
            </CardTitle>
            <CardDescription>Your saved search criteria</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {savedSearches.map((search, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:bg-primary/5 transition-colors"
              >
                <div>
                  <p className="font-medium text-foreground">{search.name}</p>
                  <p className="text-sm text-muted-foreground">{search.filters}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary/20 text-primary">{search.matches} matches</Badge>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Run
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DataRoom;