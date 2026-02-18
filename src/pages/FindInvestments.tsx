import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, Building2, Repeat, Search, 
  TrendingUp, ChevronRight, Rocket, Users, FileSearch
} from "lucide-react";
import { Link } from "react-router-dom";

const FindStartups = () => {
  const options = [
    {
      icon: Rocket,
      title: "Invest in Startups",
      description: "Discover promising startups for direct investments",
      details: ["Early-Stage Investments", "Growth-Stage Deals", "Co-Investment Opportunities"],
      link: "/founder-access",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Repeat,
      title: "Invest in Secondaries",
      description: "Acquire shares from existing shareholders",
      details: ["Available Shares", "Active Negotiations", "Portfolio Acquisitions"],
      link: "/secondaries",
      color: "bg-accent/10 text-accent-foreground"
    },
    {
      icon: FileSearch,
      title: "Submit Search Request",
      description: "Let us find suitable investments for you",
      details: ["Custom Search Criteria", "Automatic Notifications", "Exclusive Deals"],
      link: "/investment-requests",
      color: "bg-secondary text-secondary-foreground"
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
          <span>Back to Dashboard</span>
        </Link>

        {/* Page Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Find Investments
              </h2>
              <p className="text-muted-foreground">
                Choose your preferred investment method
              </p>
            </div>
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid gap-6">
          {options.map((option, index) => (
            <Link key={index} to={option.link}>
              <Card className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${option.color}`}>
                      <option.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {option.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {option.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {option.details.map((detail, detailIndex) => (
                          <span 
                            key={detailIndex}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <Card className="mt-8 bg-muted/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Persönliche Beratung
                </h4>
                <p className="text-sm text-muted-foreground">
                  Sie sind sich unsicher, welche Option für Sie die richtige ist? 
                  Unser Investment-Team berät Sie gerne individuell zu Ihren Möglichkeiten.
                </p>
                <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                  Beratungstermin vereinbaren
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

export default FindStartups;
