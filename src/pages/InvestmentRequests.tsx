import { ArrowLeft, ArrowRight, Search, TrendingUp, Send, Briefcase, Globe, PieChart, Target, Layers, ChevronRight } from "lucide-react";
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Intro */}
        <div className="text-center space-y-2 pb-2">
          <h2 className="text-2xl font-bold text-foreground">Commission a Search Request</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let EIN Energy search on your behalf — whether you're looking for direct investment opportunities or seeking to enter as a Limited Partner in a fund.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Left Column: Direct Investment / Secondary */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-t-4 border-t-primary">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-foreground">Direct Investment Search</CardTitle>
                  <CardDescription>Primary investments & secondaries in startups or funds</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Your search request has been submitted. We will get back to you shortly.");
                }}
              >
                {/* Type */}
                <div className="space-y-2">
                  <Label className="font-semibold">Type of Request</Label>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-start space-x-3 p-3 rounded-xl border border-border bg-secondary hover:border-primary/50 transition-colors">
                      <Checkbox id="primary-inv" className="mt-0.5" />
                      <div>
                        <Label htmlFor="primary-inv" className="font-medium cursor-pointer">Primary Investment</Label>
                        <p className="text-xs text-muted-foreground">Direct investment in startups or funds</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-xl border border-border bg-secondary hover:border-primary/50 transition-colors">
                      <Checkbox id="secondary-inv" className="mt-0.5" />
                      <div>
                        <Label htmlFor="secondary-inv" className="font-medium cursor-pointer">Secondary</Label>
                        <p className="text-xs text-muted-foreground">Purchase of existing shares</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fields */}
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-muted-foreground" />Target Sectors</Label>
                    <Input placeholder="e.g. CleanTech, Renewables, Energy Storage" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />Investment Stage</Label>
                    <Input placeholder="e.g. Seed, Series A, Series B, Growth" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-muted-foreground" />Ticket Size</Label>
                    <Input placeholder="e.g. €500K – €2M" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-muted-foreground" />Geographic Focus</Label>
                    <Input placeholder="e.g. DACH, EU, Global" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Special Requirements</Label>
                    <Textarea
                      placeholder="Minimum traction, team background, technology requirements, desired returns..."
                      className="rounded-xl min-h-[90px]"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Search Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column: LP Fund Entry – Link Card */}
          <Link to="/lp-fund-entry" className="block">
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-t-4 border-t-accent h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Fund Entry for Limited Partners</CardTitle>
                    <CardDescription>Identify suitable fund entry opportunities as an LP</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Commission EIN Energy to search for LP fund entry opportunities tailored to your profile — from Venture Capital and Private Equity to Infrastructure and Fund of Funds.
                </p>
                <div className="space-y-2">
                  {["VC & PE Funds", "Infrastructure / Real Assets", "Fund of Funds", "LP Commitment Matching"].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                      <span className="text-sm text-foreground">{item}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl">
                  Open LP Fund Entry
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>

        </div>
      </main>
    </div>
  );
};

export default InvestmentRequests;
