import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import cakeCollection from "@/assets/bolo_05.jpg";

const WhatIsBalloonCakeSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container">
      <SectionHeading
        label="O fenômeno"
        title="O que é um Balloon Cake?"
        subtitle="Balloon Cake é uma técnica de decoração que usa esferas de chocolate para criar bolos com visual sofisticado, moderno e irresistível. É a tendência que dominou a confeitaria premium."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <img
          src={cakeCollection}
          alt="Coleção de Balloon Cakes em cores pastel"
          className="rounded-2xl shadow-xl w-full object-cover"
          loading="lazy"
          width={1280}
          height={720}
        />
      </motion.div>
    </div>
  </section>
);

export default WhatIsBalloonCakeSection;
