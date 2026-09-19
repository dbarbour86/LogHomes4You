import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToLayaway = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("layaway");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Story", href: "/about" },
    { name: "Floor Plans", href: "/floor-plans" },
    { name: "The Superior Package", href: "/package" },
    { name: "Process", href: "/process" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {isHomePage && (
        <a
          href="#layaway"
          onClick={scrollToLayaway}
          className="group block bg-espresso/95 hover:bg-espresso text-cream/90 transition-colors border-b border-amber/25 py-2.5 px-4 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-amber/50"
          aria-label="New: Put Your Dream Log Home on Layaway — 10% Down, 1 to 5 Years"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center text-xs tracking-wider">
            <span className="inline-flex items-center gap-1.5 font-semibold text-amber uppercase tracking-[0.2em] text-[10px] bg-amber/10 border border-amber/30 px-2 py-0.5 rounded-xs shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
              NEW
            </span>
            <span className="hidden md:inline font-light text-cream/90">
              Put Your Dream Log Home on Layaway — <strong className="font-semibold text-cream">10% Down</strong> · <strong className="font-semibold text-cream">1–5 Years</strong>
            </span>
            <span className="inline md:hidden font-light text-cream/90 text-[11px] truncate">
              Dream Home Layaway — <strong className="font-semibold text-cream">10% Down</strong> · <strong className="font-semibold text-cream">1–5 Years</strong>
            </span>
            <span className="inline-flex items-center text-amber text-[11px] font-medium tracking-widest uppercase ml-1 group-hover:translate-x-0.5 transition-transform duration-200 shrink-0">
              <span className="hidden lg:inline mr-1">Explore</span>
              <ArrowRight size={13} />
            </span>
          </div>
        </a>
      )}

      <nav
        className={`w-full transition-all duration-500 ${
          isScrolled ? "bg-charcoal/95 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6 lg:py-8"
        }`}
        id="main-nav"
      >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col group" id="logo">
          <span className="text-2xl font-serif font-bold tracking-[0.2em] text-cream group-hover:text-amber transition-colors">
            KINGS CABINS
          </span>
          <span className="text-[10px] tracking-[0.5em] text-amber uppercase font-medium -mt-1 ml-0.5">
            LOG HOMES
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${
                location.pathname === link.href ? "text-amber" : "text-cream/70 hover:text-amber"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-white/10 mx-2" />
          <a href="tel:+18655915727" className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-amber hover:text-cream transition-colors">
            <Phone size={14} />
            <span>(865) 591-5727</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-cream"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-charcoal z-40 lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-serif text-cream hover:text-amber transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+18655915727" className="text-amber flex items-center gap-2 mt-4">
              <Phone size={20} />
              <span>(865) 591-5727</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </header>
  );
}
