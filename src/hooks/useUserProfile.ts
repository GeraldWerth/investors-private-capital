import { useState, useEffect } from "react";

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
}

export interface CompanyProfile {
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  website: string;
  founded: string;
  employees: string;
  description: string;
}

const DEFAULT_USER_PROFILE: UserProfile = {
  firstName: "John",
  lastName: "Smith",
  email: "john@techstartup.com",
  phone: "+1 555 123 4567",
  position: "CEO & Founder"
};

const DEFAULT_COMPANY_PROFILE: CompanyProfile = {
  name: "TechStartup Inc.",
  street: "Innovation Street 42",
  city: "San Francisco",
  zip: "94102",
  country: "United States",
  website: "www.techstartup.com",
  founded: "2022",
  employees: "12",
  description: "We develop innovative solutions for sustainable energy."
};

const STORAGE_KEYS = {
  userProfile: "user_profile",
  companyProfile: "company_profile",
};

export function useUserProfile() {
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.userProfile);
    return stored ? JSON.parse(stored) : DEFAULT_USER_PROFILE;
  });

  const [companyProfile, setCompanyProfile] = useState<CompanyProfile>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.companyProfile);
    return stored ? JSON.parse(stored) : DEFAULT_COMPANY_PROFILE;
  });

  const saveUserProfile = (data: UserProfile) => {
    setUserProfile(data);
    localStorage.setItem(STORAGE_KEYS.userProfile, JSON.stringify(data));
  };

  const saveCompanyProfile = (data: CompanyProfile) => {
    setCompanyProfile(data);
    localStorage.setItem(STORAGE_KEYS.companyProfile, JSON.stringify(data));
  };

  const getFullName = () => `${userProfile.firstName} ${userProfile.lastName}`;

  return {
    userProfile,
    companyProfile,
    saveUserProfile,
    saveCompanyProfile,
    getFullName,
  };
}
