import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";
import InquiryForm from "../Forms/InquiryForm";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "Bespoke Custom Build",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

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
          interest: "Bespoke Custom Build",
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
    <section className="py-24 bg-deep-brown" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber text-xs uppercase tracking-[0.4em] font-medium mb-4 block">READY TO START YOUR LEGACY?</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-8 leading-tight">
              Begin Your <span className="italic font-normal">Custom Build</span> Journey
            </h2>
            <p className="text-cream/60 text-lg font-light leading-relaxed mb-10 max-w-lg">
              We only take on 8-10 custom builds per year to ensure absolute quality. Contact us today to check availability and start the conversation about your dream mountain retreat.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Direct Call</span>
                  <a href="tel:+18655915727" className="text-xl font-serif text-cream hover:text-amber transition-colors">(865) 591-5727</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-cream/40 mb-1">Email Inquiries</span>
                  <a href="mailto:hello@kingscabins.com" className="text-xl font-serif text-cream hover:text-amber transition-colors">hello@kingscabins.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal p-10 lg:p-14 border border-white/5 shadow-luxury"
          >
            <h3 className="text-2xl font-serif text-cream mb-8 text-center invisible h-0">Request Quote</h3>
            <InquiryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
