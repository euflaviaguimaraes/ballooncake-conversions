import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import CTAButton from "../CTAButton";
import { Check } from "lucide-react";

const transformations = [
  "Bolos com acabamento profissional que impressionam à primeira vista",
  "Estética sofisticada que se diferencia de tudo no mercado",
  "Clientes dispostos a pagar mais pelo seu trabalho",
  "Uma nova fonte de renda real com confeitaria premium",
];

const TransformationSection = () => (
  <section className="py-20 md:py-28 bg-pistachio-light">
    <div className="container">
      <SectionHeading
        label="Transformação"
        title="Imagine seus bolos assim"
        subtitle="Com a técnica certa, você vai conquistar tudo isso:"
      />
      <div className="max-w-2xl mx-auto space-y-5 mb-12">
        {transformations.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 bg-background rounded-xl px-6 py-5 shadow-sm"
          >
            <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="font-body text-foreground text-base md:text-lg">{item}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <CTAButton>Quero essa transformação →</CTAButton>
      </div>
    </div>
  </section>
);

export default TransformationSection;
