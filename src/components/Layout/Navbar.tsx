import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Floor Plans", href: "/log-home-plans" },
    { name: "Find Your Home", href: "/find-a-log-home" },
    { name: "Guides", href: "/guides" },
    { name: "Small Log Homes", href: "/small-log-homes" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-sand-border transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
        id="main-nav"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group" id="site-logo">
          <div className="w-10 h-10 rounded-md bg-forest flex items-center justify-center text-white shadow-xs group-hover:bg-forest-dark transition-colors">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
              aria-hidden="true"
            >
              <path d="M3 10.5L12 3L21 10.5V20.5H3V10.5Z" />
              <path d="M3 14H12" />
              <path d="M12 10.5V20.5" />
              <path d="M16 16.5H21" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-serif font-bold text-timber tracking-tight leading-none group-hover:text-forest transition-colors">
              Log Homes 4 You
            </span>
            <span className="text-[11px] uppercase tracking-widest text-timber-subtle font-medium mt-1">
              Find The Right Plan
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors py-1 ${
                  isActive
                    ? "text-forest font-semibold border-b-2 border-forest"
                    : "text-timber-muted hover:text-forest"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Primary Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/find-a-log-home"
            className="inline-flex items-center gap-2 bg-cedar hover:bg-cedar-dark text-white text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-md shadow-xs transition-colors"
          >
            <span>Find Your Log Home</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-timber p-2 rounded-md hover:bg-sand-muted focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-sand-border px-6 py-6 space-y-4 shadow-card">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${
                  location.pathname === link.href
                    ? "bg-sand text-forest font-semibold"
                    : "text-timber hover:bg-sand-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-sand-border">
            <Link
              to="/find-a-log-home"
              className="w-full flex items-center justify-center gap-2 bg-cedar hover:bg-cedar-dark text-white text-sm font-semibold py-3 px-4 rounded-md shadow-xs transition-colors"
            >
              <span>Find Your Log Home</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
