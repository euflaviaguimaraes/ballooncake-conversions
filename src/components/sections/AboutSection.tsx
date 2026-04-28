import { motion } from "framer-motion";
import claraPortrait from "@/assets/clara_01.jpg";

const AboutSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={claraPortrait}
          alt="Clara Badini, confeiteira profissional"
          className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover"
          loading="lazy"
          width={400}
          height={500}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Quem é a Clara?
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
          Clara Badini — confeiteira, professora e apaixonada por <span className="italic text-primary">Balloon Cakes</span>
        </h2>
        <div className="space-y-4 font-body text-muted-foreground text-base md:text-lg leading-relaxed">
          <p>
            Com anos de experiência em confeitaria artística, Clara desenvolveu um método próprio para criar Balloon Cakes que são verdadeiras obras de arte — e que vendem muito.
          </p>
          <p>
            Já ajudou centenas de alunas a transformarem suas confeitarias, cobrando mais e conquistando clientes apaixonados pelos seus bolos.
          </p>
          <p className="font-medium text-foreground">
            Agora ela quer te ensinar o passo a passo completo.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
