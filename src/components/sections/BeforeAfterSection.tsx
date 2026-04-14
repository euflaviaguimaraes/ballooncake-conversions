import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import beforeAfter from "@/assets/before-after.jpg";

const BeforeAfterSection = () => (
  <section className="py-20 md:py-28 bg-dusty-pink-light">
    <div className="container">
      <SectionHeading
        label="Prova visual"
        title="O poder da técnica certa"
        subtitle="Veja a diferença que o Balloon Cake faz na apresentação de um bolo"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <img
          src={beforeAfter}
          alt="Antes e depois — bolo simples vs Balloon Cake"
          className="rounded-2xl shadow-xl w-full object-cover"
          loading="lazy"
          width={1280}
          height={640}
        />
        <div className="flex justify-between mt-4 font-body text-sm font-semibold text-muted-foreground uppercase tracking-widest px-4">
          <span>Antes</span>
          <span>Depois</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BeforeAfterSection;
