import { motion } from "framer-motion";
import CTAButton from "../CTAButton";
import heroCake from "@/assets/hero-cake.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-coconut">
    <div className="container grid md:grid-cols-2 gap-10 items-center py-20 md:py-0">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="order-2 md:order-1"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          Curso Online — Clara Badini
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
          Aprenda a criar <span className="italic text-primary">Balloon Cakes</span> sofisticados que encantam e vendem todos os dias
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body mb-8 max-w-lg leading-relaxed">
          Mesmo que você esteja começando do zero na confeitaria.
        </p>
        <CTAButton>Quero aprender Balloon Cake →</CTAButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="order-1 md:order-2 flex justify-center"
      >
        <img
          src={heroCake}
          alt="Balloon Cake sofisticado decorado com esferas de chocolate"
          className="rounded-2xl shadow-2xl max-h-[550px] object-cover w-full"
          width={640}
          height={480}
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
