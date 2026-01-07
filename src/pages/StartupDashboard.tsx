import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Rocket, TrendingUp, Users, LogOut, 
  ArrowRight, Bell, Settings, ChevronRight,
  Building2, Calendar, Target, FileText, User
} from "lucide-react";
import { Link } from "react-router-dom";

const StartupDashboard = () => {
  const dashboardTiles = [
    {
      icon: TrendingUp,
      title: "Fundingrunden",
      description: "Bewerben Sie sich für aktuelle Finanzierungsrunden",
      stats: "2 offene Runden",
      color: "from-emerald-500 to-teal-500",
      bgLight: "from-emerald-50 to-teal-50",
      items: ["Seed-Runde Q1", "Series A Vorbereitung", "Investor Matching"],
      link: "/funding-rounds"
    },
    {
      icon: Users,
      title: "Pilotprojekte",
      description: "Nehmen Sie an spannenden Pilotprojekten teil",
      stats: "1 aktives Projekt",
      color: "from-violet-500 to-purple-500",
      bgLight: "from-violet-50 to-purple-50",
      items: ["Smart Grid Integration", "Neue Ausschreibungen", "Projektberichte"],
      link: "/pilot-projects"
    },
    {
      icon: LogOut,
      title: "Exit & Vorbereitung",
      description: "Planen Sie Ihren erfolgreichen Exit",
      stats: "Roadmap erstellt",
      color: "from-orange-500 to-amber-500",
      bgLight: "from-orange-50 to-amber-50",
      items: ["Exit-Strategie", "Bewertungstools", "M&A Kontakte"],
      link: "/exit-preparation"
    }
  ];

  const quickActions = [
    { icon: FileText, label: "Pitch Deck hochladen" },
    { icon: Calendar, label: "Meeting planen" },
    { icon: Target, label: "Meilenstein setzen" },
    { icon: Building2, label: "Partner finden" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">EIN Energy</h1>
                <p className="text-xs text-orange-600 font-medium">Startups & Scaleups</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-orange-600 hover:bg-orange-50">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-orange-600 hover:bg-orange-50">
                <Settings className="w-5 h-5" />
              </Button>
              <Link to="/personal-data" className="flex items-center gap-3 pl-4 border-l border-gray-200 hover:bg-orange-50 rounded-lg p-2 -m-2 transition-colors">
                <Avatar className="w-9 h-9 border-2 border-orange-200">
                  <AvatarFallback className="bg-gradient-to-br from-orange-400 to-amber-500 text-white text-sm font-semibold">
                    TS
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">TechStartup GmbH</p>
                  <p className="text-xs text-gray-500">Max Mustermann</p>
                </div>
                <User className="w-4 h-4 text-gray-400 hidden sm:block" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Willkommen zurück, Max! 👋
          </h2>
          <p className="text-gray-600">
            Hier ist Ihr aktueller Überblick im EIN Energy Ökosystem.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center group-hover:from-orange-200 group-hover:to-amber-200 transition-colors">
                <action.icon className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-xs font-medium text-gray-700">{action.label}</span>
            </Button>
          ))}
        </div>

        {/* Dashboard Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dashboardTiles.map((tile, index) => (
            <Card 
              key={index}
              className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300 group cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tile.color} flex items-center justify-center shadow-lg`}>
                    <tile.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${tile.bgLight} text-gray-700`}>
                    {tile.stats}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mt-4 group-hover:text-orange-600 transition-colors">
                  {tile.title}
                </CardTitle>
                <CardDescription className="text-gray-500">
                  {tile.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {tile.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-orange-50 transition-colors group/item"
                    >
                      <span className="text-sm text-gray-700">{item}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-orange-500 group-hover/item:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
                <Button 
                  asChild={!!tile.link}
                  className={`w-full bg-gradient-to-r ${tile.color} hover:opacity-90 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 group/btn`}
                >
                  {tile.link ? (
                    <Link to={tile.link}>
                      Bereich öffnen
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <>
                      Bereich öffnen
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Login Link */}
        <div className="mt-8 text-center">
          <Link 
            to="/startup-login" 
            className="text-sm text-orange-600 hover:text-orange-700 font-medium hover:underline transition-colors"
          >
            ← Zurück zum Login
          </Link>
        </div>
      </main>
    </div>
  );
};

export default StartupDashboard;
