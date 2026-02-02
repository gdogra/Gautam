import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComplianceTrackerPage from "./pages/ComplianceTrackerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="eogdrcsmk" data-path="src/App.tsx">
    <TooltipProvider data-id="72sheyrdp" data-path="src/App.tsx">
      <Toaster data-id="3ziffhvdt" data-path="src/App.tsx" />
      <BrowserRouter data-id="a7qgt4pqb" data-path="src/App.tsx">
        <Routes data-id="zxsxbmw0v" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="9ww8s9cvq" data-path="src/App.tsx" />} data-id="82wwy5q2p" data-path="src/App.tsx" />
          <Route path="/compliance-tracker" element={<ComplianceTrackerPage data-id="compliance-route" data-path="src/App.tsx" />} data-id="compliance-route-data" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="70m8agyzq" data-path="src/App.tsx" />} data-id="d9fdp0nc8" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;