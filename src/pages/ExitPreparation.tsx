import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, LogOut, ArrowLeft, ArrowRight,
  Calendar, Euro, TrendingUp, FileText,
  CheckCircle2, Target, Building2, Users,
  BarChart3, Shield, Lightbulb, Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const ExitPreparation = () => {
  const exitReadiness = {
    overall: 68,
    categories: [
      { name: "Finanzen", score: 85, icon: Euro },
      { name: "Rechtliches", score: 70, icon: Shield },
      { name: "Team", score: 60, icon: Users },
      { name: "Produkt", score: 75, icon: Lightbulb },
      { name: "Marktposition", score: 50, icon: TrendingUp }
    ]
  };

  const exitStrategies = [
    {
      type: "Trade Sale",
      description: "Verkauf an strategischen Käufer aus der Branche",
      probability: "Hoch",
      timeline: "12-18 Monate",
      recommended: true
    },
    {
      type: "Secondary Sale",
      description: "Verkauf an Private Equity oder anderen Investor",
      probability: "Mittel",
      timeline: "6-12 Monate",
      recommended: false
    },
    {
      type: "IPO",
      description: "Börsengang an reguliertem Markt",
      probability: "Niedrig",
      timeline: "24-36 Monate",
      recommended: false
    }
  ];

  const checklist = [
    { title: "Jahresabschlüsse geprüft (letzte 3 Jahre)", completed: true },
    { title: "Cap Table bereinigt", completed: true },
    { title: "IP-Rechte dokumentiert", completed: true },
    { title: "Mitarbeiterverträge aktualisiert", completed: false },
    { title: "Kundenliste und -verträge aufbereitet", completed: false },
    { title: "Data Room vorbereitet", completed: false },
    { title: "Management-Präsentation erstellt", completed: false }
  ];

  const potentialBuyers = [
    { name: "EnergieCorp AG", type: "Strategisch", interest: "Hoch", lastContact: "vor 2 Wochen" },
    { name: "CleanTech Ventures", type: "Finanziell", interest: "Mittel", lastContact: "vor 1 Monat" },
    { name: "GreenFuture Holdings", type: "Strategisch", interest: "Mittel", lastContact: "vor 3 Wochen" }
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
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                  <LogOut className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Exit & Vorbereitung</h1>
                  <p className="text-xs text-muted-foreground">Strategische Planung</p>
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
        {/* Exit Readiness Score */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-accent text-accent-foreground">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5" />
              Exit-Readiness Score
            </CardTitle>
            <CardDescription className="text-accent-foreground/80">Ihre aktuelle Vorbereitung auf einen Exit</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-secondary flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">{exitReadiness.overall}%</p>
                    <p className="text-xs text-muted-foreground">Gesamt</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                {exitReadiness.categories.map((category, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-medium text-foreground">{category.name}</span>
                        <span className="text-primary">{category.score}%</span>
                      </div>
                      <Progress value={category.score} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exit Strategies */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Exit-Strategien
            </CardTitle>
            <CardDescription>Analysierte Optionen für Ihren Exit</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {exitStrategies.map((strategy, index) => (
              <div 
                key={index}
                className={`p-5 rounded-2xl border ${strategy.recommended ? 'bg-primary/5 border-primary/20' : 'bg-secondary border-border'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground text-lg">{strategy.type}</h3>
                      {strategy.recommended && (
                        <Badge className="bg-primary/20 text-primary">Empfohlen</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{strategy.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        Wahrscheinlichkeit: {strategy.probability}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Timeline: {strategy.timeline}
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant={strategy.recommended ? "default" : "outline"}
                    className={strategy.recommended 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl" 
                      : "border-border text-foreground hover:bg-secondary rounded-xl"
                    }
                  >
                    Details ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Checklist */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Exit-Checkliste
              </CardTitle>
              <CardDescription>
                {checklist.filter(i => i.completed).length} von {checklist.length} erledigt
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {checklist.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl ${item.completed ? 'bg-primary/10 border border-primary/20' : 'bg-secondary border border-border'}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.completed ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      {item.completed && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <span className={`text-sm ${item.completed ? 'text-primary' : 'text-muted-foreground'}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Potential Buyers */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent" />
                Potenzielle Käufer
              </CardTitle>
              <CardDescription>M&A Kontakte und Interessenten</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {potentialBuyers.map((buyer, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:bg-primary/5 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-foreground">{buyer.name}</p>
                      <p className="text-xs text-muted-foreground">{buyer.type} · Kontakt {buyer.lastContact}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={
                        buyer.interest === "Hoch" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-muted text-muted-foreground"
                      }>
                        {buyer.interest}
                      </Badge>
                      <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                Alle Kontakte anzeigen
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Documents */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Exit-Dokumente
            </CardTitle>
            <CardDescription>Wichtige Unterlagen für den Exit-Prozess</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 hover:shadow-lg transition-all cursor-pointer">
                <FileText className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-medium text-foreground">Information Memorandum</h4>
                <p className="text-sm text-muted-foreground mt-1">Vorlage verfügbar</p>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 hover:shadow-lg transition-all cursor-pointer">
                <FileText className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-medium text-foreground">Bewertungstools</h4>
                <p className="text-sm text-muted-foreground mt-1">DCF & Multiples</p>
              </div>
              <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 hover:shadow-lg transition-all cursor-pointer">
                <FileText className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-medium text-foreground">Due Diligence Checklist</h4>
                <p className="text-sm text-muted-foreground mt-1">Interaktive Liste</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ExitPreparation;
