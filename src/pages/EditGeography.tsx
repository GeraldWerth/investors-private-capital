import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Save, Globe, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useInvestmentCriteria } from "@/hooks/useInvestmentCriteria";

interface Country {
  id: string;
  name: string;
}

interface Region {
  id: string;
  name: string;
  countries: Country[];
}

interface Continent {
  id: string;
  name: string;
  regions: Region[];
}

const geographyData: Continent[] = [
  {
    id: "europe",
    name: "Europe",
    regions: [
      {
        id: "western-europe",
        name: "Western Europe",
        countries: [
          { id: "de", name: "Germany" },
          { id: "fr", name: "France" },
          { id: "nl", name: "Netherlands" },
          { id: "be", name: "Belgium" },
          { id: "lu", name: "Luxembourg" },
          { id: "at", name: "Austria" },
          { id: "ch", name: "Switzerland" },
        ]
      },
      {
        id: "northern-europe",
        name: "Northern Europe",
        countries: [
          { id: "uk", name: "United Kingdom" },
          { id: "ie", name: "Ireland" },
          { id: "se", name: "Sweden" },
          { id: "no", name: "Norway" },
          { id: "dk", name: "Denmark" },
          { id: "fi", name: "Finland" },
          { id: "is", name: "Iceland" },
        ]
      },
      {
        id: "southern-europe",
        name: "Southern Europe",
        countries: [
          { id: "es", name: "Spain" },
          { id: "pt", name: "Portugal" },
          { id: "it", name: "Italy" },
          { id: "gr", name: "Greece" },
          { id: "mt", name: "Malta" },
        ]
      },
      {
        id: "central-europe",
        name: "Central Europe",
        countries: [
          { id: "pl", name: "Poland" },
          { id: "cz", name: "Czech Republic" },
          { id: "sk", name: "Slovakia" },
          { id: "hu", name: "Hungary" },
          { id: "si", name: "Slovenia" },
        ]
      },
      {
        id: "eastern-europe",
        name: "Eastern Europe",
        countries: [
          { id: "ro", name: "Romania" },
          { id: "bg", name: "Bulgaria" },
          { id: "ua", name: "Ukraine" },
          { id: "hr", name: "Croatia" },
          { id: "rs", name: "Serbia" },
        ]
      },
      {
        id: "baltic-states",
        name: "Baltic States",
        countries: [
          { id: "ee", name: "Estonia" },
          { id: "lv", name: "Latvia" },
          { id: "lt", name: "Lithuania" },
        ]
      },
    ]
  },
  {
    id: "north-america",
    name: "North America",
    regions: [
      {
        id: "north-america-main",
        name: "North America",
        countries: [
          { id: "us", name: "United States" },
          { id: "ca", name: "Canada" },
          { id: "mx", name: "Mexico" },
        ]
      },
    ]
  },
  {
    id: "asia",
    name: "Asia",
    regions: [
      {
        id: "east-asia",
        name: "East Asia",
        countries: [
          { id: "jp", name: "Japan" },
          { id: "kr", name: "South Korea" },
          { id: "cn", name: "China" },
          { id: "tw", name: "Taiwan" },
          { id: "hk", name: "Hong Kong" },
        ]
      },
      {
        id: "southeast-asia",
        name: "Southeast Asia",
        countries: [
          { id: "sg", name: "Singapore" },
          { id: "my", name: "Malaysia" },
          { id: "th", name: "Thailand" },
          { id: "id", name: "Indonesia" },
          { id: "vn", name: "Vietnam" },
          { id: "ph", name: "Philippines" },
        ]
      },
      {
        id: "south-asia",
        name: "South Asia",
        countries: [
          { id: "in", name: "India" },
          { id: "pk", name: "Pakistan" },
          { id: "bd", name: "Bangladesh" },
        ]
      },
      {
        id: "middle-east",
        name: "Middle East",
        countries: [
          { id: "il", name: "Israel" },
          { id: "ae", name: "United Arab Emirates" },
          { id: "sa", name: "Saudi Arabia" },
          { id: "qa", name: "Qatar" },
        ]
      },
    ]
  },
  {
    id: "oceania",
    name: "Oceania",
    regions: [
      {
        id: "oceania-main",
        name: "Australia & New Zealand",
        countries: [
          { id: "au", name: "Australia" },
          { id: "nz", name: "New Zealand" },
        ]
      },
    ]
  },
  {
    id: "south-america",
    name: "South America",
    regions: [
      {
        id: "south-america-main",
        name: "South America",
        countries: [
          { id: "br", name: "Brazil" },
          { id: "ar", name: "Argentina" },
          { id: "cl", name: "Chile" },
          { id: "co", name: "Colombia" },
          { id: "pe", name: "Peru" },
        ]
      },
    ]
  },
  {
    id: "africa",
    name: "Africa",
    regions: [
      {
        id: "north-africa",
        name: "North Africa",
        countries: [
          { id: "eg", name: "Egypt" },
          { id: "ma", name: "Morocco" },
          { id: "za", name: "South Africa" },
          { id: "ng", name: "Nigeria" },
          { id: "ke", name: "Kenya" },
        ]
      },
    ]
  },
];

const EditGeography = () => {
  const navigate = useNavigate();
  const { countries, saveCountries } = useInvestmentCriteria();
  const [selectedCountries, setSelectedCountries] = useState<string[]>(countries);
  const [openContinents, setOpenContinents] = useState<string[]>(["europe"]);
  const [openRegions, setOpenRegions] = useState<string[]>(["western-europe", "northern-europe"]);

  const toggleContinent = (continentId: string) => {
    setOpenContinents(prev =>
      prev.includes(continentId)
        ? prev.filter(id => id !== continentId)
        : [...prev, continentId]
    );
  };

  const toggleRegion = (regionId: string) => {
    setOpenRegions(prev =>
      prev.includes(regionId)
        ? prev.filter(id => id !== regionId)
        : [...prev, regionId]
    );
  };

  const handleCountryToggle = (countryId: string) => {
    setSelectedCountries(prev =>
      prev.includes(countryId)
        ? prev.filter(id => id !== countryId)
        : [...prev, countryId]
    );
  };

  const handleRegionToggle = (region: Region) => {
    const regionCountryIds = region.countries.map(c => c.id);
    const allSelected = regionCountryIds.every(id => selectedCountries.includes(id));
    
    if (allSelected) {
      setSelectedCountries(prev => prev.filter(id => !regionCountryIds.includes(id)));
    } else {
      setSelectedCountries(prev => [...new Set([...prev, ...regionCountryIds])]);
    }
  };

  const handleContinentToggle = (continent: Continent) => {
    const continentCountryIds = continent.regions.flatMap(r => r.countries.map(c => c.id));
    const allSelected = continentCountryIds.every(id => selectedCountries.includes(id));
    
    if (allSelected) {
      setSelectedCountries(prev => prev.filter(id => !continentCountryIds.includes(id)));
    } else {
      setSelectedCountries(prev => [...new Set([...prev, ...continentCountryIds])]);
    }
  };

  const isRegionFullySelected = (region: Region) => {
    return region.countries.every(c => selectedCountries.includes(c.id));
  };

  const isRegionPartiallySelected = (region: Region) => {
    const selected = region.countries.filter(c => selectedCountries.includes(c.id));
    return selected.length > 0 && selected.length < region.countries.length;
  };

  const isContinentFullySelected = (continent: Continent) => {
    return continent.regions.every(r => isRegionFullySelected(r));
  };

  const isContinentPartiallySelected = (continent: Continent) => {
    const hasAnySelected = continent.regions.some(r => 
      r.countries.some(c => selectedCountries.includes(c.id))
    );
    return hasAnySelected && !isContinentFullySelected(continent);
  };

  const handleSave = () => {
    saveCountries(selectedCountries);
    toast({
      title: "Geographic Focus Saved",
      description: `${selectedCountries.length} countries have been selected.`,
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
                  <p className="text-xs text-muted-foreground">Select your target regions and countries</p>
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
              Choose continents, regions, or individual countries for your investment focus.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {geographyData.map((continent) => (
              <Collapsible
                key={continent.id}
                open={openContinents.includes(continent.id)}
                onOpenChange={() => toggleContinent(continent.id)}
              >
                <div className="rounded-xl border border-border overflow-hidden">
                  {/* Continent Header */}
                  <div className="flex items-center gap-3 p-4 bg-secondary">
                    <Checkbox
                      checked={isContinentFullySelected(continent)}
                      ref={(el) => {
                        if (el) {
                          (el as HTMLButtonElement & { indeterminate: boolean }).indeterminate = isContinentPartiallySelected(continent);
                        }
                      }}
                      onCheckedChange={() => handleContinentToggle(continent)}
                      className="data-[state=indeterminate]:bg-primary/50"
                    />
                    <CollapsibleTrigger className="flex items-center gap-2 flex-1 text-left">
                      {openContinents.includes(continent.id) ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                      <span className="font-semibold text-foreground">{continent.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        ({continent.regions.flatMap(r => r.countries).filter(c => selectedCountries.includes(c.id)).length} selected)
                      </span>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent>
                    <div className="p-2 space-y-2">
                      {continent.regions.map((region) => (
                        <Collapsible
                          key={region.id}
                          open={openRegions.includes(region.id)}
                          onOpenChange={() => toggleRegion(region.id)}
                        >
                          <div className="rounded-lg border border-border/50 overflow-hidden ml-4">
                            {/* Region Header */}
                            <div className="flex items-center gap-3 p-3 bg-muted/50">
                              <Checkbox
                                checked={isRegionFullySelected(region)}
                                ref={(el) => {
                                  if (el) {
                                    (el as HTMLButtonElement & { indeterminate: boolean }).indeterminate = isRegionPartiallySelected(region);
                                  }
                                }}
                                onCheckedChange={() => handleRegionToggle(region)}
                                className="data-[state=indeterminate]:bg-primary/50"
                              />
                              <CollapsibleTrigger className="flex items-center gap-2 flex-1 text-left">
                                {openRegions.includes(region.id) ? (
                                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                )}
                                <span className="font-medium text-foreground text-sm">{region.name}</span>
                                <span className="text-xs text-muted-foreground ml-2">
                                  ({region.countries.filter(c => selectedCountries.includes(c.id)).length}/{region.countries.length})
                                </span>
                              </CollapsibleTrigger>
                            </div>

                            <CollapsibleContent>
                              <div className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 ml-4">
                                {region.countries.map((country) => {
                                  const isSelected = selectedCountries.includes(country.id);
                                  return (
                                    <div
                                      key={country.id}
                                      onClick={() => handleCountryToggle(country.id)}
                                      className={`
                                        flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all text-sm
                                        ${isSelected
                                          ? "bg-primary/10 border border-primary"
                                          : "bg-background border border-border hover:border-primary/50"
                                        }
                                      `}
                                    >
                                      <Checkbox
                                        checked={isSelected}
                                        onCheckedChange={() => handleCountryToggle(country.id)}
                                      />
                                      <span className={isSelected ? "text-primary font-medium" : "text-foreground"}>
                                        {country.name}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </CollapsibleContent>
                          </div>
                        </Collapsible>
                      ))}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}

            <div className="mt-8 p-4 rounded-xl bg-secondary border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {selectedCountries.length} {selectedCountries.length !== 1 ? "Countries" : "Country"} Selected
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These countries will define your geographic investment focus
                  </p>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Selection
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
