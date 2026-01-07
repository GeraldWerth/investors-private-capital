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
  const openRounds = [
    {
      id: 1,
      name: "Seed-Runde Q1 2026",
      status: "Bewerbung offen",
      deadline: "31. März 2026",
      volume: "500.000 - 2.000.000 €",
      investors: 12,
      applied: false,
      description: "Frühphasenfinanzierung für innovative Energie-Startups mit Proof of Concept."
    },
    {
      id: 2,
      name: "Series A - CleanTech",
      status: "Vorauswahl läuft",
      deadline: "15. Februar 2026",
      volume: "2.000.000 - 10.000.000 €",
      investors: 8,
      applied: true,
      progress: 65,
      description: "Wachstumsfinanzierung für skalierbare CleanTech-Lösungen."
    }
  ];

  const upcomingRounds = [
    {
      name: "Impact Investment Runde",
      startDate: "April 2026",
      volume: "1.000.000 - 5.000.000 €"
    },
    {
      name: "Corporate Venture Fund",
      startDate: "Q2 2026",
      volume: "bis 3.000.000 €"
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
              Aktuelle Fundingrunden
            </CardTitle>
            <CardDescription>Bewerben Sie sich für passende Finanzierungsrunden</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {openRounds.map((round) => (
              <div 
                key={round.id}
                className={`p-5 rounded-2xl border ${round.applied ? 'bg-primary/5 border-primary/20' : 'bg-secondary border-border'} transition-all hover:shadow-lg`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground text-lg">{round.name}</h3>
                      <Badge className={round.applied ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}>
                        {round.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{round.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Deadline: {round.deadline}
                      </span>
                      <span className="flex items-center gap-1">
                        <Euro className="w-4 h-4" />
                        {round.volume}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {round.investors} Investoren
                      </span>
                    </div>
                    {round.applied && round.progress && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Bewerbungsfortschritt</span>
                          <span className="font-medium text-primary">{round.progress}%</span>
                        </div>
                        <Progress value={round.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                  <div className="flex md:flex-col gap-2">
                    {round.applied ? (
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                        Bewerbung fortsetzen
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl">
                        Jetzt bewerben
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
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

        {/* Upcoming Rounds */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Kommende Runden
            </CardTitle>
            <CardDescription>Bereiten Sie sich auf zukünftige Möglichkeiten vor</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingRounds.map((round, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-2xl bg-accent/10 border border-accent/20"
                >
                  <h3 className="font-semibold text-foreground mb-2">{round.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Start: {round.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      {round.volume}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3 border-accent/30 text-accent hover:bg-accent/10 rounded-xl">
                    Interesse bekunden
                  </Button>
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
