import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, Users, TrendingUp, ChevronRight,
  Scale, Cpu, Leaf, LineChart
} from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const partnerCategories = [
    {
      icon: Scale,
      title: "Legal, Regulatory & Compliance Partners",
      description: "Rechtliche Beratung und regulatorische Unterstützung",
      partners: [
        { name: "Morrison & Foerster LLP", specialty: "M&A, Venture Capital" },
        { name: "Hengeler Mueller", specialty: "Gesellschaftsrecht, Compliance" },
        { name: "Noerr LLP", specialty: "Regulierung, Energierecht" }
      ],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Cpu,
      title: "Engineering, Technical & Due Diligence Partners",
      description: "Technische Bewertung und Due Diligence",
      partners: [
        { name: "TÜV Rheinland", specialty: "Technische Prüfung, Zertifizierung" },
        { name: "DNV", specialty: "Energy Due Diligence" },
        { name: "Fraunhofer ISE", specialty: "Technologiebewertung" }
      ],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: Leaf,
      title: "ESG, Certification & Sustainability Partners",
      description: "Nachhaltigkeitsbewertung und Zertifizierungen",
      partners: [
        { name: "Sustainalytics", specialty: "ESG Ratings & Research" },
        { name: "EcoVadis", specialty: "Sustainability Ratings" },
        { name: "Climate Partner", specialty: "Carbon Footprint, Klimastrategie" }
      ],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: LineChart,
      title: "Transaction, Strategy & Market Advisory Partners",
      description: "Strategische Beratung und Marktanalysen",
      partners: [
        { name: "Roland Berger", specialty: "Strategie, Energy & Utilities" },
        { name: "McKinsey & Company", specialty: "Transformation, Sustainability" },
        { name: "Aurora Energy Research", specialty: "Marktanalysen, Prognosen" }
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

        {/* Partner Categories */}
        <div className="grid gap-6">
          {partnerCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 ml-16">
                  {category.partners.map((partner, partnerIndex) => (
                    <div 
                      key={partnerIndex}
                      className="flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group cursor-pointer"
                    >
                      <div>
                        <p className="font-medium text-foreground">{partner.name}</p>
                        <p className="text-sm text-muted-foreground">{partner.specialty}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>

                <div className="mt-4 ml-16">
                  <Button variant="outline" size="sm" className="text-primary border-primary/30 hover:bg-primary/10">
                    Alle Partner anzeigen
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
