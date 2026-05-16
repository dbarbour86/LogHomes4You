import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Story", href: "/about" },
    { name: "Floor Plans", href: "/floor-plans" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-charcoal/95 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-8"
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
          <a href="tel:+18005550123" className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-amber hover:text-cream transition-colors">
            <Phone size={14} />
            <span>(800) 555-0123</span>
          </a>
          <Link to="/contact">
            <Button variant="outline" className="px-6 py-2.5 text-[10px]">
                REQUEST QUOTE
            </Button>
          </Link>
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
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="mt-4">
                REQUEST QUOTE
                </Button>
            </Link>
            <a href="tel:+18005550123" className="text-amber flex items-center gap-2 mt-4">
              <Phone size={20} />
              <span>(800) 555-0123</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
