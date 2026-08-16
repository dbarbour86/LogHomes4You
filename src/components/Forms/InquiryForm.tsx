import React, { useState, useEffect } from "react";
import Button from "../ui/Button";

interface InquiryFormProps {
  interestedModel?: string;
}

export default function InquiryForm({ interestedModel }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: interestedModel || "Bespoke Custom Build",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // Keep form data synced if interestedModel changes
  useEffect(() => {
    if (interestedModel) {
      setFormData(prev => ({ ...prev, interest: interestedModel }));
    }
  }, [interestedModel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        setMessage(data.message || "Thank you! Your request has been sent. We will be in touch shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          interest: interestedModel || "Bespoke Custom Build",
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
    <form className="space-y-6" id="quote-form" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm"
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm"
            placeholder="Wick"
          />
        </div>
      </div>

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
        <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Interest</label>
        {interestedModel ? (
          <input
            type="text"
            name="interest"
            readOnly
            value={`Inquiry for Model: ${interestedModel}`}
            className="w-full bg-charcoal/50 border border-white/10 px-4 py-3 text-amber font-serif focus:outline-none cursor-not-allowed font-light text-sm"
          />
        ) : (
          <select 
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm appearance-none"
          >
            <option className="bg-charcoal text-cream">Bespoke Custom Build</option>
            <option className="bg-charcoal text-cream">Existing Model Customization</option>
            <option className="bg-charcoal text-cream">Phase 1 Consulting</option>
            <option className="bg-charcoal text-cream">Land + Cabin Package</option>
          </select>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-cream/40 px-1">Your Vision</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:border-amber/50 outline-none transition-all font-light text-sm min-h-[120px]"
          placeholder="Tell us about your dream cabin..."
        ></textarea>
      </div>

      <Button 
        variant="primary" 
        className="w-full py-4 text-center justify-center disabled:opacity-50"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "SENDING..." : "SEND QUOTE REQUEST"}
      </Button>

      {status === "success" && (
        <p className="text-green-400 text-sm italic font-light text-center">{message}</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm italic font-light text-center">{message}</p>
      )}
    </form>
  );
}
