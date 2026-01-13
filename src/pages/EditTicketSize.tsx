import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Euro } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvestmentCriteria } from "@/hooks/useInvestmentCriteria";

const ticketPresets = [
  { label: "€100K - €500K", min: 100, max: 500 },
  { label: "€250K - €1M", min: 250, max: 1000 },
  { label: "€500K - €2M", min: 500, max: 2000 },
  { label: "€1M - €5M", min: 1000, max: 5000 },
  { label: "€2M - €10M", min: 2000, max: 10000 },
  { label: "€5M - €20M", min: 5000, max: 20000 },
];

const formatCurrency = (value: number): string => {
  if (value >= 1000) {
    return `€${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}M`;
  }
  return `€${value}K`;
};

const EditTicketSize = () => {
  const navigate = useNavigate();
  const { ticketSize, saveTicketSize } = useInvestmentCriteria();
  const [minTicket, setMinTicket] = useState(ticketSize.min);
  const [maxTicket, setMaxTicket] = useState(ticketSize.max);

  const handleSliderChange = (values: number[]) => {
    setMinTicket(values[0]);
    setMaxTicket(values[1]);
  };

  const handlePresetClick = (min: number, max: number) => {
    setMinTicket(min);
    setMaxTicket(max);
  };

  const handleSave = () => {
    if (minTicket >= maxTicket) {
      toast({
        title: "Invalid Range",
        description: "Minimum ticket size must be less than maximum.",
        variant: "destructive",
      });
      return;
    }
    saveTicketSize({ min: minTicket, max: maxTicket });
    toast({
      title: "Ticket Size Saved",
      description: `Your ticket size range has been updated to ${formatCurrency(minTicket)} - ${formatCurrency(maxTicket)}.`,
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
                  <Euro className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Edit Ticket Size</h1>
                  <p className="text-xs text-muted-foreground">Set your investment range</p>
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
              <Euro className="w-5 h-5 text-primary" />
              Set Your Ticket Size Range
            </CardTitle>
            <CardDescription>
              Define your minimum and maximum investment amount per deal.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Current Selection Display */}
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <p className="text-sm text-muted-foreground mb-2">Your Ticket Size Range</p>
              <p className="text-3xl font-bold text-primary">
                {formatCurrency(minTicket)} - {formatCurrency(maxTicket)}
              </p>
            </div>

            {/* Slider */}
            <div className="space-y-4">
              <Label className="text-foreground font-semibold">Adjust Range</Label>
              <div className="px-2">
                <Slider
                  value={[minTicket, maxTicket]}
                  onValueChange={handleSliderChange}
                  min={50}
                  max={50000}
                  step={50}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>€50K</span>
                <span>€50M</span>
              </div>
            </div>

            {/* Manual Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="min-ticket" className="text-foreground font-semibold">
                  Minimum (in €K)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
                  <Input
                    id="min-ticket"
                    type="number"
                    value={minTicket}
                    onChange={(e) => setMinTicket(Number(e.target.value))}
                    className="pl-8"
                    min={50}
                    max={maxTicket - 50}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">K</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-ticket" className="text-foreground font-semibold">
                  Maximum (in €K)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
                  <Input
                    id="max-ticket"
                    type="number"
                    value={maxTicket}
                    onChange={(e) => setMaxTicket(Number(e.target.value))}
                    className="pl-8"
                    min={minTicket + 50}
                    max={50000}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">K</span>
                </div>
              </div>
            </div>

            {/* Presets */}
            <div className="space-y-3">
              <Label className="text-foreground font-semibold">Quick Presets</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {ticketPresets.map((preset) => {
                  const isSelected = minTicket === preset.min && maxTicket === preset.max;
                  return (
                    <Button
                      key={preset.label}
                      variant="outline"
                      onClick={() => handlePresetClick(preset.min, preset.max)}
                      className={`
                        h-auto py-3 transition-all
                        ${isSelected 
                          ? "bg-primary/10 border-primary text-primary" 
                          : "hover:bg-primary/5 hover:border-primary/50"
                        }
                      `}
                    >
                      {preset.label}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    Selected Range: {formatCurrency(minTicket)} - {formatCurrency(maxTicket)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This will be displayed in your Investment Focus
                  </p>
                </div>
                <Button 
                  onClick={handleSave}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Ticket Size
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditTicketSize;
