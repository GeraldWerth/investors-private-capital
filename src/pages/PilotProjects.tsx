import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Rocket, Users, ArrowLeft, ArrowRight,
  Plus, FileText, CheckCircle2,
  Clock, Building2, Briefcase, Send,
  Package, Eye, Edit, Trash2
} from "lucide-react";
import { Link } from "react-router-dom";

const PilotProjects = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    targetGroup: "",
    pricing: "",
    availability: "",
    references: ""
  });

  const existingServices = [
    {
      id: 1,
      title: "Smart Grid Optimierung",
      category: "Software",
      status: "Aktiv",
      views: 124,
      inquiries: 5,
      createdAt: "15. Nov 2025"
    },
    {
      id: 2,
      title: "Energiespeicher-Lösung",
      category: "Hardware",
      status: "Aktiv",
      views: 89,
      inquiries: 3,
      createdAt: "20. Dez 2025"
    },
    {
      id: 3,
      title: "KI-Lastprognose",
      category: "KI/ML",
      status: "In Prüfung",
      views: 12,
      inquiries: 0,
      createdAt: "05. Jan 2026"
    }
  ];

  const applicationHistory = [
    {
      id: 1,
      company: "EnergieCorp AG",
      project: "Netzintegration 2026",
      status: "Angenommen",
      date: "10. Jan 2026"
    },
    {
      id: 2,
      company: "GreenPower GmbH",
      project: "Speicheroptimierung",
      status: "In Prüfung",
      date: "03. Jan 2026"
    },
    {
      id: 3,
      company: "TechGrid Solutions",
      project: "KI-Pilotprojekt",
      status: "Abgelehnt",
      date: "20. Dez 2025"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowApplicationForm(false);
    setFormData({
      title: "",
      category: "",
      description: "",
      targetGroup: "",
      pricing: "",
      availability: "",
      references: ""
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aktiv":
      case "Angenommen":
        return "bg-primary/20 text-primary";
      case "In Prüfung":
        return "bg-accent/20 text-accent";
      case "Abgelehnt":
        return "bg-destructive/20 text-destructive";
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
                to="/startup-dashboard" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Zurück</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Pilotprojekte</h1>
                  <p className="text-xs text-muted-foreground">Ihre Lösungen für Partner</p>
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
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Aktive Angebote</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">225</p>
                <p className="text-xs text-muted-foreground">Aufrufe gesamt</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-xs text-muted-foreground">Anfragen</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1</p>
                <p className="text-xs text-muted-foreground">Angenommen</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Application Form */}
        {showApplicationForm ? (
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                Pilotprojekt starten
              </CardTitle>
              <CardDescription>Erstellen Sie eine detaillierte Bewerbung für Ihre Lösung</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Titel der Leistung *</Label>
                    <Input 
                      id="title" 
                      name="title" 
                      placeholder="z.B. Smart Grid Optimierung"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Kategorie *</Label>
                    <Input 
                      id="category" 
                      name="category" 
                      placeholder="z.B. Software, Hardware, Beratung"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detaillierte Beschreibung *</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    placeholder="Beschreiben Sie Ihre Lösung ausführlich: Was bieten Sie an? Welche Vorteile hat Ihre Lösung? Welche Technologien nutzen Sie?"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="rounded-xl min-h-32"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="targetGroup">Zielgruppe</Label>
                    <Input 
                      id="targetGroup" 
                      name="targetGroup" 
                      placeholder="z.B. Energieversorger, Netzbetreiber"
                      value={formData.targetGroup}
                      onChange={handleInputChange}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pricing">Preismodell</Label>
                    <Input 
                      id="pricing" 
                      name="pricing" 
                      placeholder="z.B. Lizenz, SaaS, Projektbasiert"
                      value={formData.pricing}
                      onChange={handleInputChange}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="availability">Verfügbarkeit</Label>
                    <Input 
                      id="availability" 
                      name="availability" 
                      placeholder="z.B. Sofort, Q2 2026"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="references">Referenzen</Label>
                    <Input 
                      id="references" 
                      name="references" 
                      placeholder="z.B. Bestehende Kunden, Pilotprojekte"
                      value={formData.references}
                      onChange={handleInputChange}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary border border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">Hinweis:</strong> Nach dem Einreichen wird Ihre Bewerbung von unserem Team geprüft. 
                    Sie erhalten innerhalb von 3-5 Werktagen eine Rückmeldung.
                  </p>
                </div>

                <div className="flex gap-3 justify-end">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowApplicationForm(false)}
                    className="rounded-xl"
                  >
                    Abbrechen
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                  >
                    Bewerbung einreichen
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Button 
            onClick={() => setShowApplicationForm(true)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-14 text-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Pilotprojekt starten
          </Button>
        )}

        {/* Existing Services */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Ihre Leistungen
            </CardTitle>
            <CardDescription>Übersicht Ihrer angebotenen Lösungen</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {existingServices.map((service) => (
              <div 
                key={service.id}
                className="p-5 rounded-2xl bg-secondary border border-border hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground">{service.title}</h3>
                      <Badge className={getStatusColor(service.status)}>
                        {service.status}
                      </Badge>
                      <Badge variant="outline" className="border-muted-foreground/30">
                        {service.category}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {service.views} Aufrufe
                      </span>
                      <span className="flex items-center gap-1">
                        <Send className="w-4 h-4" />
                        {service.inquiries} Anfragen
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Erstellt: {service.createdAt}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                      <Edit className="w-4 h-4 mr-2" />
                      Bearbeiten
                    </Button>
                    <Button variant="outline" size="sm" className="border-destructive/30 text-destructive hover:bg-destructive/10 rounded-xl">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Application Status */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              Bewerbungsstatus
            </CardTitle>
            <CardDescription>Status Ihrer Bewerbungen bei Partnern</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {applicationHistory.map((application) => (
              <div 
                key={application.id}
                className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{application.project}</p>
                    <p className="text-sm text-muted-foreground">{application.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground hidden sm:inline">{application.date}</span>
                  <Badge className={getStatusColor(application.status)}>
                    {application.status}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
              Alle Bewerbungen anzeigen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PilotProjects;
