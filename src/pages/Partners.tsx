import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, Users, TrendingUp, ChevronRight,
  Scale, Cpu, Leaf, LineChart, MapPin, Mail, Phone, Briefcase, Award, Send
} from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name darf maximal 100 Zeichen haben"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail darf maximal 255 Zeichen haben"),
  company: z.string().trim().max(100, "Unternehmen darf maximal 100 Zeichen haben").optional(),
  phone: z.string().trim().max(30, "Telefonnummer darf maximal 30 Zeichen haben").optional(),
  subject: z.string().trim().min(1, "Betreff ist erforderlich").max(200, "Betreff darf maximal 200 Zeichen haben"),
  message: z.string().trim().min(1, "Nachricht ist erforderlich").max(2000, "Nachricht darf maximal 2000 Zeichen haben")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Partners = () => {
  const { toast } = useToast();
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [selectedPartnerForContact, setSelectedPartnerForContact] = useState<{ name: string; email: string } | null>(null);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenContactDialog = (partnerName: string, partnerEmail: string) => {
    setSelectedPartnerForContact({ name: partnerName, email: partnerEmail });
    setContactForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: `Anfrage über EIN Energy Portal`,
      message: ""
    });
    setFormErrors({});
    setShowContactDialog(true);
  };

  const handleContactSubmit = () => {
    const result = contactSchema.safeParse(contactForm);
    
    if (!result.success) {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setShowContactDialog(false);
      toast({
        title: "Nachricht gesendet",
        description: `Ihre Anfrage wurde erfolgreich an ${selectedPartnerForContact?.name} gesendet.`,
      });
    }, 1000);
  };

  const partnerCategories = [
    {
      id: "legal",
      icon: Scale,
      title: "Legal & Compliance",
      fullTitle: "Legal, Regulatory & Compliance Partners",
      description: "Rechtliche Beratung und regulatorische Unterstützung",
      partners: [
        { 
          id: "morrison-foerster",
          name: "Morrison & Foerster LLP", 
          specialty: "M&A, Venture Capital",
          location: "Frankfurt, München",
          contact: "Dr. Michael Weber",
          email: "mweber@mofo.com",
          phone: "+49 69 7033 0",
          services: ["Transaktionsberatung", "Due Diligence", "Vertragsgestaltung"],
          experience: "25+ Jahre im Energiesektor"
        },
        { 
          id: "hengeler-mueller",
          name: "Hengeler Mueller", 
          specialty: "Gesellschaftsrecht, Compliance",
          location: "Berlin, Düsseldorf",
          contact: "Dr. Anna Schmidt",
          email: "a.schmidt@hengeler.com",
          phone: "+49 30 2039 6000",
          services: ["Gesellschaftsrecht", "Regulatorische Compliance", "ESG-Beratung"],
          experience: "30+ Jahre Erfahrung"
        },
        { 
          id: "noerr",
          name: "Noerr LLP", 
          specialty: "Regulierung, Energierecht",
          location: "München, Hamburg",
          contact: "Dr. Thomas Müller",
          email: "thomas.mueller@noerr.com",
          phone: "+49 89 2862 8000",
          services: ["Energierecht", "Genehmigungsverfahren", "Regulatory Affairs"],
          experience: "Spezialist für erneuerbare Energien"
        }
      ],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      id: "engineering",
      icon: Cpu,
      title: "Engineering & Due Diligence",
      fullTitle: "Engineering, Technical & Due Diligence Partners",
      description: "Technische Bewertung und Due Diligence",
      partners: [
        { 
          id: "tuv-rheinland",
          name: "TÜV Rheinland", 
          specialty: "Technische Prüfung, Zertifizierung",
          location: "Köln, deutschlandweit",
          contact: "Ing. Klaus Bauer",
          email: "klaus.bauer@tuv.com",
          phone: "+49 221 806 0",
          services: ["Technische Inspektion", "Zertifizierung", "Sicherheitsprüfung"],
          experience: "150+ Jahre Expertise"
        },
        { 
          id: "dnv",
          name: "DNV", 
          specialty: "Energy Due Diligence",
          location: "Hamburg, Oslo",
          contact: "Dr. Erik Johansen",
          email: "erik.johansen@dnv.com",
          phone: "+49 40 3616 1000",
          services: ["Asset Bewertung", "Risikomanagement", "Performance Analyse"],
          experience: "Globaler Marktführer"
        },
        { 
          id: "fraunhofer-ise",
          name: "Fraunhofer ISE", 
          specialty: "Technologiebewertung",
          location: "Freiburg",
          contact: "Prof. Dr. Lisa Hartmann",
          email: "lisa.hartmann@ise.fraunhofer.de",
          phone: "+49 761 4588 0",
          services: ["Technologie Assessment", "F&E Beratung", "Innovationsanalyse"],
          experience: "Führendes Forschungsinstitut"
        }
      ],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      id: "esg",
      icon: Leaf,
      title: "ESG & Sustainability",
      fullTitle: "ESG, Certification & Sustainability Partners",
      description: "Nachhaltigkeitsbewertung und Zertifizierungen",
      partners: [
        { 
          id: "sustainalytics",
          name: "Sustainalytics", 
          specialty: "ESG Ratings & Research",
          location: "Amsterdam, München",
          contact: "Sarah van der Berg",
          email: "sarah.vanderberg@sustainalytics.com",
          phone: "+31 20 205 0000",
          services: ["ESG Risk Ratings", "Carbon Analytics", "Investor Research"],
          experience: "30+ Jahre ESG-Expertise"
        },
        { 
          id: "ecovadis",
          name: "EcoVadis", 
          specialty: "Sustainability Ratings",
          location: "Paris, Berlin",
          contact: "Marc Dubois",
          email: "m.dubois@ecovadis.com",
          phone: "+33 1 82 28 88 88",
          services: ["Sustainability Scorecards", "Supply Chain Assessment", "CSR Ratings"],
          experience: "100.000+ bewertete Unternehmen"
        },
        { 
          id: "climate-partner",
          name: "Climate Partner", 
          specialty: "Carbon Footprint, Klimastrategie",
          location: "München",
          contact: "Dr. Julia Berger",
          email: "j.berger@climatepartner.com",
          phone: "+49 89 1222 875 0",
          services: ["CO2-Bilanzierung", "Klimastrategie", "Kompensationsprojekte"],
          experience: "6.000+ Unternehmenskunden"
        }
      ],
      color: "bg-green-500/10 text-green-600"
    },
    {
      id: "transaction",
      icon: LineChart,
      title: "Transaction & Strategy",
      fullTitle: "Transaction, Strategy & Market Advisory Partners",
      description: "Strategische Beratung und Marktanalysen",
      partners: [
        { 
          id: "roland-berger",
          name: "Roland Berger", 
          specialty: "Strategie, Energy & Utilities",
          location: "München, Berlin",
          contact: "Dr. Markus Fischer",
          email: "markus.fischer@rolandberger.com",
          phone: "+49 89 9230 0",
          services: ["Strategieentwicklung", "M&A Advisory", "Restrukturierung"],
          experience: "Europas führende Strategieberatung"
        },
        { 
          id: "mckinsey",
          name: "McKinsey & Company", 
          specialty: "Transformation, Sustainability",
          location: "Frankfurt, Düsseldorf",
          contact: "Dr. Claudia Schulz",
          email: "claudia_schulz@mckinsey.com",
          phone: "+49 69 7162 0",
          services: ["Nachhaltige Transformation", "Operational Excellence", "Digital Strategy"],
          experience: "Globale #1 Managementberatung"
        },
        { 
          id: "aurora-energy",
          name: "Aurora Energy Research", 
          specialty: "Marktanalysen, Prognosen",
          location: "Oxford, Berlin",
          contact: "Dr. Felix Braun",
          email: "felix.braun@auroraer.com",
          phone: "+44 1865 339 350",
          services: ["Marktprognosen", "Asset Valuation", "Policy Analysis"],
          experience: "Spezialist für Energiemärkte"
        }
      ],
      color: "bg-purple-500/10 text-purple-600"
    }
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/private-capital-dashboard" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zum Dashboard</span>
        </Link>

        {/* Page Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Partners
              </h2>
              <p className="text-muted-foreground">
                Strategische und operative Partner für Ihr Investment
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="legal" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent p-0 mb-6">
            {partnerCategories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted rounded-xl border border-border data-[state=active]:border-primary transition-all"
              >
                <category.icon className="w-5 h-5" />
                <span className="text-xs font-medium text-center leading-tight">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {partnerCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.fullTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.partners.map((partner, partnerIndex) => (
                      <div 
                        key={partnerIndex}
                        className="p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors group cursor-pointer border border-transparent hover:border-primary/20"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-foreground text-lg">{partner.name}</h4>
                            <p className="text-sm text-primary font-medium">{partner.specialty}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary/70" />
                            <span>{partner.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4 text-primary/70" />
                            <span>{partner.contact}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4 text-primary/70" />
                            <span>{partner.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-4 h-4 text-primary/70" />
                            <span>{partner.phone}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-primary/70" />
                          <span className="text-sm text-muted-foreground">{partner.experience}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {partner.services.map((service, serviceIndex) => (
                            <span 
                              key={serviceIndex}
                              className="px-3 py-1 bg-background text-xs font-medium text-foreground rounded-full border border-border"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-3 border-t border-border">
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenContactDialog(partner.name, partner.email);
                            }}
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Kontakt aufnehmen
                          </Button>
                          <Link to={`/partners/${partner.id}`}>
                            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                              <Users className="w-4 h-4 mr-2" />
                              Profil ansehen
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="text-primary border-primary/30 hover:bg-primary/10">
                      Alle Partner anzeigen
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Contact Dialog */}
        <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Kontakt aufnehmen</DialogTitle>
              <DialogDescription>
                Senden Sie eine Nachricht an {selectedPartnerForContact?.name}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input
                    id="contact-name"
                    value={contactForm.name}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                    }}
                    placeholder="Ihr Name"
                    className={formErrors.name ? "border-destructive" : ""}
                  />
                  {formErrors.name && <p className="text-xs text-destructive">{formErrors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">E-Mail *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                    }}
                    placeholder="ihre@email.de"
                    className={formErrors.email ? "border-destructive" : ""}
                  />
                  {formErrors.email && <p className="text-xs text-destructive">{formErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-company">Unternehmen</Label>
                  <Input
                    id="contact-company"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Telefon</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">Betreff *</Label>
                <Input
                  id="contact-subject"
                  value={contactForm.subject}
                  onChange={(e) => {
                    setContactForm({ ...contactForm, subject: e.target.value });
                    if (formErrors.subject) setFormErrors({ ...formErrors, subject: undefined });
                  }}
                  placeholder="Betreff Ihrer Anfrage"
                  className={formErrors.subject ? "border-destructive" : ""}
                />
                {formErrors.subject && <p className="text-xs text-destructive">{formErrors.subject}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Nachricht *</Label>
                <Textarea
                  id="contact-message"
                  value={contactForm.message}
                  onChange={(e) => {
                    setContactForm({ ...contactForm, message: e.target.value });
                    if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                  }}
                  placeholder="Ihre Nachricht..."
                  rows={4}
                  className={formErrors.message ? "border-destructive" : ""}
                />
                {formErrors.message && <p className="text-xs text-destructive">{formErrors.message}</p>}
                <p className="text-xs text-muted-foreground text-right">
                  {contactForm.message.length} / 2000 Zeichen
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowContactDialog(false)}>
                Abbrechen
              </Button>
              <Button 
                onClick={handleContactSubmit}
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Nachricht senden
                  </>
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Partners;
