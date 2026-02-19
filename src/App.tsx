import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import StartupLogin from "./pages/StartupLogin";
import PrivateCapitalDashboard from "./pages/PrivateCapitalDashboard";
import PersonalData from "./pages/PersonalData";
import InvestmentFocus from "./pages/InvestmentFocus";
import EditSectors from "./pages/EditSectors";
import EditStages from "./pages/EditStages";
import EditGeography from "./pages/EditGeography";
import EditTicketSize from "./pages/EditTicketSize";
import EditInvestments from "./pages/EditInvestments";
import FounderAccess from "./pages/FounderAccess";
import Secondaries from "./pages/Secondaries";
import InvestmentRequests from "./pages/InvestmentRequests";
import EditAvailableSecondaries from "./pages/EditAvailableSecondaries";
import FindInvestments from "./pages/FindInvestments";
import Partners from "./pages/Partners";
import PartnerProfile from "./pages/PartnerProfile";
import EditNegotiations from "./pages/EditNegotiations";
import EditExits from "./pages/EditExits";
import LPFundEntry from "./pages/LPFundEntry";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/startup-login" element={<StartupLogin />} />
          <Route path="/private-capital-dashboard" element={<PrivateCapitalDashboard />} />
          <Route path="/personal-data" element={<PersonalData />} />
          <Route path="/investment-focus" element={<InvestmentFocus />} />
          <Route path="/edit-sectors" element={<EditSectors />} />
          <Route path="/edit-stages" element={<EditStages />} />
          <Route path="/edit-geography" element={<EditGeography />} />
          <Route path="/edit-ticket-size" element={<EditTicketSize />} />
          <Route path="/edit-investments" element={<EditInvestments />} />
          <Route path="/founder-access" element={<FounderAccess />} />
          <Route path="/secondaries" element={<Secondaries />} />
          <Route path="/edit-available-secondaries/:id" element={<EditAvailableSecondaries />} />
          <Route path="/edit-available-secondaries" element={<EditAvailableSecondaries />} />
          <Route path="/find-investments" element={<FindInvestments />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/:partnerId" element={<PartnerProfile />} />
          <Route path="/edit-negotiations" element={<EditNegotiations />} />
          <Route path="/edit-exits" element={<EditExits />} />
          <Route path="/investment-requests" element={<InvestmentRequests />} />
          <Route path="/lp-fund-entry" element={<LPFundEntry />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
