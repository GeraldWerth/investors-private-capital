import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import PitchingSessions from "./pages/PitchingSessions";
import Secondaries from "./pages/Secondaries";
import InvestmentRequests from "./pages/InvestmentRequests";
import EditAvailableSecondaries from "./pages/EditAvailableSecondaries";

import EditNegotiations from "./pages/EditNegotiations";
import EditExits from "./pages/EditExits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/pitching-sessions" element={<PitchingSessions />} />
          <Route path="/secondaries" element={<Secondaries />} />
          <Route path="/edit-available-secondaries" element={<EditAvailableSecondaries />} />
          
          <Route path="/edit-negotiations" element={<EditNegotiations />} />
          <Route path="/edit-exits" element={<EditExits />} />
          <Route path="/investment-requests" element={<InvestmentRequests />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
