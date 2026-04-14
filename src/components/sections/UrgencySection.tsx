import { motion } from "framer-motion";
import CTAButton from "../CTAButton";

const UrgencySection = () => (
  <section className="py-16 md:py-20 bg-warm-dark">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-mandarine mb-4">
          ⏳ Vagas limitadas
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
          Não deixe para depois o que pode <br className="hidden md:block" />
          <span className="italic text-mandarine">transformar sua confeitaria hoje</span>
        </h2>
        <p className="font-body text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
          As inscrições podem encerrar a qualquer momento. Garanta seu acesso agora e comece a criar Balloon Cakes incríveis.
        </p>
        <CTAButton>Quero garantir minha vaga →</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default UrgencySection;
