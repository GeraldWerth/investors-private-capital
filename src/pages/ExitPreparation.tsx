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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/startup-dashboard" 
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Zurück</span>
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <LogOut className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Exit & Vorbereitung</h1>
                  <p className="text-xs text-gray-500">Strategische Planung</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:inline text-sm font-semibold text-gray-900">EIN Energy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Exit Readiness Score */}
        <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5" />
              Exit-Readiness Score
            </CardTitle>
            <CardDescription className="text-orange-100">Ihre aktuelle Vorbereitung auf einen Exit</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-500">{exitReadiness.overall}%</p>
                    <p className="text-xs text-gray-500">Gesamt</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                {exitReadiness.categories.map((category, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">{category.name}</span>
                        <span className="text-orange-600">{category.score}%</span>
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
        <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-orange-500" />
              Exit-Strategien
            </CardTitle>
            <CardDescription>Analysierte Optionen für Ihren Exit</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {exitStrategies.map((strategy, index) => (
              <div 
                key={index}
                className={`p-5 rounded-2xl border ${strategy.recommended ? 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200' : 'bg-gray-50 border-gray-100'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg">{strategy.type}</h3>
                      {strategy.recommended && (
                        <Badge className="bg-orange-100 text-orange-700">Empfohlen</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{strategy.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
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
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl" 
                      : "border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl"
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
          <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
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
                    className={`flex items-center gap-3 p-3 rounded-xl ${item.completed ? 'bg-emerald-50 border border-emerald-100' : 'bg-gray-50 border border-gray-100'}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.completed ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}>
                      {item.completed && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <span className={`text-sm ${item.completed ? 'text-emerald-700' : 'text-gray-600'}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Potential Buyers */}
          <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-500" />
                Potenzielle Käufer
              </CardTitle>
              <CardDescription>M&A Kontakte und Interessenten</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {potentialBuyers.map((buyer, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{buyer.name}</p>
                      <p className="text-xs text-gray-500">{buyer.type} · Kontakt {buyer.lastContact}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={
                        buyer.interest === "Hoch" 
                          ? "bg-emerald-100 text-emerald-700" 
                          : "bg-gray-100 text-gray-600"
                      }>
                        {buyer.interest}
                      </Badge>
                      <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-50">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl">
                Alle Kontakte anzeigen
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Documents */}
        <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-violet-500" />
              Exit-Dokumente
            </CardTitle>
            <CardDescription>Wichtige Unterlagen für den Exit-Prozess</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 hover:shadow-lg transition-all cursor-pointer">
                <FileText className="w-8 h-8 text-violet-500 mb-3" />
                <h4 className="font-medium text-gray-900">Information Memorandum</h4>
                <p className="text-sm text-gray-500 mt-1">Vorlage verfügbar</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-lg transition-all cursor-pointer">
                <FileText className="w-8 h-8 text-blue-500 mb-3" />
                <h4 className="font-medium text-gray-900">Bewertungstools</h4>
                <p className="text-sm text-gray-500 mt-1">DCF & Multiples</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 hover:shadow-lg transition-all cursor-pointer">
                <FileText className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="font-medium text-gray-900">Due Diligence Checklist</h4>
                <p className="text-sm text-gray-500 mt-1">Interaktive Liste</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ExitPreparation;
