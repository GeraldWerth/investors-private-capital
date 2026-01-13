import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, TrendingUp, ChevronRight,
  Scale, Cpu, Leaf, LineChart, MapPin, Mail, Phone, 
  Users, Award, Globe, Building, CheckCircle, Calendar
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const PartnerProfile = () => {
  const { partnerId } = useParams();

  // Partner database with full details
  const allPartners: Record<string, {
    id: string;
    name: string;
    specialty: string;
    location: string;
    contact: string;
    email: string;
    phone: string;
    services: string[];
    experience: string;
    category: string;
    categoryIcon: typeof Scale;
    categoryColor: string;
    website: string;
    founded: string;
    employees: string;
    description: string;
    highlights: string[];
    references: { name: string; project: string }[];
  }> = {
    "morrison-foerster": {
      id: "morrison-foerster",
      name: "Morrison & Foerster LLP",
      specialty: "M&A, Venture Capital",
      location: "Frankfurt, München",
      contact: "Dr. Michael Weber",
      email: "mweber@mofo.com",
      phone: "+49 69 7033 0",
      services: ["Transaktionsberatung", "Due Diligence", "Vertragsgestaltung", "Gesellschaftsrecht", "IP-Recht"],
      experience: "25+ Jahre im Energiesektor",
      category: "Legal, Regulatory & Compliance",
      categoryIcon: Scale,
      categoryColor: "bg-blue-500/10 text-blue-600",
      website: "www.mofo.com",
      founded: "1883",
      employees: "1.000+ Anwälte",
      description: "Morrison & Foerster ist eine führende internationale Anwaltskanzlei mit besonderer Expertise im Bereich Energie und CleanTech. Unser Team berät Investoren und Unternehmen bei komplexen Transaktionen, von Venture Capital Investments bis hin zu großen M&A-Deals im Energiesektor.",
      highlights: [
        "Top-Ranking in Chambers & Partners für Energy",
        "Über 50 abgeschlossene CleanTech-Transaktionen in 2024",
        "Spezialisiertes Team für erneuerbare Energien",
        "Globales Netzwerk in 17 Ländern"
      ],
      references: [
        { name: "SolarFlow GmbH", project: "Series B Finanzierung (€25M)" },
        { name: "WindTech AG", project: "Verkauf an strategischen Investor" },
        { name: "GreenGrid Solutions", project: "Joint Venture Strukturierung" }
      ]
    },
    "hengeler-mueller": {
      id: "hengeler-mueller",
      name: "Hengeler Mueller",
      specialty: "Gesellschaftsrecht, Compliance",
      location: "Berlin, Düsseldorf",
      contact: "Dr. Anna Schmidt",
      email: "a.schmidt@hengeler.com",
      phone: "+49 30 2039 6000",
      services: ["Gesellschaftsrecht", "Regulatorische Compliance", "ESG-Beratung", "Kapitalmarktrecht", "Kartellrecht"],
      experience: "30+ Jahre Erfahrung",
      category: "Legal, Regulatory & Compliance",
      categoryIcon: Scale,
      categoryColor: "bg-blue-500/10 text-blue-600",
      website: "www.hengeler.com",
      founded: "1909",
      employees: "400+ Anwälte",
      description: "Hengeler Mueller zählt zu den führenden deutschen Wirtschaftskanzleien und berät nationale und internationale Mandanten in allen Bereichen des Wirtschaftsrechts. Im Energiesektor begleiten wir Investoren bei regulatorischen Fragen und Compliance-Themen.",
      highlights: [
        "Führende Kanzlei für Gesellschaftsrecht in Deutschland",
        "Spezialisiertes ESG-Compliance Team",
        "Langjährige Erfahrung mit Energieregulierung",
        "Enge Zusammenarbeit mit Aufsichtsbehörden"
      ],
      references: [
        { name: "EnergyGrid AG", project: "Regulatorische Begleitung Netzausbau" },
        { name: "CleanPower Invest", project: "Fondsstrukturierung" },
        { name: "HydrogenTech GmbH", project: "Compliance-Framework Aufbau" }
      ]
    },
    "noerr": {
      id: "noerr",
      name: "Noerr LLP",
      specialty: "Regulierung, Energierecht",
      location: "München, Hamburg",
      contact: "Dr. Thomas Müller",
      email: "thomas.mueller@noerr.com",
      phone: "+49 89 2862 8000",
      services: ["Energierecht", "Genehmigungsverfahren", "Regulatory Affairs", "Projektfinanzierung", "Public Affairs"],
      experience: "Spezialist für erneuerbare Energien",
      category: "Legal, Regulatory & Compliance",
      categoryIcon: Scale,
      categoryColor: "bg-blue-500/10 text-blue-600",
      website: "www.noerr.com",
      founded: "1950",
      employees: "500+ Anwälte",
      description: "Noerr ist eine der führenden europäischen Wirtschaftskanzleien mit einem hochspezialisierten Team für Energierecht und Regulierung. Wir begleiten Investoren und Projektentwickler durch komplexe Genehmigungsverfahren und regulatorische Herausforderungen.",
      highlights: [
        "Marktführer im deutschen Energierecht",
        "100+ Genehmigungsverfahren für Windparks begleitet",
        "Expertenteam für Wasserstoff-Regulierung",
        "Starke Public Affairs Praxis"
      ],
      references: [
        { name: "Offshore Wind Consortium", project: "Genehmigung 500MW Windpark" },
        { name: "H2 Future GmbH", project: "Regulatorische Strategie Wasserstoff" },
        { name: "SolarPark Invest", project: "PPA-Vertragsgestaltung" }
      ]
    },
    "tuv-rheinland": {
      id: "tuv-rheinland",
      name: "TÜV Rheinland",
      specialty: "Technische Prüfung, Zertifizierung",
      location: "Köln, deutschlandweit",
      contact: "Ing. Klaus Bauer",
      email: "klaus.bauer@tuv.com",
      phone: "+49 221 806 0",
      services: ["Technische Inspektion", "Zertifizierung", "Sicherheitsprüfung", "Qualitätsmanagement", "Schulungen"],
      experience: "150+ Jahre Expertise",
      category: "Engineering, Technical & Due Diligence",
      categoryIcon: Cpu,
      categoryColor: "bg-orange-500/10 text-orange-600",
      website: "www.tuv.com",
      founded: "1872",
      employees: "20.000+ Mitarbeiter",
      description: "TÜV Rheinland ist ein weltweit führender unabhängiger Prüfdienstleister mit umfassender Expertise im Energiesektor. Wir bieten technische Prüfungen, Zertifizierungen und Qualitätssicherung für Investoren und Projektentwickler.",
      highlights: [
        "Weltweit anerkannte Zertifizierungen",
        "Eigene Prüflabore für PV und Batteriesysteme",
        "Akkreditiert in über 60 Ländern",
        "Spezialisierte Teams für erneuerbare Energien"
      ],
      references: [
        { name: "SolarTech Industries", project: "Modulzertifizierung neuer Produktlinie" },
        { name: "BatteryStore GmbH", project: "Sicherheitsprüfung Speichersysteme" },
        { name: "WindPower Europe", project: "Technische Due Diligence Portfolio" }
      ]
    },
    "dnv": {
      id: "dnv",
      name: "DNV",
      specialty: "Energy Due Diligence",
      location: "Hamburg, Oslo",
      contact: "Dr. Erik Johansen",
      email: "erik.johansen@dnv.com",
      phone: "+49 40 3616 1000",
      services: ["Asset Bewertung", "Risikomanagement", "Performance Analyse", "Technische Beratung", "Digitale Lösungen"],
      experience: "Globaler Marktführer",
      category: "Engineering, Technical & Due Diligence",
      categoryIcon: Cpu,
      categoryColor: "bg-orange-500/10 text-orange-600",
      website: "www.dnv.com",
      founded: "1864",
      employees: "12.000+ Experten",
      description: "DNV ist ein weltweit führendes Unternehmen für Qualitätssicherung und Risikomanagement im Energiesektor. Unsere unabhängigen Bewertungen und technischen Analysen unterstützen Investoren bei fundierten Entscheidungen.",
      highlights: [
        "Weltmarktführer für Energy Due Diligence",
        "Eigene Energie-Prognosemodelle",
        "Präsenz in über 100 Ländern",
        "Spezialisiert auf Offshore Wind und Solar"
      ],
      references: [
        { name: "Nordic Energy Fund", project: "Due Diligence 2GW Wind Portfolio" },
        { name: "InfraCo Partners", project: "Asset Performance Review" },
        { name: "GreenInvest AG", project: "Technische Risikobewertung" }
      ]
    },
    "fraunhofer-ise": {
      id: "fraunhofer-ise",
      name: "Fraunhofer ISE",
      specialty: "Technologiebewertung",
      location: "Freiburg",
      contact: "Prof. Dr. Lisa Hartmann",
      email: "lisa.hartmann@ise.fraunhofer.de",
      phone: "+49 761 4588 0",
      services: ["Technologie Assessment", "F&E Beratung", "Innovationsanalyse", "Prototypenentwicklung", "Studien"],
      experience: "Führendes Forschungsinstitut",
      category: "Engineering, Technical & Due Diligence",
      categoryIcon: Cpu,
      categoryColor: "bg-orange-500/10 text-orange-600",
      website: "www.ise.fraunhofer.de",
      founded: "1981",
      employees: "1.400+ Wissenschaftler",
      description: "Das Fraunhofer-Institut für Solare Energiesysteme ISE ist das größte Solarforschungsinstitut Europas. Wir bieten unabhängige Technologiebewertungen und Innovationsanalysen für Investoren im CleanTech-Sektor.",
      highlights: [
        "Europas größtes Solarforschungsinstitut",
        "Pionier bei Perowskit-Solarzellen",
        "Unabhängige Technologiegutachten",
        "Enge Zusammenarbeit mit Industrie"
      ],
      references: [
        { name: "VentureGreen Fund", project: "Technologie-Assessment Startup Portfolio" },
        { name: "NextGen Solar", project: "Bewertung neuartiger Zelltechnologie" },
        { name: "H2 Innovations", project: "Elektrolyse-Technologiestudie" }
      ]
    },
    "sustainalytics": {
      id: "sustainalytics",
      name: "Sustainalytics",
      specialty: "ESG Ratings & Research",
      location: "Amsterdam, München",
      contact: "Sarah van der Berg",
      email: "sarah.vanderberg@sustainalytics.com",
      phone: "+31 20 205 0000",
      services: ["ESG Risk Ratings", "Carbon Analytics", "Investor Research", "Controversy Monitoring", "Impact Reporting"],
      experience: "30+ Jahre ESG-Expertise",
      category: "ESG, Certification & Sustainability",
      categoryIcon: Leaf,
      categoryColor: "bg-green-500/10 text-green-600",
      website: "www.sustainalytics.com",
      founded: "1992",
      employees: "1.700+ Analysten",
      description: "Sustainalytics, ein Morningstar-Unternehmen, ist ein führender Anbieter von ESG-Research und Ratings. Wir unterstützen Investoren dabei, ESG-Risiken zu verstehen und nachhaltige Investitionsentscheidungen zu treffen.",
      highlights: [
        "ESG-Ratings für 20.000+ Unternehmen",
        "Teil der Morningstar Gruppe",
        "Branchenführend bei Kontroversanalysen",
        "EU-Taxonomie Expertise"
      ],
      references: [
        { name: "Impact Capital", project: "ESG-Screening Investmentuniversum" },
        { name: "Pension Fund Europe", project: "Portfolio Carbon Footprint" },
        { name: "CleanTech Ventures", project: "Impact Measurement Framework" }
      ]
    },
    "ecovadis": {
      id: "ecovadis",
      name: "EcoVadis",
      specialty: "Sustainability Ratings",
      location: "Paris, Berlin",
      contact: "Marc Dubois",
      email: "m.dubois@ecovadis.com",
      phone: "+33 1 82 28 88 88",
      services: ["Sustainability Scorecards", "Supply Chain Assessment", "CSR Ratings", "Carbon Action Module", "IQ Plus"],
      experience: "100.000+ bewertete Unternehmen",
      category: "ESG, Certification & Sustainability",
      categoryIcon: Leaf,
      categoryColor: "bg-green-500/10 text-green-600",
      website: "www.ecovadis.com",
      founded: "2007",
      employees: "1.500+ Mitarbeiter",
      description: "EcoVadis ist der weltweit größte Anbieter von Nachhaltigkeitsbewertungen für Unternehmen. Unsere Plattform ermöglicht es Investoren, die ESG-Performance von Portfoliounternehmen und deren Lieferketten zu bewerten.",
      highlights: [
        "Größte Nachhaltigkeits-Bewertungsplattform",
        "Bewertung in 200+ Branchen",
        "Anerkannt von führenden Einkaufsorganisationen",
        "Methodologie nach ISO 26000"
      ],
      references: [
        { name: "Growth Equity Partners", project: "ESG Due Diligence Targets" },
        { name: "Manufacturing Fund", project: "Supply Chain Sustainability Check" },
        { name: "Infrastructure Investors", project: "Portfolio ESG Benchmarking" }
      ]
    },
    "climate-partner": {
      id: "climate-partner",
      name: "Climate Partner",
      specialty: "Carbon Footprint, Klimastrategie",
      location: "München",
      contact: "Dr. Julia Berger",
      email: "j.berger@climatepartner.com",
      phone: "+49 89 1222 875 0",
      services: ["CO2-Bilanzierung", "Klimastrategie", "Kompensationsprojekte", "Klimaneutralität", "Reporting"],
      experience: "6.000+ Unternehmenskunden",
      category: "ESG, Certification & Sustainability",
      categoryIcon: Leaf,
      categoryColor: "bg-green-500/10 text-green-600",
      website: "www.climatepartner.com",
      founded: "2006",
      employees: "500+ Klimaexperten",
      description: "ClimatePartner unterstützt Unternehmen auf dem Weg zur Klimaneutralität. Wir bieten Carbon Footprint Berechnungen, Klimastrategien und Zugang zu hochwertigen Kompensationsprojekten weltweit.",
      highlights: [
        "Marktführer für Klimaneutralität in DACH",
        "500+ zertifizierte Klimaschutzprojekte",
        "Transparente Kompensationslösungen",
        "Science Based Targets Beratung"
      ],
      references: [
        { name: "CleanTech Fund III", project: "Portfolio Carbon Footprint" },
        { name: "GreenBuilding AG", project: "Net Zero Strategie" },
        { name: "MobilityTech GmbH", project: "Klimaneutrale Wertschöpfungskette" }
      ]
    },
    "roland-berger": {
      id: "roland-berger",
      name: "Roland Berger",
      specialty: "Strategie, Energy & Utilities",
      location: "München, Berlin",
      contact: "Dr. Markus Fischer",
      email: "markus.fischer@rolandberger.com",
      phone: "+49 89 9230 0",
      services: ["Strategieentwicklung", "M&A Advisory", "Restrukturierung", "Digitalisierung", "Operations"],
      experience: "Europas führende Strategieberatung",
      category: "Transaction, Strategy & Market Advisory",
      categoryIcon: LineChart,
      categoryColor: "bg-purple-500/10 text-purple-600",
      website: "www.rolandberger.com",
      founded: "1967",
      employees: "3.000+ Berater",
      description: "Roland Berger ist die einzige Strategieberatung europäischer Herkunft mit globaler Reichweite. Unser Energy & Utilities Team berät Investoren und Unternehmen bei strategischen Fragen der Energiewende.",
      highlights: [
        "Führende Strategieberatung in Europa",
        "Spezialisiertes Energy & Utilities Team",
        "Tiefe Expertise in Energiewende",
        "Starke Präsenz in DACH und Europa"
      ],
      references: [
        { name: "Energy Transition Fund", project: "Investmentstrategie Entwicklung" },
        { name: "Utility Holding AG", project: "Transformation Roadmap" },
        { name: "Grid Infrastructure", project: "Markteintrittsstrategie" }
      ]
    },
    "mckinsey": {
      id: "mckinsey",
      name: "McKinsey & Company",
      specialty: "Transformation, Sustainability",
      location: "Frankfurt, Düsseldorf",
      contact: "Dr. Claudia Schulz",
      email: "claudia_schulz@mckinsey.com",
      phone: "+49 69 7162 0",
      services: ["Nachhaltige Transformation", "Operational Excellence", "Digital Strategy", "Organization", "Growth"],
      experience: "Globale #1 Managementberatung",
      category: "Transaction, Strategy & Market Advisory",
      categoryIcon: LineChart,
      categoryColor: "bg-purple-500/10 text-purple-600",
      website: "www.mckinsey.com",
      founded: "1926",
      employees: "45.000+ Berater",
      description: "McKinsey & Company ist die weltweit führende Managementberatung. Unser Sustainability Practice unterstützt Investoren und Unternehmen bei der nachhaltigen Transformation und der Erschließung neuer Wachstumschancen.",
      highlights: [
        "Weltweit #1 Managementberatung",
        "Führend im Bereich Sustainability",
        "Eigenes McKinsey Sustainability Institut",
        "Net-Zero-Expertise für alle Branchen"
      ],
      references: [
        { name: "Global PE Fund", project: "ESG Value Creation Strategy" },
        { name: "Energy Major", project: "Net Zero Transformation" },
        { name: "CleanTech Scale-up", project: "Go-to-Market Strategie" }
      ]
    },
    "aurora-energy": {
      id: "aurora-energy",
      name: "Aurora Energy Research",
      specialty: "Marktanalysen, Prognosen",
      location: "Oxford, Berlin",
      contact: "Dr. Felix Braun",
      email: "felix.braun@auroraer.com",
      phone: "+44 1865 339 350",
      services: ["Marktprognosen", "Asset Valuation", "Policy Analysis", "Power Market Modelling", "Advisory"],
      experience: "Spezialist für Energiemärkte",
      category: "Transaction, Strategy & Market Advisory",
      categoryIcon: LineChart,
      categoryColor: "bg-purple-500/10 text-purple-600",
      website: "www.auroraer.com",
      founded: "2013",
      employees: "600+ Analysten",
      description: "Aurora Energy Research ist der führende unabhängige Energiemarktanalyst. Wir liefern datengetriebene Analysen und Prognosen für Investoren und Unternehmen im Energiesektor.",
      highlights: [
        "Führender Energiemarkt-Analyst",
        "Proprietäre Marktmodelle",
        "Abdeckung aller europäischen Märkte",
        "Trusted Advisor für Top-Investoren"
      ],
      references: [
        { name: "Infrastructure Fund V", project: "PPA Valuation Portfolio" },
        { name: "Renewable Developer", project: "Market Entry Analysis CEE" },
        { name: "Trading House", project: "Long-term Power Price Forecasts" }
      ]
    }
  };

  const partner = partnerId ? allPartners[partnerId] : null;

  if (!partner) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-4">Partner nicht gefunden</h2>
          <Link to="/partners">
            <Button>Zurück zur Übersicht</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const CategoryIcon = partner.categoryIcon;

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
          to="/partners" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zu Partners</span>
        </Link>

        {/* Partner Header */}
        <Card className="mb-6 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${partner.categoryColor}`}>
                <CategoryIcon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {partner.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">{partner.name}</h2>
                <p className="text-primary font-medium">{partner.specialty}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">{partner.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/70" />
                <div>
                  <p className="text-xs text-muted-foreground">Gegründet</p>
                  <p className="text-sm font-medium text-foreground">{partner.founded}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary/70" />
                <div>
                  <p className="text-xs text-muted-foreground">Team</p>
                  <p className="text-sm font-medium text-foreground">{partner.employees}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary/70" />
                <div>
                  <p className="text-xs text-muted-foreground">Standorte</p>
                  <p className="text-sm font-medium text-foreground">{partner.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary/70" />
                <div>
                  <p className="text-xs text-muted-foreground">Website</p>
                  <p className="text-sm font-medium text-foreground">{partner.website}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ansprechpartner</p>
                    <p className="font-medium text-foreground">{partner.contact}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-Mail</p>
                    <p className="font-medium text-foreground">{partner.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <p className="font-medium text-foreground">{partner.phone}</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="w-4 h-4 mr-2" />
                Kontakt aufnehmen
              </Button>
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Highlights</h3>
              <div className="space-y-3">
                {partner.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <p className="text-sm font-medium text-foreground">{partner.experience}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Leistungen</h3>
            <div className="flex flex-wrap gap-2">
              {partner.services.map((service, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* References */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Referenzen</h3>
            <div className="space-y-3">
              {partner.references.map((ref, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{ref.name}</p>
                      <p className="text-sm text-muted-foreground">{ref.project}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PartnerProfile;