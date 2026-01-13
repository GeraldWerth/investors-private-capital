import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Target, Save, Sprout, Rocket, TrendingUp, Building2, Crown, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useInvestmentCriteria } from "@/hooks/useInvestmentCriteria";

const stageDetails = [
  { id: "pre-seed", name: "Pre-Seed", icon: Sprout, description: "Very early stage, idea validation and initial development" },
  { id: "seed", name: "Seed", icon: Sprout, description: "Early product development and market validation" },
  { id: "series-a", name: "Series A", icon: Rocket, description: "Product-market fit and initial scaling" },
  { id: "series-b", name: "Series B", icon: TrendingUp, description: "Scaling operations and market expansion" },
  { id: "series-c", name: "Series C", icon: Building2, description: "Rapid scaling and international expansion" },
  { id: "series-d", name: "Series D+", icon: Crown, description: "Late stage growth and pre-IPO rounds" },
  { id: "growth", name: "Growth Equity", icon: TrendingUp, description: "Mature companies seeking expansion capital" },
  { id: "bridge", name: "Bridge Financing", icon: Briefcase, description: "Short-term funding between major rounds" },
];

const EditStages = () => {
  const navigate = useNavigate();
  const { stages, saveStages } = useInvestmentCriteria();
  const [selectedStages, setSelectedStages] = useState<string[]>(stages);

  const handleStageToggle = (stageId: string) => {
    setSelectedStages(prev => 
      prev.includes(stageId) 
        ? prev.filter(id => id !== stageId)
        : [...prev, stageId]
    );
  };

  const handleSave = () => {
    saveStages(selectedStages);
    toast({
      title: "Investment Stages Saved",
      description: `${selectedStages.length} investment stages have been updated.`,
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
                  <h1 className="text-lg font-bold text-foreground">Edit Investment Stages</h1>
                  <p className="text-xs text-muted-foreground">Select your target funding stages</p>
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
              Select Your Target Investment Stages
            </CardTitle>
            <CardDescription>
              Choose the funding stages you want to invest in. 
              These will be displayed in your Investment Focus overview.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stageDetails.map((stage) => {
                const isSelected = selectedStages.includes(stage.id);
                return (
                  <div
                    key={stage.id}
                    onClick={() => handleStageToggle(stage.id)}
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
                        onCheckedChange={() => handleStageToggle(stage.id)}
                        className="mt-1"
                      />
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`
                          w-10 h-10 rounded-lg flex items-center justify-center
                          ${isSelected ? "bg-primary/20" : "bg-muted"}
                        `}>
                          <stage.icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${isSelected ? "text-primary" : "text-foreground"}`}>
                            {stage.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {stage.description}
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
                    {selectedStages.length} Stage{selectedStages.length !== 1 ? "s" : ""} Selected
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These stages will appear in your Investment Focus
                  </p>
                </div>
                <Button 
                  onClick={handleSave}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Stages
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditStages;
