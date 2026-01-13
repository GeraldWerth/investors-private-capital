import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, Users, TrendingUp, ChevronRight,
  Scale, Cpu, Leaf, LineChart, MapPin, Mail, Phone, Briefcase, Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const partnerCategories = [
    {
      id: "legal",
      icon: Scale,
      title: "Legal & Compliance",
      fullTitle: "Legal, Regulatory & Compliance Partners",
      description: "Rechtliche Beratung und regulatorische Unterstützung",
      partners: [
        { 
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

                        <div className="flex flex-wrap gap-2">
                          {partner.services.map((service, serviceIndex) => (
                            <span 
                              key={serviceIndex}
                              className="px-3 py-1 bg-background text-xs font-medium text-foreground rounded-full border border-border"
                            >
                              {service}
                            </span>
                          ))}
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

        {/* Contact Section */}
        <Card className="mt-8 bg-muted/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Partner werden
                </h4>
                <p className="text-sm text-muted-foreground">
                  Sind Sie ein Dienstleister im Bereich Energy & CleanTech und möchten Teil unseres 
                  Partner-Netzwerks werden? Kontaktieren Sie uns für eine Zusammenarbeit.
                </p>
                <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                  Partnerschaft anfragen
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Partners;
