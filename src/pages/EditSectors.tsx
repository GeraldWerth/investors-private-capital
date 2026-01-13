import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Target, Save, Leaf, Zap, Globe, Factory, Shield, Car, Building } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const availableSectors = [
  { id: "cleantech", name: "CleanTech", icon: Leaf, description: "Clean energy and sustainable technologies" },
  { id: "energy-storage", name: "Energy Storage", icon: Zap, description: "Batteries, hydrogen storage, and grid solutions" },
  { id: "smart-grid", name: "Smart Grid", icon: Globe, description: "Intelligent power distribution and management" },
  { id: "renewables", name: "Renewables", icon: Leaf, description: "Solar, wind, and other renewable energy sources" },
  { id: "carbon-capture", name: "Carbon Capture", icon: Shield, description: "Carbon reduction and capture technologies" },
  { id: "hydrogen", name: "Hydrogen & Fuel Cells", icon: Zap, description: "Green hydrogen production and fuel cell technology" },
  { id: "energy-efficiency", name: "Energy Efficiency", icon: Factory, description: "Technologies to reduce energy consumption" },
  { id: "offshore-wind", name: "Offshore Wind", icon: Globe, description: "Offshore wind farms and related infrastructure" },
  { id: "solar-tech", name: "Solar Technology", icon: Leaf, description: "Photovoltaic systems and solar thermal" },
  { id: "grid-infrastructure", name: "Grid Infrastructure", icon: Building, description: "Power transmission and distribution networks" },
  { id: "ev-charging", name: "EV Charging", icon: Car, description: "Electric vehicle charging infrastructure" },
];

const EditSectors = () => {
  const navigate = useNavigate();
  const [selectedSectors, setSelectedSectors] = useState<string[]>([
    "cleantech", "energy-storage", "smart-grid", "renewables"
  ]);

  const handleSectorToggle = (sectorId: string) => {
    setSelectedSectors(prev => 
      prev.includes(sectorId) 
        ? prev.filter(id => id !== sectorId)
        : [...prev, sectorId]
    );
  };

  const handleSave = () => {
    toast({
      title: "Sectors Saved",
      description: `${selectedSectors.length} target sectors have been updated.`,
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
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Edit Target Sectors</h1>
                  <p className="text-xs text-muted-foreground">Select your investment industries</p>
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
              <Target className="w-5 h-5 text-primary" />
              Select Your Target Sectors
            </CardTitle>
            <CardDescription>
              Choose the industries and sectors you want to focus your investments on. 
              These will be displayed in your Investment Focus overview.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableSectors.map((sector) => {
                const isSelected = selectedSectors.includes(sector.id);
                return (
                  <div
                    key={sector.id}
                    onClick={() => handleSectorToggle(sector.id)}
                    className={`
                      p-4 rounded-xl border cursor-pointer transition-all duration-200
                      ${isSelected 
                        ? "bg-primary/10 border-primary shadow-md" 
                        : "bg-secondary border-border hover:border-primary/50 hover:bg-primary/5"
                      }
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => handleSectorToggle(sector.id)}
                        className="mt-1"
                      />
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`
                          w-10 h-10 rounded-lg flex items-center justify-center
                          ${isSelected ? "bg-primary/20" : "bg-muted"}
                        `}>
                          <sector.icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${isSelected ? "text-primary" : "text-foreground"}`}>
                            {sector.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {sector.description}
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
                    {selectedSectors.length} Sector{selectedSectors.length !== 1 ? "s" : ""} Selected
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These sectors will appear in your Investment Focus
                  </p>
                </div>
                <Button 
                  onClick={handleSave}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Sectors
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditSectors;
