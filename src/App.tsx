import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

// LogHomes4You V1 Pages
import HomePage from "./pages/HomePage";
import FindYourLogHomePage from "./pages/FindYourLogHomePage";
import LogHomePlansPage from "./pages/LogHomePlansPage";
import SmallLogHomesHubPage from "./pages/SmallLogHomesHubPage";
import GuidesHubPage from "./pages/GuidesHubPage";
import GuideCostPage from "./pages/guides/GuideCostPage";
import GuideKitsPage from "./pages/guides/GuideKitsPage";
import GuideKitVsCustomPage from "./pages/guides/GuideKitVsCustomPage";
import GuideSizePage from "./pages/guides/GuideSizePage";
import GuideBuildingPage from "./pages/guides/GuideBuildingPage";
import AboutPage from "./pages/AboutPage";
import KingsCabinsProviderPage from "./pages/KingsCabinsProviderPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Core V1 Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/find-a-log-home" element={<FindYourLogHomePage />} />
        <Route path="/log-home-plans" element={<LogHomePlansPage />} />
        <Route path="/small-log-homes" element={<SmallLogHomesHubPage />} />
        <Route path="/guides" element={<GuidesHubPage />} />
        <Route path="/guides/how-much-does-a-log-home-cost" element={<GuideCostPage />} />
        <Route path="/guides/log-home-kits-explained" element={<GuideKitsPage />} />
        <Route path="/guides/log-home-kit-vs-custom-build" element={<GuideKitVsCustomPage />} />
        <Route path="/guides/choosing-log-home-size" element={<GuideSizePage />} />
        <Route path="/guides/building-a-log-home" element={<GuideBuildingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/builders/kings-cabins" element={<KingsCabinsProviderPage />} />

        {/* Legacy redirects for previous King's Cabins routes if visited directly */}
        <Route path="/floor-plans" element={<Navigate to="/log-home-plans" replace />} />
        <Route path="/floor-plans/2-bedroom-log-homes" element={<Navigate to="/log-home-plans?bedrooms=2" replace />} />
        <Route path="/floor-plans/3-bedroom-log-homes" element={<Navigate to="/log-home-plans?bedrooms=3" replace />} />
        <Route path="/package" element={<Navigate to="/guides/log-home-kits-explained" replace />} />
        <Route path="/process" element={<Navigate to="/guides/building-a-log-home" replace />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
