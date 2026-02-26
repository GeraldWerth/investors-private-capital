import { ArrowLeft, Search, TrendingUp, Send, Briefcase, Globe, Target, Layers, FileSearch, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const InvestmentRequests = () => {
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
                  <Search className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Investment Requests</h1>
                  <p className="text-xs text-muted-foreground">Commission a Search to EIN Energy</p>
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

        {/* Intro Banner */}
        <div className="rounded-2xl bg-primary/5 border border-primary/20 px-6 py-5 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-1">Direct Investment Search Request</h2>
            <p className="text-sm text-muted-foreground">
              Let EIN Energy search for direct investment opportunities on your behalf — primary deals, secondaries, and co-investments tailored to your criteria.
            </p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="border border-border bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Requests Sent</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-xs text-muted-foreground">In Progress</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <FileSearch className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">7</p>
                <p className="text-xs text-muted-foreground">Matches Found</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Request Form */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="border-b border-border pb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Send className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-foreground">New Search Request</CardTitle>
                <CardDescription>Commission EIN Energy to find investment opportunities</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-foreground">Type of Request</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/50 hover:border-primary/30 transition-colors cursor-pointer">
                  <Checkbox />
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Primary Investment</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/50 hover:border-primary/30 transition-colors cursor-pointer">
                  <Checkbox />
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Secondary</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sectors" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-primary" /> Target Sectors
                </Label>
                <Input id="sectors" placeholder="e.g. CleanTech, Energy Storage" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stage" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-primary" /> Stage
                </Label>
                <Input id="stage" placeholder="e.g. Seed, Series A, Growth" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-primary" /> Ticket Size
                </Label>
                <Input id="ticket" placeholder="e.g. €500K – €2M" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="geography" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-primary" /> Geography
                </Label>
                <Input id="geography" placeholder="e.g. DACH, EU, Global" className="rounded-xl" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements" className="text-sm font-semibold text-foreground">Special Requirements</Label>
              <Textarea id="requirements" placeholder="Describe any additional criteria or preferences..." className="rounded-xl min-h-[100px]" />
            </div>

            <div className="flex justify-end">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6"
                onClick={() => toast.success("Search request submitted successfully!")}
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Request
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Request History */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="border-b border-border pb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-foreground">My Search Requests</CardTitle>
                <CardDescription>Overview of all submitted investment search requests</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4 space-y-3">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-secondary/50 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground truncate">CleanTech Series A – DACH Region</h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full shrink-0">Completed</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">Primary Investment · €500K–€2M · Seed/Series A</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Submitted: 12 Jan 2025</span>
                  <span>·</span>
                  <span>3 Matches</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-secondary/50 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground truncate">Energy Storage Secondary – EU</h3>
                  <span className="text-xs font-medium text-accent-foreground bg-accent/30 px-2.5 py-0.5 rounded-full shrink-0">In Progress</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">Secondary · €1M–€5M · Growth</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Submitted: 28 Jan 2025</span>
                  <span>·</span>
                  <span>2 Matches</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-secondary/50 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground truncate">Renewables Co-Investment – Global</h3>
                  <span className="text-xs font-medium text-accent-foreground bg-accent/30 px-2.5 py-0.5 rounded-full shrink-0">In Progress</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">Primary Investment · €2M–€10M · Series B</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Submitted: 15 Feb 2025</span>
                  <span>·</span>
                  <span>2 Matches</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default InvestmentRequests;
