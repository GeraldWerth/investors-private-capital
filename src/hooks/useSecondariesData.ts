import { useState } from "react";

// Types
export interface AvailableSecondary {
  id: string;
  company: string;
  sector: string;
  jurisdiction: string;
  securityType: "Common" | "Preferred" | "Convertible" | "LP Interest";
  transactionType: string;
  sellerType: "Founder" | "Employee" | "Investor" | "Fund" | "SPV";
  valuation: string;
  pricePerShare: string;
  minimumInvestment: string;
  totalOfferedSize: string;
}

export interface MyOffer {
  id: string;
  company: string;
  sector: string;
  jurisdiction: string;
  securityType: "Common" | "Preferred" | "Convertible" | "LP Interest";
  transactionType: string;
  sellerType: "Founder" | "Employee" | "Investor" | "Fund" | "SPV";
  valuation: string;
  pricePerShare: string;
  minimumInvestment: string;
  totalOfferedSize: string;
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
    jurisdiction: "Germany",
    securityType: "Preferred",
    transactionType: "Direct Secondary",
    sellerType: "Investor",
    valuation: "€45M",
    pricePerShare: "€120",
    minimumInvestment: "€250k",
    totalOfferedSize: "€3.6M",
  },
  {
    id: "2",
    company: "GridOptimize",
    sector: "Smart Grid",
    jurisdiction: "Netherlands",
    securityType: "Common",
    transactionType: "Founder Sale",
    sellerType: "Founder",
    valuation: "€28M",
    pricePerShare: "€85",
    minimumInvestment: "€100k",
    totalOfferedSize: "€1.4M",
  },
  {
    id: "3",
    company: "Confidential – Energy Storage, EU",
    sector: "Energy Storage",
    jurisdiction: "EU",
    securityType: "LP Interest",
    transactionType: "LP Interest Sale",
    sellerType: "Fund",
    valuation: "€62M",
    pricePerShare: "€210",
    minimumInvestment: "€500k",
    totalOfferedSize: "€7.4M",
  }
];

const DEFAULT_MY_OFFERS: MyOffer[] = [
  {
    id: "1",
    company: "WindTech Solutions",
    sector: "Wind Energy",
    jurisdiction: "Denmark",
    securityType: "Common",
    transactionType: "Brokered Secondary",
    sellerType: "Investor",
    valuation: "€32M",
    pricePerShare: "€95",
    minimumInvestment: "€150k",
    totalOfferedSize: "€3.2M",
    status: "Active",
    inquiries: 4,
    createdAt: "Jan 5, 2026"
  },
  {
    id: "2",
    company: "SmartCharge Inc",
    sector: "EV Charging",
    jurisdiction: "France",
    securityType: "Preferred",
    transactionType: "Tender Offer",
    sellerType: "Fund",
    valuation: "€18M",
    pricePerShare: "€60",
    minimumInvestment: "€100k",
    totalOfferedSize: "€1.1M",
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
