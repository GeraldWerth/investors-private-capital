import { useState, useEffect } from "react";

// Sector data
export const availableSectors = [
  { id: "cleantech", name: "CleanTech" },
  { id: "energy-storage", name: "Energy Storage" },
  { id: "smart-grid", name: "Smart Grid" },
  { id: "renewables", name: "Renewables" },
  { id: "carbon-capture", name: "Carbon Capture" },
  { id: "hydrogen", name: "Hydrogen & Fuel Cells" },
  { id: "energy-efficiency", name: "Energy Efficiency" },
  { id: "offshore-wind", name: "Offshore Wind" },
  { id: "onshore-wind", name: "Onshore Wind" },
  { id: "solar-tech", name: "Solar Technology" },
  { id: "grid-infrastructure", name: "Grid Infrastructure" },
  { id: "ev-charging", name: "EV Charging" },
  { id: "geothermal", name: "Geothermal Energy" },
  { id: "biogas", name: "Biogas & Biomass" },
  { id: "nuclear", name: "Nuclear Energy" },
  { id: "hydropower", name: "Hydropower" },
  { id: "heat-pumps", name: "Heat Pumps" },
  { id: "power-electronics", name: "Power Electronics" },
  { id: "energy-trading", name: "Energy Trading" },
  { id: "building-energy", name: "Building Energy" },
];

// Stages data
export const availableStages = [
  { id: "pre-seed", name: "Pre-Seed" },
  { id: "seed", name: "Seed" },
  { id: "series-a", name: "Series A" },
  { id: "series-b", name: "Series B" },
  { id: "series-c", name: "Series C" },
  { id: "series-d", name: "Series D+" },
  { id: "growth", name: "Growth Equity" },
  { id: "bridge", name: "Bridge Financing" },
];

// Countries data
export const allCountries: Record<string, string> = {
  de: "Germany", fr: "France", nl: "Netherlands", be: "Belgium", lu: "Luxembourg",
  at: "Austria", ch: "Switzerland", uk: "United Kingdom", ie: "Ireland",
  se: "Sweden", no: "Norway", dk: "Denmark", fi: "Finland", is: "Iceland",
  es: "Spain", pt: "Portugal", it: "Italy", gr: "Greece", mt: "Malta",
  pl: "Poland", cz: "Czech Republic", sk: "Slovakia", hu: "Hungary", si: "Slovenia",
  ro: "Romania", bg: "Bulgaria", ua: "Ukraine", hr: "Croatia", rs: "Serbia",
  ee: "Estonia", lv: "Latvia", lt: "Lithuania",
  us: "United States", ca: "Canada", mx: "Mexico",
  jp: "Japan", kr: "South Korea", cn: "China", tw: "Taiwan", hk: "Hong Kong",
  sg: "Singapore", my: "Malaysia", th: "Thailand", id: "Indonesia", vn: "Vietnam", ph: "Philippines",
  in: "India", pk: "Pakistan", bd: "Bangladesh",
  il: "Israel", ae: "United Arab Emirates", sa: "Saudi Arabia", qa: "Qatar",
  au: "Australia", nz: "New Zealand",
  br: "Brazil", ar: "Argentina", cl: "Chile", co: "Colombia", pe: "Peru",
  eg: "Egypt", ma: "Morocco", za: "South Africa", ng: "Nigeria", ke: "Kenya",
};

// Investment type
export interface Investment {
  id: string;
  company: string;
  sector: string;
  stage: string;
  amount: string;
  status: "Closed" | "In Progress" | "Due Diligence" | "Term Sheet";
  date?: string;
}

// Default selections
const DEFAULT_SECTORS = ["cleantech", "energy-storage", "smart-grid", "renewables"];
const DEFAULT_STAGES = ["seed", "series-a", "series-b"];
const DEFAULT_COUNTRIES = ["de", "at", "ch", "se", "no", "dk", "fi", "nl", "be", "lu"];
const DEFAULT_TICKET_SIZE = { min: 20, max: 5000 }; // in thousands (€K)
const DEFAULT_INVESTMENTS: Investment[] = [
  { id: "1", company: "SolarFlow GmbH", stage: "Series A", amount: "€2.5M", sector: "CleanTech", status: "Closed" },
  { id: "2", company: "GridOptimize", stage: "Seed", amount: "€800K", sector: "Smart Grid", status: "Closed" },
  { id: "3", company: "BatteryNext", stage: "Series B", amount: "€4.2M", sector: "Energy Storage", status: "In Progress" }
];

// Storage keys
const STORAGE_KEYS = {
  sectors: "investment_sectors",
  stages: "investment_stages",
  countries: "investment_countries",
  ticketSize: "investment_ticket_size",
  investments: "investment_deals",
};

export function useInvestmentCriteria() {
  const [sectors, setSectors] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.sectors);
    return stored ? JSON.parse(stored) : DEFAULT_SECTORS;
  });

  const [stages, setStages] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.stages);
    return stored ? JSON.parse(stored) : DEFAULT_STAGES;
  });

  const [countries, setCountries] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.countries);
    return stored ? JSON.parse(stored) : DEFAULT_COUNTRIES;
  });

  const [ticketSize, setTicketSize] = useState<{ min: number; max: number }>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.ticketSize);
    return stored ? JSON.parse(stored) : DEFAULT_TICKET_SIZE;
  });

  const [investments, setInvestments] = useState<Investment[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.investments);
    return stored ? JSON.parse(stored) : DEFAULT_INVESTMENTS;
  });

  const saveSectors = (newSectors: string[]) => {
    setSectors(newSectors);
    localStorage.setItem(STORAGE_KEYS.sectors, JSON.stringify(newSectors));
  };

  const saveStages = (newStages: string[]) => {
    setStages(newStages);
    localStorage.setItem(STORAGE_KEYS.stages, JSON.stringify(newStages));
  };

  const saveCountries = (newCountries: string[]) => {
    setCountries(newCountries);
    localStorage.setItem(STORAGE_KEYS.countries, JSON.stringify(newCountries));
  };

  const saveTicketSize = (newTicketSize: { min: number; max: number }) => {
    setTicketSize(newTicketSize);
    localStorage.setItem(STORAGE_KEYS.ticketSize, JSON.stringify(newTicketSize));
  };

  const saveInvestments = (newInvestments: Investment[]) => {
    setInvestments(newInvestments);
    localStorage.setItem(STORAGE_KEYS.investments, JSON.stringify(newInvestments));
  };

  // Format ticket size for display
  const getTicketSizeDisplay = () => {
    const formatValue = (value: number): string => {
      if (value >= 1000) {
        return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}M`;
      }
      return `${value}K`;
    };
    return {
      min: formatValue(ticketSize.min),
      max: formatValue(ticketSize.max),
    };
  };

  // Get display names
  const getSectorNames = () => {
    return sectors.map(id => availableSectors.find(s => s.id === id)?.name || id);
  };

  const getStageNames = () => {
    return stages.map(id => availableStages.find(s => s.id === id)?.name || id);
  };

  const getCountryNames = () => {
    return countries.map(id => allCountries[id] || id);
  };

  // Get region summary for display - shows countries grouped by region
  const getGeographyDisplay = () => {
    // If 6 or fewer countries, show individual names
    if (countries.length <= 6) {
      return countries.map(id => allCountries[id] || id);
    }
    
    // Otherwise, show a smart summary with regions + remaining countries
    const dachCountries = ["de", "at", "ch"];
    const nordicCountries = ["se", "no", "dk", "fi", "is"];
    const beneluxCountries = ["nl", "be", "lu"];
    
    const result: string[] = [];
    const coveredCountries: string[] = [];
    
    // Check for complete regions
    if (dachCountries.every(c => countries.includes(c))) {
      result.push("DACH");
      coveredCountries.push(...dachCountries);
    }
    if (nordicCountries.filter(c => countries.includes(c)).length >= 4) {
      result.push("Nordics");
      coveredCountries.push(...nordicCountries.filter(c => countries.includes(c)));
    }
    if (beneluxCountries.every(c => countries.includes(c))) {
      result.push("Benelux");
      coveredCountries.push(...beneluxCountries);
    }
    
    // Count remaining countries not covered by regions
    const remainingCountries = countries.filter(c => !coveredCountries.includes(c));
    
    if (remainingCountries.length > 0 && remainingCountries.length <= 3) {
      // Show individual remaining countries
      result.push(...remainingCountries.map(id => allCountries[id] || id));
    } else if (remainingCountries.length > 3) {
      // Show count for remaining
      result.push(`+${remainingCountries.length} more`);
    }
    
    // Fallback: if no regions matched, just show country count
    if (result.length === 0) {
      return [`${countries.length} Countries`];
    }
    
    return result;
  };

  return {
    sectors,
    stages,
    countries,
    ticketSize,
    investments,
    saveSectors,
    saveStages,
    saveCountries,
    saveTicketSize,
    saveInvestments,
    getSectorNames,
    getStageNames,
    getCountryNames,
    getGeographyDisplay,
    getTicketSizeDisplay,
  };
}
