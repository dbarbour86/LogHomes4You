import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col mb-8" id="footer-logo">
              <span className="text-2xl font-serif font-bold tracking-[0.2em] text-cream">
                KINGS CABINS
              </span>
              <span className="text-[10px] tracking-[0.5em] text-amber uppercase font-medium -mt-1 ml-0.5">
                LOG HOMES
              </span>
            </a>
            <p className="text-cream/50 text-sm leading-relaxed mb-8 max-w-xs">
              Handcrafting luxury mountain retreats and legacy log homes in the heart of the Tennessee timber country since 2004.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-cream/40 hover:text-amber hover:border-amber transition-all"><Instagram size={16} /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-cream/40 hover:text-amber hover:border-amber transition-all"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-cream/40 hover:text-amber hover:border-amber transition-all"><Twitter size={16} /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-cream/40 hover:text-amber hover:border-amber transition-all"><Youtube size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold text-cream mb-8">DISCOVER</h4>
            <ul className="space-y-4">
              <li><Link to="/floor-plans" className="text-sm text-cream/40 hover:text-amber transition-colors">Residential Models</Link></li>
              <li><Link to="/floor-plans" className="text-sm text-cream/40 hover:text-amber transition-colors">Commercial Lodges</Link></li>
              <li><Link to="/contact" className="text-sm text-cream/40 hover:text-amber transition-colors">Interior Design</Link></li>
              <li><Link to="/contact" className="text-sm text-cream/40 hover:text-amber transition-colors">Available Properties</Link></li>
              <li><Link to="/contact" className="text-sm text-cream/40 hover:text-amber transition-colors">Financing Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold text-cream mb-8">RESOURCES</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-cream/40 hover:text-amber transition-colors">Our Story</Link></li>
              <li><Link to="/process" className="text-sm text-cream/40 hover:text-amber transition-colors">The Process</Link></li>
              <li><Link to="/contact" className="text-sm text-cream/40 hover:text-amber transition-colors">Maintenance Guide</Link></li>
              <li><Link to="/#testimonials" className="text-sm text-cream/40 hover:text-amber transition-colors">Client Testimonials</Link></li>
              <li><Link to="/contact" className="text-sm text-cream/40 hover:text-amber transition-colors">Builders Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold text-cream mb-8">NEWSLETTER</h4>
            <p className="text-sm text-cream/40 mb-6 leading-relaxed">
              Join our list to receive exclusive looks at new floor plans and design tips.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-cream outline-none focus:border-amber/50 transition-all rounded-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest font-bold text-amber hover:text-cream transition-colors">
                JOIN
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-cream/30">
            &copy; {currentYear} KINGS CABINS LOG HOMES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-cream/30 hover:text-amber transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-cream/30 hover:text-amber transition-colors">Terms of Service</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-cream/30 hover:text-amber transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
