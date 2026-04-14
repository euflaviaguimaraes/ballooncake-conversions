import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { X } from "lucide-react";

const pains = [
  "Seus bolos não se destacam no meio de tantas opções",
  "Você cobra barato demais e não consegue lucrar de verdade",
  "Falta aquele acabamento profissional que impressiona",
  "Vê outras confeiteiras vendendo muito mais que você",
];

const PainSection = () => (
  <section className="py-20 md:py-28 bg-dusty-pink-light">
    <div className="container">
      <SectionHeading
        label="Você se identifica?"
        title="Se você sente que seus bolos poderiam ser muito mais..."
        subtitle="Talvez você esteja a uma técnica de distância de transformar a sua confeitaria."
      />
      <div className="max-w-2xl mx-auto space-y-5">
        {pains.map((pain, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 bg-background rounded-xl px-6 py-5 shadow-sm"
          >
            <X className="w-5 h-5 text-dusty-pink mt-0.5 shrink-0" />
            <p className="font-body text-foreground text-base md:text-lg">{pain}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
