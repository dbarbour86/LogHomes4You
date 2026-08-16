import React, { useState } from "react";
import Button from "../ui/Button";

export default function InvestorInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "Investment",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // We send this with "firstName" mapped to the full name 
    // and identify it clearly as an investor inquiry.
    const submissionData = {
      firstName: "Investor / Strategic Partnership Inquiry",
      lastName: `From: ${formData.name} (${formData.company})`,
      email: formData.email,
      interest: `Investor Interest: ${formData.interest} | Phone: ${formData.phone}`,
      message: formData.message
    };
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        setMessage("Thank you. We have received your inquiry and will be in touch shortly.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          interest: "Investment",
          message: ""
        });
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setMessage("Failed to connect to the server.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="space-y-6" id="investor-form" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Company / Organization</label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm"
            placeholder="Organization Name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Type of Interest</label>
        <div className="relative">
          <select 
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm appearance-none cursor-pointer"
          >
            <option className="bg-charcoal text-cream" value="Investment">Investment</option>
            <option className="bg-charcoal text-cream" value="Strategic Partnership">Strategic Partnership</option>
            <option className="bg-charcoal text-cream" value="Builder / Dealer Partnership">Builder / Dealer Partnership</option>
            <option className="bg-charcoal text-cream" value="Development Opportunity">Development Opportunity</option>
            <option className="bg-charcoal text-cream" value="Other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-cream/50">
            ▼
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Tell Us About Your Interest</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm min-h-[160px]"
          placeholder="Tell us a little about yourself and the type of opportunity you'd like to discuss..."
        ></textarea>
      </div>

      <Button 
        variant="primary" 
        className="w-full py-4 text-center justify-center disabled:opacity-50"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "SENDING..." : "START THE CONVERSATION"}
      </Button>

      {status === "success" && (
        <p className="text-green-400 text-sm italic font-light text-center">{message}</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm italic font-light text-center">{message}</p>
      )}

      {/* Subtle Disclaimer */}
      <div className="pt-4 mt-8 border-t border-white/5">
        <p className="text-[10px] leading-relaxed text-cream/30 text-justify">
          Information on this page is provided for general informational purposes and is intended to invite business and strategic partnership discussions. Nothing on this page constitutes an offer to sell, or a solicitation of an offer to buy, any security or investment product. Any potential investment opportunity would be subject to separate documentation, due diligence and applicable legal requirements.
        </p>
      </div>
    </form>
  );
}
