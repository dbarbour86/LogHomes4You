import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FloorPlansPage from "./pages/FloorPlansPage";
import ContactPage from "./pages/ContactPage";
import ProcessPage from "./pages/ProcessPage";
import SuperiorPackagePage from "./pages/SuperiorPackagePage";
import ModelDetailPage from "./pages/ModelDetailPage";
import SmallLogHomesPage from "./pages/SmallLogHomesPage";
import NationwideLogHomesPage from "./pages/NationwideLogHomesPage";
import InvestorsPage from "./pages/InvestorsPage";
import TwoBedroomLogHomesPage from "./pages/TwoBedroomLogHomesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { motion } from "motion/react";
import Button from "./components/ui/Button";

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
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <HomePage />
              </main>
              <Footer />
              <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-6 left-6 right-6 z-40 lg:hidden"
              >
                <Button variant="primary" className="w-full shadow-2xl py-5 text-sm uppercase tracking-widest font-bold">
                  GET A FREE QUOTE
                </Button>
              </motion.div>
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/floor-plans" element={<FloorPlansPage />} />
          <Route path="/floor-plans/2-bedroom-log-homes" element={<TwoBedroomLogHomesPage />} />
          <Route path="/floor-plans/:modelId" element={<ModelDetailPage />} />
          <Route path="/small-log-homes" element={<SmallLogHomesPage />} />
          <Route path="/nationwide-log-homes" element={<NationwideLogHomesPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/package" element={<SuperiorPackagePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

