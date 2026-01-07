import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, Users, ArrowLeft, ArrowRight,
  Calendar, Zap, FileText, CheckCircle2,
  Clock, Building2, MessageSquare, Star,
  ClipboardList, Settings
} from "lucide-react";
import { Link } from "react-router-dom";

const PilotProjects = () => {
  const activeProjects = [
    {
      id: 1,
      name: "Smart Grid Integration",
      partner: "EnergieCorp AG",
      status: "In Umsetzung",
      progress: 45,
      startDate: "15. Nov 2025",
      endDate: "30. Apr 2026",
      description: "Integration unserer Lösung in das bestehende Smart Grid Netzwerk.",
      nextMilestone: "Prototyp-Test Phase 2"
    }
  ];

  const openProjects = [
    {
      id: 2,
      name: "Dezentrale Energiespeicher",
      partner: "GreenPower GmbH",
      deadline: "28. Feb 2026",
      duration: "6 Monate",
      budget: "50.000 €",
      description: "Pilotierung von dezentralen Speicherlösungen für Wohnquartiere."
    },
    {
      id: 3,
      name: "KI-gestützte Netzoptimierung",
      partner: "TechGrid Solutions",
      deadline: "15. März 2026",
      duration: "12 Monate",
      budget: "120.000 €",
      description: "Entwicklung und Test von KI-Algorithmen zur Netzstabilisierung."
    }
  ];

  const projectMilestones = [
    { date: "15. Nov", title: "Projektstart", completed: true },
    { date: "15. Dez", title: "Konzeptfreigabe", completed: true },
    { date: "15. Jan", title: "Prototyp v1", completed: true },
    { date: "15. Feb", title: "Prototyp-Test Phase 2", completed: false, current: true },
    { date: "30. Apr", title: "Projektabschluss", completed: false }
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
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Pilotprojekte</h1>
                  <p className="text-xs text-muted-foreground">Partnerschaften & Projekte</p>
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
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1</p>
                <p className="text-xs text-muted-foreground">Aktives Projekt</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-xs text-muted-foreground">Ausschreibungen</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Partner</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4.8</p>
                <p className="text-xs text-muted-foreground">Bewertung</p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Project */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Aktives Projekt
            </CardTitle>
            <CardDescription>Ihr laufendes Pilotprojekt im Überblick</CardDescription>
          </CardHeader>
          <CardContent>
            {activeProjects.map((project) => (
              <div key={project.id} className="space-y-6">
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground text-lg">{project.name}</h3>
                        <Badge className="bg-primary/20 text-primary">{project.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          Partner: {project.partner}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.startDate} - {project.endDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat
                      </Button>
                      <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                        <Settings className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Projektfortschritt</span>
                      <span className="font-medium text-primary">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-3" />
                  </div>

                  <div className="p-3 rounded-xl bg-card/60 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Nächster Meilenstein</p>
                    <p className="font-medium text-foreground">{project.nextMilestone}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h4 className="font-medium text-foreground mb-4">Projekt-Timeline</h4>
                  <div className="flex items-center justify-between relative">
                    <div className="absolute top-4 left-0 right-0 h-1 bg-muted rounded-full" />
                    <div 
                      className="absolute top-4 left-0 h-1 bg-primary rounded-full transition-all"
                      style={{ width: `${(projectMilestones.filter(m => m.completed).length / projectMilestones.length) * 100}%` }}
                    />
                    {projectMilestones.map((milestone, index) => (
                      <div key={index} className="relative z-10 flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          milestone.completed 
                            ? 'bg-primary text-primary-foreground' 
                            : milestone.current 
                              ? 'bg-card border-2 border-primary text-primary' 
                              : 'bg-muted text-muted-foreground'
                        }`}>
                          {milestone.completed ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                        </div>
                        <p className={`text-xs mt-2 text-center max-w-16 ${milestone.current ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                          {milestone.title}
                        </p>
                        <p className="text-xs text-muted-foreground">{milestone.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Open Projects */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-accent" />
              Neue Ausschreibungen
            </CardTitle>
            <CardDescription>Bewerben Sie sich für neue Pilotprojekte</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {openProjects.map((project) => (
              <div 
                key={project.id}
                className="p-5 rounded-2xl bg-secondary border border-border hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <Badge variant="outline" className="border-accent/30 text-accent">
                        Offen
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {project.partner}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {project.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Deadline: {project.deadline}
                      </span>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl">
                    Bewerben
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Reports */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Projektberichte
            </CardTitle>
            <CardDescription>Dokumentation und Berichte Ihrer Projekte</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:bg-primary/5 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Monatsbericht Dezember 2025</p>
                    <p className="text-sm text-muted-foreground">Smart Grid Integration</p>
                  </div>
                </div>
                <Badge className="bg-primary/20 text-primary">PDF</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:bg-primary/5 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Meilenstein-Report: Konzeptfreigabe</p>
                    <p className="text-sm text-muted-foreground">Smart Grid Integration</p>
                  </div>
                </div>
                <Badge className="bg-primary/20 text-primary">PDF</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
              Alle Berichte anzeigen
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PilotProjects;
