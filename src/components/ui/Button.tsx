import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 font-medium tracking-wide transition-all duration-300 group overflow-hidden";
  
  const variants = {
    primary: "bg-amber text-charcoal hover:bg-gold-muted",
    secondary: "bg-espresso text-cream hover:bg-stone-800",
    outline: "border border-amber/30 text-cream hover:border-amber hover:bg-amber/5",
    ghost: "text-cream hover:bg-white/5",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      id={`btn-${typeof children === 'string' ? children.toLowerCase().replace(/\s+/g, "-") : 'action'}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        />
      )}
    </motion.button>
  );
}
