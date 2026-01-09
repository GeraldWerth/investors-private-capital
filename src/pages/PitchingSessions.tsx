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
  const upcomingSessions = [
    {
      id: 1,
      startup: "GreenFlow Energy",
      sector: "CleanTech",
      stage: "Series A",
      date: "Jan 15, 2026",
      time: "10:00 AM",
      duration: "45 min",
      status: "Confirmed"
    },
    {
      id: 2,
      startup: "BatteryTech Solutions",
      sector: "Energy Storage",
      stage: "Seed",
      date: "Jan 16, 2026",
      time: "2:00 PM",
      duration: "30 min",
      status: "Pending"
    },
    {
      id: 3,
      startup: "SmartGrid AI",
      sector: "Smart Grid",
      stage: "Series A",
      date: "Jan 18, 2026",
      time: "11:00 AM",
      duration: "45 min",
      status: "Confirmed"
    }
  ];

  const pastSessions = [
    {
      id: 1,
      startup: "SolarFlow GmbH",
      sector: "CleanTech",
      date: "Jan 5, 2026",
      rating: 4,
      outcome: "Investment Made",
      notes: "Strong team, clear market opportunity"
    },
    {
      id: 2,
      startup: "WindTech Pro",
      sector: "Renewables",
      date: "Dec 20, 2025",
      rating: 3,
      outcome: "Follow-up Scheduled",
      notes: "Interesting tech, needs more traction"
    },
    {
      id: 3,
      startup: "EnergyAI Platform",
      sector: "Smart Grid",
      date: "Dec 15, 2025",
      rating: 2,
      outcome: "Passed",
      notes: "Too early stage for our criteria"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
      case "Investment Made":
        return "bg-primary/20 text-primary";
      case "Pending":
      case "Follow-up Scheduled":
        return "bg-accent/20 text-accent";
      case "Passed":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
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
                  <p className="text-xs text-muted-foreground">Review Startup Pitches</p>
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
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-xs text-muted-foreground">Upcoming</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Video className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">48</p>
                <p className="text-xs text-muted-foreground">Total Sessions</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground">Investments</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">25%</p>
                <p className="text-xs text-muted-foreground">Conversion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Invite Startups */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-14 text-lg"
        >
          <Users className="w-5 h-5 mr-2" />
          Invite Startups to Pitch
        </Button>

        {/* Upcoming Sessions */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Anmeldung zu Pitchings
            </CardTitle>
            <CardDescription>Wir führen monatliche Fundingrunden durch. Bewerben Sie sich für die passende Finanzierungsrunde.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingSessions.map((session) => (
              <div 
                key={session.id}
                className="p-5 rounded-2xl bg-secondary border border-border hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground text-lg">{session.startup}</h3>
                      <Badge className={getStatusColor(session.status)}>
                        {session.status}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {session.sector}
                      </span>
                      <Badge variant="outline" className="border-muted-foreground/30">
                        {session.stage}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {session.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {session.time} ({session.duration})
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                      <Eye className="w-4 h-4 mr-2" />
                      View Deck
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                      <Play className="w-4 h-4 mr-2" />
                      Join
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Past Sessions */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Video className="w-5 h-5 text-accent" />
              Past Sessions
            </CardTitle>
            <CardDescription>Review and rate completed pitches</CardDescription>
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
                    <p className="font-medium text-foreground">{session.startup}</p>
                    <p className="text-sm text-muted-foreground">{session.sector} · {session.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${star <= session.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <Badge className={getStatusColor(session.outcome)}>
                    {session.outcome}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
              View All Sessions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PilotProjects;