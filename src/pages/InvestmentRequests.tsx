import { useState } from "react";
import { ArrowLeft, Search, Building2, TrendingUp, Filter, Bookmark, Send, Target, Clock, CheckCircle2, AlertCircle } from "lucide-react";
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
              Suchauftrag an EIN Energy
            </CardTitle>
            <CardDescription>Beauftragen Sie EIN Energy gezielt mit der Suche nach Investitionen oder Secondaries</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => { 
              e.preventDefault(); 
              toast.success("Ihr Suchauftrag wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.");
              setShowRequestForm(false);
            }}>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Art des Suchauftrags (Mehrfachauswahl möglich)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-primary/50 transition-colors">
                    <Checkbox id="investment" className="mt-1" />
                    <div>
                      <Label htmlFor="investment" className="font-medium cursor-pointer">Primärinvestition</Label>
                      <p className="text-sm text-muted-foreground">Direktinvestition in Startups oder Fonds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-primary/50 transition-colors">
                    <Checkbox id="secondary" className="mt-1" />
                    <div>
                      <Label htmlFor="secondary" className="font-medium cursor-pointer">Secondary</Label>
                      <p className="text-sm text-muted-foreground">Kauf von bestehenden Anteilen</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Zielsektoren</Label>
                  <Input placeholder="z.B. CleanTech, Renewables, Energy Storage" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Investmentphase</Label>
                  <Input placeholder="z.B. Seed, Series A, Series B, Growth" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Ticketgröße</Label>
                  <Input placeholder="z.B. €500K - €2M" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Geografischer Fokus</Label>
                  <Input placeholder="z.B. DACH, EU, Global" className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Besondere Anforderungen</Label>
                <Textarea 
                  placeholder="Beschreiben Sie spezifische Kriterien: Mindest-Traction, Team-Hintergrund, Technologie-Anforderungen, gewünschte Rendite..."
                  className="rounded-xl min-h-24"
                />
              </div>
              <div className="flex gap-3 justify-end">
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  <Send className="w-4 h-4 mr-2" />
                  Suchauftrag absenden
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* My Search Requests */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Meine Suchaufträge
            </CardTitle>
            <CardDescription>Übersicht Ihrer beauftragten Suchen</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                id: 1,
                type: ["Primärinvestition"],
                sectors: "CleanTech, Renewables",
                ticketSize: "€1M - €3M",
                stage: "Series A",
                region: "DACH",
                status: "in_progress",
                createdAt: "5. Januar 2026",
                matches: 3
              },
              {
                id: 2,
                type: ["Secondary"],
                sectors: "Energy Storage",
                ticketSize: "€500K - €1.5M",
                stage: "Series B",
                region: "EU",
                status: "completed",
                createdAt: "20. Dezember 2025",
                matches: 5
              },
              {
                id: 3,
                type: ["Primärinvestition", "Secondary"],
                sectors: "Smart Grid, CleanTech",
                ticketSize: "€2M - €5M",
                stage: "Growth",
                region: "Global",
                status: "pending",
                createdAt: "15. Dezember 2025",
                matches: 0
              }
            ].map((request) => (
              <div 
                key={request.id}
                className="p-5 rounded-2xl bg-secondary border border-border hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-wrap gap-2">
                      {request.type.map((t) => (
                        <Badge key={t} className="bg-primary/20 text-primary">{t}</Badge>
                      ))}
                      <Badge 
                        className={
                          request.status === 'completed' 
                            ? 'bg-green-500/20 text-green-600' 
                            : request.status === 'in_progress'
                            ? 'bg-amber-500/20 text-amber-600'
                            : 'bg-muted text-muted-foreground'
                        }
                      >
                        {request.status === 'completed' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                        {request.status === 'in_progress' && <Clock className="w-3 h-3 mr-1" />}
                        {request.status === 'pending' && <AlertCircle className="w-3 h-3 mr-1" />}
                        {request.status === 'completed' ? 'Abgeschlossen' : request.status === 'in_progress' ? 'In Bearbeitung' : 'Ausstehend'}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{request.createdAt}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-background/50 rounded-xl">
                    <div>
                      <p className="text-xs text-muted-foreground">Sektoren</p>
                      <p className="font-medium text-foreground text-sm">{request.sectors}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Ticketgröße</p>
                      <p className="font-medium text-foreground text-sm">{request.ticketSize}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phase</p>
                      <p className="font-medium text-foreground text-sm">{request.stage}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Region</p>
                      <p className="font-medium text-foreground text-sm">{request.region}</p>
                    </div>
                  </div>

                  {request.matches > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {request.matches} passende Ergebnisse gefunden
                      </span>
                      <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                        Ergebnisse anzeigen
                      </Button>
                    </div>
                  )}
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