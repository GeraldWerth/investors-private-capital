import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartupLogin from "./pages/StartupLogin";
import StartupDashboard from "./pages/StartupDashboard";
import PersonalData from "./pages/PersonalData";
import InvestmentFocus from "./pages/InvestmentFocus";
import PitchingSessions from "./pages/PitchingSessions";
import Secondaries from "./pages/Secondaries";
import InvestmentRequests from "./pages/InvestmentRequests";
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
          <Route path="/startup-dashboard" element={<StartupDashboard />} />
          <Route path="/personal-data" element={<PersonalData />} />
          <Route path="/investment-focus" element={<InvestmentFocus />} />
          <Route path="/pitching-sessions" element={<PitchingSessions />} />
          <Route path="/secondaries" element={<Secondaries />} />
          <Route path="/investment-requests" element={<InvestmentRequests />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
