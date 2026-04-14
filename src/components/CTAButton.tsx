import { motion } from "framer-motion";

const HOTMART_URL = "#"; // Replace with actual Hotmart checkout URL

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const CTAButton = ({ children, variant = "primary", className = "" }: CTAButtonProps) => {
  const base = "inline-flex items-center justify-center font-body font-semibold tracking-wide rounded-lg transition-all duration-300 text-base md:text-lg px-8 py-4";
  const styles = variant === "primary"
    ? "bg-primary text-primary-foreground hover:brightness-110 shadow-lg hover:shadow-xl"
    : "bg-secondary text-secondary-foreground hover:brightness-95 border border-border";

  return (
    <motion.a
      href={HOTMART_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
};

export default CTAButton;
