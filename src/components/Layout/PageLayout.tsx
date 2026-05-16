import { ReactNode } from "react";
import { motion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTABanner from "../ui/CTABanner";

interface PageLayoutProps {
  children: ReactNode;
  showCTA?: boolean;
}

export default function PageLayout({ children, showCTA = true }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal text-cream selection:bg-amber/30 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
        {showCTA && <CTABanner />}
      </main>
      <Footer />
      
      {/* Scroll to Top / Sticky Mobile CTA placeholder if needed */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-6 right-6 z-40 lg:hidden"
      >
        <button className="w-full bg-amber text-charcoal shadow-2xl py-5 text-sm uppercase tracking-widest font-bold hover:bg-gold-muted transition-colors">
          GET A FREE QUOTE
        </button>
      </motion.div>
    </div>
  );
}
