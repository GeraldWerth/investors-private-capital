import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Target, TrendingUp, Users, Briefcase, 
  ArrowRight, Bell, Settings, ChevronRight,
  Building2, Calendar, Search, FileText, User, Repeat
} from "lucide-react";
import { Link } from "react-router-dom";

const StartupDashboard = () => {
  const dashboardTiles = [
    {
      icon: Target,
      title: "Your Investment Focus",
      description: "Define and manage your investment criteria",
      stats: "3 sectors",
      items: ["Industry Preferences", "Investment Size", "Stage Focus"],
      link: "/investment-focus"
    },
    {
      icon: Users,
      title: "Upcoming Pitching Sessions",
      description: "Melde Dich zu den kommenden Pitchings an",
      stats: "5 upcoming",
      items: ["Scheduled Pitches", "Past Sessions", "Invite Startups"],
      link: "/pitching-sessions"
    },
    {
      icon: Repeat,
      title: "Secondaries",
      description: "Explore secondary market opportunities",
      stats: "12 available",
      items: ["Available Shares", "Active Negotiations", "Portfolio Exits"],
      link: "/secondaries"
    },
    {
      icon: Search,
      title: "Investment Requests",
      description: "Search and request private capital investments",
      stats: "8 matches",
      items: ["Browse Opportunities", "Submit Request", "Saved Searches"],
      link: "/investment-requests"
    }
  ];

  const quickActions = [
    { icon: FileText, label: "Review Deal Flow" },
    { icon: Calendar, label: "Schedule Pitch" },
    { icon: Briefcase, label: "Portfolio Overview" },
    { icon: Building2, label: "Find Startups" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">EIN Energy</h1>
                <p className="text-xs text-primary font-medium">Investor Portal</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-secondary">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-secondary">
                <Settings className="w-5 h-5" />
              </Button>
              <Link to="/personal-data" className="flex items-center gap-3 pl-4 border-l border-border hover:bg-secondary rounded-lg p-2 -m-2 transition-colors">
                <Avatar className="w-9 h-9 border-2 border-primary/30">
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                    MK
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-foreground">Capital Partners AG</p>
                  <p className="text-xs text-muted-foreground">Michael Klein</p>
                </div>
                <User className="w-4 h-4 text-muted-foreground hidden sm:block" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Welcome back, Michael! 👋
          </h2>
          <p className="text-muted-foreground">
            Discover investment opportunities in the EIN Energy ecosystem.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 border-border hover:bg-secondary hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <action.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">{action.label}</span>
            </Button>
          ))}
        </div>

        {/* Dashboard Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboardTiles.map((tile, index) => (
            <Link key={index} to={tile.link} className="block">
              <Card 
                className="border-0 shadow-xl bg-card/80 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
                      <tile.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground">
                      {tile.stats}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mt-4 group-hover:text-primary transition-colors">
                    {tile.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {tile.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {tile.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group/item"
                      >
                        <span className="text-sm text-foreground">{item}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg transition-all duration-300 group/btn"
                  >
                    Open Section
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Back to Login Link */}
        <div className="mt-8 text-center">
          <Link 
            to="/startup-login" 
            className="text-sm text-primary hover:text-accent font-medium hover:underline transition-colors"
          >
            ← Back to Login
          </Link>
        </div>
      </main>
    </div>
  );
};

export default StartupDashboard;