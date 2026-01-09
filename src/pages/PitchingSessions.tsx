import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, Users, ArrowLeft, ArrowRight,
  Calendar, Video, CheckCircle2,
  Clock, Building2, Play, Eye, Star
} from "lucide-react";
import { Link } from "react-router-dom";

const PilotProjects = () => {
  const [registrations, setRegistrations] = useState<{ [key: number]: boolean }>({});

  const upcomingSessions = [
    {
      id: 1,
      title: "Fundingrunde CleanTech",
      sector: "CleanTech",
      stages: ["Seed", "Series A"],
      date: "15. Januar 2026",
      time: "10:00 Uhr",
      duration: "2 Stunden",
      startups: 5
    },
    {
      id: 2,
      title: "Fundingrunde Energy Storage",
      sector: "Energy Storage",
      stages: ["Seed", "Series A", "Series B"],
      date: "22. Januar 2026",
      time: "14:00 Uhr",
      duration: "2 Stunden",
      startups: 4
    },
    {
      id: 3,
      title: "Fundingrunde Smart Grid",
      sector: "Smart Grid",
      stages: ["Series A"],
      date: "5. Februar 2026",
      time: "11:00 Uhr",
      duration: "2 Stunden",
      startups: 6
    }
  ];

  const toggleRegistration = (id: number) => {
    setRegistrations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const pastSessions = [
    {
      id: 1,
      title: "Fundingrunde Renewables",
      sector: "Renewables",
      date: "5. Januar 2026",
      startups: 4,
      attended: true
    },
    {
      id: 2,
      title: "Fundingrunde CleanTech",
      sector: "CleanTech",
      date: "20. Dezember 2025",
      startups: 5,
      attended: true
    },
    {
      id: 3,
      title: "Fundingrunde Smart Grid",
      sector: "Smart Grid",
      date: "15. Dezember 2025",
      startups: 3,
      attended: false
    }
  ];

  const getStatusColor = (registered: boolean) => {
    return registered 
      ? "bg-primary/20 text-primary" 
      : "bg-muted text-muted-foreground";
  };

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
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Pitching Sessions</h1>
                  <p className="text-xs text-muted-foreground">Anmeldung zu Fundingrunden</p>
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

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Kommende Sessions</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{Object.values(registrations).filter(Boolean).length}</p>
                <p className="text-xs text-muted-foreground">Ihre Anmeldungen</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Video className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground">Teilgenommen</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">15</p>
                <p className="text-xs text-muted-foreground">Startups gesehen</p>
              </div>
            </div>
          </div>
        </div>


        {/* Upcoming Sessions */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Anmeldung zu Pitchings
            </CardTitle>
            <CardDescription>Wir führen monatliche Fundingrunden durch. Bewerben Sie sich für die passende Finanzierungsrunde.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingSessions.map((session) => (
                <div 
                  key={session.id}
                  className="p-5 rounded-2xl bg-secondary border border-border hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground text-lg">{session.title}</h3>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4 flex-1">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {session.sector}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {session.stages.map((stage) => (
                        <Badge key={stage} variant="outline" className="border-muted-foreground/30">
                          {stage}
                        </Badge>
                      ))}
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {session.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {session.time} ({session.duration})
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {session.startups} Startups pitchen
                    </span>
                  </div>
                  <Button 
                    onClick={() => toggleRegistration(session.id)}
                    className={`w-full rounded-xl ${registrations[session.id] 
                      ? 'bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30' 
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    {registrations[session.id] ? 'Angemeldet' : 'Anmelden'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Past Sessions */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Video className="w-5 h-5 text-accent" />
              Vergangene Sessions
            </CardTitle>
            <CardDescription>Ihre bisherigen Teilnahmen an Fundingrunden</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {pastSessions.map((session) => (
              <div 
                key={session.id}
                className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{session.title}</p>
                    <p className="text-sm text-muted-foreground">{session.sector} · {session.date} · {session.startups} Startups</p>
                  </div>
                </div>
                <Badge className={getStatusColor(session.attended)}>
                  {session.attended ? 'Teilgenommen' : 'Nicht teilgenommen'}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
              Alle Sessions anzeigen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PilotProjects;