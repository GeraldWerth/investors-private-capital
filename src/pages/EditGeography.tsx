import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Target, Save, Globe, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const availableRegions = [
  { id: "dach", name: "DACH", icon: MapPin, description: "Germany, Austria, Switzerland" },
  { id: "nordics", name: "Nordics", icon: MapPin, description: "Sweden, Norway, Denmark, Finland, Iceland" },
  { id: "benelux", name: "Benelux", icon: MapPin, description: "Belgium, Netherlands, Luxembourg" },
  { id: "uk-ireland", name: "UK & Ireland", icon: MapPin, description: "United Kingdom and Ireland" },
  { id: "france", name: "France", icon: MapPin, description: "France and Monaco" },
  { id: "iberia", name: "Iberia", icon: MapPin, description: "Spain and Portugal" },
  { id: "italy", name: "Italy", icon: MapPin, description: "Italy and San Marino" },
  { id: "cee", name: "Central & Eastern Europe", icon: MapPin, description: "Poland, Czech Republic, Hungary, Romania, etc." },
  { id: "baltics", name: "Baltics", icon: MapPin, description: "Estonia, Latvia, Lithuania" },
  { id: "southeast-europe", name: "Southeast Europe", icon: MapPin, description: "Greece, Bulgaria, Croatia, Slovenia, etc." },
  { id: "north-america", name: "North America", icon: Globe, description: "USA and Canada" },
  { id: "israel", name: "Israel", icon: MapPin, description: "Israel and Middle East tech hub" },
  { id: "asia-pacific", name: "Asia Pacific", icon: Globe, description: "Japan, South Korea, Singapore, Australia" },
  { id: "india", name: "India", icon: Globe, description: "Indian subcontinent" },
  { id: "latam", name: "Latin America", icon: Globe, description: "Brazil, Mexico, Argentina, Chile, etc." },
];

const EditGeography = () => {
  const navigate = useNavigate();
  const [selectedRegions, setSelectedRegions] = useState<string[]>([
    "dach", "nordics", "benelux"
  ]);

  const handleRegionToggle = (regionId: string) => {
    setSelectedRegions(prev => 
      prev.includes(regionId) 
        ? prev.filter(id => id !== regionId)
        : [...prev, regionId]
    );
  };

  const handleSave = () => {
    toast({
      title: "Geographic Focus Saved",
      description: `${selectedRegions.length} regions have been updated.`,
    });
    navigate("/investment-focus");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/investment-focus"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Edit Geographic Focus</h1>
                  <p className="text-xs text-muted-foreground">Select your target regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Select Your Target Regions
            </CardTitle>
            <CardDescription>
              Choose the geographic regions you want to focus your investments on. 
              These will be displayed in your Investment Focus overview.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableRegions.map((region) => {
                const isSelected = selectedRegions.includes(region.id);
                return (
                  <div
                    key={region.id}
                    onClick={() => handleRegionToggle(region.id)}
                    className={`
                      p-4 rounded-xl border cursor-pointer transition-all duration-200
                      ${isSelected 
                        ? "bg-primary/10 border-primary shadow-md" 
                        : "bg-secondary border-border hover:border-primary/50 hover:bg-primary/5"
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => handleRegionToggle(region.id)}
                        className="mt-1"
                      />
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`
                          w-8 h-8 rounded-lg flex items-center justify-center shrink-0
                          ${isSelected ? "bg-primary/20" : "bg-muted"}
                        `}>
                          <region.icon className={`w-4 h-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold ${isSelected ? "text-primary" : "text-foreground"}`}>
                            {region.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {region.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-secondary border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {selectedRegions.length} Region{selectedRegions.length !== 1 ? "s" : ""} Selected
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These regions will appear in your Investment Focus
                  </p>
                </div>
                <Button 
                  onClick={handleSave}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Regions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditGeography;
