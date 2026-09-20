import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTABanner from "../ui/CTABanner";

interface PageLayoutProps {
  children: ReactNode;
  showCTA?: boolean;
}

export default function PageLayout({ children, showCTA = true }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-sand text-timber selection:bg-cedar/20 selection:text-timber">
      <Navbar />
      <main className="flex-grow">
        {children}
        {showCTA && <CTABanner />}
      </main>
      <Footer />
    </div>
  );
}
