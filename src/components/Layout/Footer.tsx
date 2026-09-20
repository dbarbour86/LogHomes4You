import { Link } from "react-router-dom";
import { BookOpen, Layers, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand-muted border-t border-sand-border pt-16 pb-12 text-timber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group inline-flex" id="footer-logo">
              <div className="w-8 h-8 rounded-md bg-forest flex items-center justify-center text-white">
                <svg
                  width="18"
                  height="18"
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
              <span className="text-xl font-serif font-bold text-timber tracking-tight group-hover:text-forest transition-colors">
                Log Homes 4 You
              </span>
            </Link>
            <p className="text-sm text-timber-muted leading-relaxed mb-4">
              Straightforward guides, real floor plans, and practical tools to help you compare options and plan your log home with confidence.
            </p>
            <div className="flex items-center gap-2 text-xs text-timber-subtle">
              <CheckCircle2 size={14} className="text-forest" />
              <span>Log Home Research & Planning</span>
            </div>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-forest mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/log-home-plans" className="text-timber-muted hover:text-forest transition-colors">
                  Log Home Floor Plans
                </Link>
              </li>
              <li>
                <Link to="/find-a-log-home" className="text-timber-muted hover:text-forest transition-colors">
                  Find Your Log Home Tool
                </Link>
              </li>
              <li>
                <Link to="/small-log-homes" className="text-timber-muted hover:text-forest transition-colors">
                  Small Log Homes Hub
                </Link>
              </li>
              <li>
                <Link to="/log-home-plans?hasLoft=true" className="text-timber-muted hover:text-forest transition-colors">
                  Floor Plans with Lofts
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-forest mb-5">
              Learn
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/guides" className="text-timber-muted hover:text-forest transition-colors">
                  All Log Home Guides
                </Link>
              </li>
              <li>
                <Link to="/guides/how-much-does-a-log-home-cost" className="text-timber-muted hover:text-forest transition-colors">
                  How Much Does a Log Home Cost?
                </Link>
              </li>
              <li>
                <Link to="/guides/log-home-kits-explained" className="text-timber-muted hover:text-forest transition-colors">
                  Log Home Kits Explained
                </Link>
              </li>
              <li>
                <Link to="/guides/log-home-kit-vs-custom-build" className="text-timber-muted hover:text-forest transition-colors">
                  Kit vs. Custom Build
                </Link>
              </li>
              <li>
                <Link to="/guides/choosing-log-home-size" className="text-timber-muted hover:text-forest transition-colors">
                  What Size Do You Actually Need?
                </Link>
              </li>
              <li>
                <Link to="/guides/building-a-log-home" className="text-timber-muted hover:text-forest transition-colors">
                  Building a Log Home: Beginner's Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Providers Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-forest mb-5">
              About & Providers
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-timber-muted hover:text-forest transition-colors">
                  About LogHomes4You
                </Link>
              </li>
              <li>
                <Link to="/builders/kings-cabins" className="text-timber-muted hover:text-forest transition-colors">
                  King's Cabins Overview
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-md bg-white border border-sand-border text-xs text-timber-subtle leading-relaxed">
              <span className="font-semibold text-timber block mb-1">About Our Floor Plans:</span>
              LogHomes4You organizes log home plans and specifications to make it easier to compare layouts, sizes, and features. Full details are available from the builder or manufacturer.
            </div>
          </div>
        </div>

        {/* Disclaimer Statement Required by Section 17 */}
        <div className="border-t border-sand-border pt-8 pb-6">
          <p className="text-xs text-timber-subtle leading-relaxed max-w-4xl">
            <strong>Plan Information:</strong> LogHomes4You helps you research and compare log home designs. Specifications, availability, pricing, and package details may change, so confirm current information directly with the builder or manufacturer. Floor plans and model designs remain the property of their respective creators.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-sand-border/70 pt-6 gap-4 text-xs text-timber-subtle">
          <p>© {currentYear} LogHomes4You. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-forest transition-colors">About & Methodology</Link>
            <Link to="/builders/kings-cabins" className="hover:text-forest transition-colors">Featured Builder</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
