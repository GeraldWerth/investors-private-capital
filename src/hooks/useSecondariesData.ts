import { useState } from "react";

// Types
export interface AvailableSecondary {
  id: string;
  company: string;
  sector: string;
  sharesAvailable: string;
  valuation: string;
  askingPrice: string;
  seller: string;
  urgency: "High" | "Medium" | "Low";
  highlights: string[];
}

export interface MyOffer {
  id: string;
  company: string;
  sector: string;
  sharesOffered: string;
  valuation: string;
  askingPrice: string;
  status: "Active" | "Pending Review" | "Sold";
  inquiries: number;
  createdAt: string;
}

export interface ActiveNegotiation {
  id: string;
  company: string;
  shares: string;
  stage: "Due Diligence" | "Term Sheet" | "Negotiation" | "Closing";
  lastUpdate: string;
}

export interface PortfolioExit {
  id: string;
  company: string;
  exitType: "Trade Sale" | "Secondary" | "IPO" | "Buyback";
  multiple: string;
  date: string;
}

// Default data
const DEFAULT_AVAILABLE_SECONDARIES: AvailableSecondary[] = [
  {
    id: "1",
    company: "SolarFlow GmbH",
    sector: "CleanTech",
    sharesAvailable: "8%",
    valuation: "€45M",
    askingPrice: "€3.6M",
    seller: "Early Investor",
    urgency: "High",
    highlights: ["Profitable", "Strong Growth", "Strategic Buyer Interest"]
  },
  {
    id: "2",
    company: "GridOptimize",
    sector: "Smart Grid",
    sharesAvailable: "5%",
    valuation: "€28M",
    askingPrice: "€1.4M",
    seller: "Founder",
    urgency: "Medium",
    highlights: ["Series B Upcoming", "Key Partnerships"]
  },
  {
    id: "3",
    company: "BatteryNext",
    sector: "Energy Storage",
    sharesAvailable: "12%",
    valuation: "€62M",
    askingPrice: "€7.4M",
    seller: "VC Fund",
    urgency: "Low",
    highlights: ["Market Leader", "Patent Portfolio"]
  }
];

const DEFAULT_MY_OFFERS: MyOffer[] = [
  {
    id: "1",
    company: "WindTech Solutions",
    sector: "Wind Energy",
    sharesOffered: "10%",
    valuation: "€32M",
    askingPrice: "€3.2M",
    status: "Active",
    inquiries: 4,
    createdAt: "Jan 5, 2026"
  },
  {
    id: "2",
    company: "SmartCharge Inc",
    sector: "EV Charging",
    sharesOffered: "6%",
    valuation: "€18M",
    askingPrice: "€1.1M",
    status: "Pending Review",
    inquiries: 0,
    createdAt: "Jan 8, 2026"
  }
];

const DEFAULT_NEGOTIATIONS: ActiveNegotiation[] = [
  { id: "1", company: "EnergyAI Platform", shares: "6%", stage: "Due Diligence", lastUpdate: "2 days ago" },
  { id: "2", company: "WindTech Pro", shares: "4%", stage: "Term Sheet", lastUpdate: "1 week ago" }
];

const DEFAULT_EXITS: PortfolioExit[] = [
  { id: "1", company: "CleanEnergy Co", exitType: "Trade Sale", multiple: "4.2x", date: "Dec 2025" },
  { id: "2", company: "SmartMeter GmbH", exitType: "Secondary", multiple: "2.8x", date: "Oct 2025" }
];

// Storage keys
const STORAGE_KEYS = {
  availableSecondaries: "secondaries_available",
  myOffers: "secondaries_my_offers",
  negotiations: "secondaries_negotiations",
  exits: "secondaries_exits",
};

export function useSecondariesData() {
  const [availableSecondaries, setAvailableSecondaries] = useState<AvailableSecondary[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.availableSecondaries);
    return stored ? JSON.parse(stored) : DEFAULT_AVAILABLE_SECONDARIES;
  });

  const [myOffers, setMyOffers] = useState<MyOffer[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.myOffers);
    return stored ? JSON.parse(stored) : DEFAULT_MY_OFFERS;
  });

  const [negotiations, setNegotiations] = useState<ActiveNegotiation[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.negotiations);
    return stored ? JSON.parse(stored) : DEFAULT_NEGOTIATIONS;
  });

  const [exits, setExits] = useState<PortfolioExit[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.exits);
    return stored ? JSON.parse(stored) : DEFAULT_EXITS;
  });

  const saveAvailableSecondaries = (data: AvailableSecondary[]) => {
    setAvailableSecondaries(data);
    localStorage.setItem(STORAGE_KEYS.availableSecondaries, JSON.stringify(data));
  };

  const saveMyOffers = (data: MyOffer[]) => {
    setMyOffers(data);
    localStorage.setItem(STORAGE_KEYS.myOffers, JSON.stringify(data));
  };

  const saveNegotiations = (data: ActiveNegotiation[]) => {
    setNegotiations(data);
    localStorage.setItem(STORAGE_KEYS.negotiations, JSON.stringify(data));
  };

  const saveExits = (data: PortfolioExit[]) => {
    setExits(data);
    localStorage.setItem(STORAGE_KEYS.exits, JSON.stringify(data));
  };

  return {
    availableSecondaries,
    myOffers,
    negotiations,
    exits,
    saveAvailableSecondaries,
    saveMyOffers,
    saveNegotiations,
    saveExits,
  };
}
