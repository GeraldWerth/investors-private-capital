import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, TrendingUp, ArrowLeft, ArrowRight,
  Calendar, Euro, Users, FileText, CheckCircle2,
  Clock, Target, Building2, AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const FundingRounds = () => {
  const monthlyRounds = [
    {
      id: 1,
      month: "Februar 2026",
      status: "Bewerbung offen",
      deadline: "31. Januar 2026",
      slots: 5,
      registered: 12,
      isNext: true
    },
    {
      id: 2,
      month: "März 2026",
      status: "Demnächst",
      deadline: "28. Februar 2026",
      slots: 5,
      registered: 3,
      isNext: false
    },
    {
      id: 3,
      month: "April 2026",
      status: "Demnächst",
      deadline: "31. März 2026",
      slots: 5,
      registered: 0,
      isNext: false
    }
  ];


  const applicationSteps = [
    { step: 1, title: "Persönliche Daten", description: "Gründerprofil, Kontaktdaten, Erfahrung", completed: true },
    { step: 2, title: "Pitchdeck hochladen", description: "Präsentation Ihres Startups", completed: true },
    { step: 3, title: "Company & Legal", description: "Gesellschaftsverträge, Satzung, Patente", completed: true },
    { step: 4, title: "Financials & Funding", description: "Jahresabschlüsse, Cap Table, Forecasts", completed: false },
    { step: 5, title: "Product & Technology", description: "Produktdokumentation, Tech Stack, IP", completed: false },
    { step: 6, title: "Market & Business Model", description: "Marktanalysen, Geschäftsmodell, Pricing", completed: false },
    { step: 7, title: "Team & Organization", description: "Lebensläufe, Organigramme, Vesting", completed: false },
    { step: 8, title: "Traction & Partnerships", description: "KPIs, Kundenverträge, Partnerschaften", completed: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/startup-dashboard" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Zurück</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Fundingrunden</h1>
                  <p className="text-xs text-muted-foreground">Finanzierung & Investoren</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-accent-foreground" />
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
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-xs text-muted-foreground">Offene Runden</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1</p>
                <p className="text-xs text-muted-foreground">Bewerbung aktiv</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">20</p>
                <p className="text-xs text-muted-foreground">Investoren</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Euro className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12M</p>
                <p className="text-xs text-muted-foreground">Verfügbar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Funding Rounds */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Kommende Fundingrunden
            </CardTitle>
            <CardDescription>Wir führen monatliche Fundingrunden durch. Bewerben Sie sich für die passende Finanzierungsrunde.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {monthlyRounds.map((round) => (
                <div 
                  key={round.id}
                  className={`p-5 rounded-2xl border transition-all hover:shadow-lg ${round.isNext ? 'bg-primary/5 border-primary/30 ring-2 ring-primary/20' : 'bg-secondary border-border'}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground text-lg">{round.month}</h3>
                    </div>
                    {round.isNext && (
                      <Badge className="bg-primary/20 text-primary">Aktuell</Badge>
                    )}
                  </div>
                  
                  <Badge className={round.status === "Bewerbung offen" ? 'bg-green-500/20 text-green-600 mb-2' : 'bg-muted text-muted-foreground mb-2'}>
                    {round.status}
                  </Badge>
                  
                  <p className="text-sm font-medium text-primary mb-3">From Seed to all Growth Stages</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Bewerbungsfrist: {round.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>{round.slots} Plätze verfügbar</span>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full rounded-xl ${round.isNext ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-accent/20 hover:bg-accent/30 text-accent-foreground'}`}
                    variant={round.isNext ? "default" : "outline"}
                  >
                    {round.isNext ? "Jetzt bewerben" : "Interesse bekunden"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Application Checklist */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Bewerbungs-Checkliste
            </CardTitle>
            <CardDescription>Ihr Fortschritt für die Series A Bewerbung</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {applicationSteps.map((step) => (
                <div 
                  key={step.step}
                  className={`flex items-center gap-4 p-4 rounded-xl ${step.completed ? 'bg-primary/10 border border-primary/20' : 'bg-secondary border border-border'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${step.completed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {step.completed ? <CheckCircle2 className="w-5 h-5" /> : step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`font-medium block ${step.completed ? 'text-primary' : 'text-foreground'}`}>
                      {step.title}
                    </span>
                    <span className="text-sm text-muted-foreground">{step.description}</span>
                  </div>
                  {!step.completed && (
                    <Badge variant="outline" className="shrink-0 border-accent/30 text-accent">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Ausstehend
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default FundingRounds;
