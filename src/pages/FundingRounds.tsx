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
    { step: 1, title: "Profil vervollständigen", completed: true },
    { step: 2, title: "Pitch Deck hochladen", completed: true },
    { step: 3, title: "Finanzdaten einreichen", completed: false },
    { step: 4, title: "Team vorstellen", completed: false },
    { step: 5, title: "Due Diligence", completed: false }
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
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Fundingrunden</h1>
                  <p className="text-xs text-gray-500">Finanzierung & Investoren</p>
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
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-lg shadow-emerald-100/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-xs text-gray-500">Offene Runden</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg shadow-blue-100/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-xs text-gray-500">Bewerbung aktiv</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-violet-100 shadow-lg shadow-violet-100/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">20</p>
                <p className="text-xs text-gray-500">Investoren</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100 shadow-lg shadow-orange-100/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                <Euro className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">12M</p>
                <p className="text-xs text-gray-500">Verfügbar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Funding Rounds */}
        <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              Aktuelle Fundingrunden
            </CardTitle>
            <CardDescription>Bewerben Sie sich für passende Finanzierungsrunden</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {openRounds.map((round) => (
              <div 
                key={round.id}
                className={`p-5 rounded-2xl border ${round.applied ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200' : 'bg-gray-50 border-gray-100'} transition-all hover:shadow-lg`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg">{round.name}</h3>
                      <Badge className={round.applied ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}>
                        {round.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{round.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
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
                          <span className="text-gray-600">Bewerbungsfortschritt</span>
                          <span className="font-medium text-emerald-600">{round.progress}%</span>
                        </div>
                        <Progress value={round.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                  <div className="flex md:flex-col gap-2">
                    {round.applied ? (
                      <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl">
                        Bewerbung fortsetzen
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl">
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
        <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              Bewerbungs-Checkliste
            </CardTitle>
            <CardDescription>Ihr Fortschritt für die Series A Bewerbung</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {applicationSteps.map((step) => (
                <div 
                  key={step.step}
                  className={`flex items-center gap-4 p-3 rounded-xl ${step.completed ? 'bg-emerald-50 border border-emerald-100' : 'bg-gray-50 border border-gray-100'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.completed ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {step.completed ? <CheckCircle2 className="w-5 h-5" /> : step.step}
                  </div>
                  <span className={`font-medium ${step.completed ? 'text-emerald-700' : 'text-gray-600'}`}>
                    {step.title}
                  </span>
                  {!step.completed && step.step === 3 && (
                    <Badge variant="outline" className="ml-auto border-orange-200 text-orange-600">
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
        <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-violet-500" />
              Kommende Runden
            </CardTitle>
            <CardDescription>Bereiten Sie sich auf zukünftige Möglichkeiten vor</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingRounds.map((round, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{round.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Start: {round.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      {round.volume}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3 border-violet-200 text-violet-600 hover:bg-violet-50 rounded-xl">
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
