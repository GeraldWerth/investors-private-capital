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

        {/* Form Card */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="border-b border-border pb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Send className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-foreground">Search Request to EIN Energy</CardTitle>
                <CardDescription>Commission EIN Energy to search for investments or secondaries on your behalf</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Your search request has been submitted. We will get back to you shortly.");
              }}
            >
              {/* Type of Request */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-primary uppercase tracking-wider">Type of Request</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-primary/40 transition-colors cursor-pointer">
                    <Checkbox id="primary-inv" className="mt-0.5" />
                    <div>
                      <Label htmlFor="primary-inv" className="font-medium cursor-pointer">Primary Investment</Label>
                      <p className="text-xs text-muted-foreground mt-0.5">Direct investment in startups or funds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-primary/40 transition-colors cursor-pointer">
                    <Checkbox id="secondary-inv" className="mt-0.5" />
                    <div>
                      <Label htmlFor="secondary-inv" className="font-medium cursor-pointer">Secondary</Label>
                      <p className="text-xs text-muted-foreground mt-0.5">Purchase of existing shares</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Criteria */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-primary uppercase tracking-wider">Investment Criteria</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1.5 text-sm">
                      <Layers className="w-3.5 h-3.5 text-muted-foreground" />
                      Target Sectors
                    </Label>
                    <Input placeholder="e.g. CleanTech, Renewables, Energy Storage" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1.5 text-sm">
                      <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                      Investment Stage
                    </Label>
                    <Input placeholder="e.g. Seed, Series A, Series B, Growth" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1.5 text-sm">
                      <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
                      Ticket Size
                    </Label>
                    <Input placeholder="e.g. €500K – €2M" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1.5 text-sm">
                      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                      Geographic Focus
                    </Label>
                    <Input placeholder="e.g. DACH, EU, Global" className="rounded-xl" />
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-primary uppercase tracking-wider">Special Requirements</Label>
                <Textarea
                  placeholder="Describe specific criteria: minimum traction, team background, technology requirements, desired returns..."
                  className="rounded-xl min-h-[100px]"
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-1 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl"
                  onClick={() => {
                    const form = document.querySelector("form") as HTMLFormElement;
                    form?.reset();
                  }}
                >
                  Cancel
                </Button>
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

export default InvestmentRequests;
