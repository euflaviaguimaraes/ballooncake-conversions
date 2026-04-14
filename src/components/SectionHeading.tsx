interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

const SectionHeading = ({ label, title, subtitle, align = "center" }: SectionHeadingProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl mb-12 ${alignment}`}>
      {label && (
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground font-body leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
