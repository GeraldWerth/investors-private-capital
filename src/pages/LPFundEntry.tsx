import { ArrowLeft, TrendingUp, Send, Briefcase, Users, Globe, PieChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const LPFundEntry = () => {
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
                  <Briefcase className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Fund Entry for Limited Partners</h1>
                  <p className="text-xs text-muted-foreground">LP Investment Opportunities</p>
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
        {/* Intro */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-foreground">LP Fund Entry Request</h2>
          <p className="text-muted-foreground">
            Commission EIN Energy to identify suitable fund entry opportunities tailored to your profile as a Limited Partner.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Active Funds", value: "24" },
            { label: "Avg. Fund Size", value: "€180M" },
            { label: "Sectors Covered", value: "12" },
            { label: "Geographies", value: "EU & Global" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-t-4 border-t-accent">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-foreground">Submit LP Fund Entry Request</CardTitle>
                <CardDescription>Identify suitable fund entry opportunities as a Limited Partner</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Your LP fund entry request has been submitted. We will get back to you shortly.");
              }}
            >
              {/* Fund Type */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Fund Type (multiple selection possible)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-accent/50 transition-colors">
                    <Checkbox id="vc-fund" className="mt-1" />
                    <div>
                      <Label htmlFor="vc-fund" className="font-medium cursor-pointer">Venture Capital Fund</Label>
                      <p className="text-sm text-muted-foreground">Early- to growth-stage equity funds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-accent/50 transition-colors">
                    <Checkbox id="pe-fund" className="mt-1" />
                    <div>
                      <Label htmlFor="pe-fund" className="font-medium cursor-pointer">Private Equity Fund</Label>
                      <p className="text-sm text-muted-foreground">Buyout, growth equity or special situations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-accent/50 transition-colors">
                    <Checkbox id="infra-fund" className="mt-1" />
                    <div>
                      <Label htmlFor="infra-fund" className="font-medium cursor-pointer">Infrastructure / Real Assets</Label>
                      <p className="text-sm text-muted-foreground">Energy, infrastructure, real estate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-secondary hover:border-accent/50 transition-colors">
                    <Checkbox id="fof" className="mt-1" />
                    <div>
                      <Label htmlFor="fof" className="font-medium cursor-pointer">Fund of Funds</Label>
                      <p className="text-sm text-muted-foreground">Diversified exposure across multiple managers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><PieChart className="w-4 h-4 text-muted-foreground" />Target Sectors / Themes</Label>
                  <Input placeholder="e.g. CleanTech, Energy Transition, Deep Tech" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Globe className="w-4 h-4 text-muted-foreground" />Geographic Focus</Label>
                  <Input placeholder="e.g. DACH, Europe, Global" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-muted-foreground" />LP Commitment Size</Label>
                  <Input placeholder="e.g. €500K – €5M" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Users className="w-4 h-4 text-muted-foreground" />Preferred Fund Size</Label>
                  <Input placeholder="e.g. €50M – €300M" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Fund Stage Preference</Label>
                  <Input placeholder="e.g. First Close, Final Close, Secondary Entry" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Target Return / IRR Expectation</Label>
                  <Input placeholder="e.g. 15%+ net IRR, 2.5x+ MOIC" className="rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Special Requirements & Notes</Label>
                <Textarea
                  placeholder="ESG requirements, co-investment rights, reporting preferences, GP track record requirements..."
                  className="rounded-xl min-h-[100px]"
                />
              </div>

              <div className="flex gap-3 justify-end">
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl px-8">
                  <Send className="w-4 h-4 mr-2" />
                  Submit LP Fund Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LPFundEntry;
