import { motion } from "framer-motion";
import CTAButton from "../CTAButton";
import { Shield, Clock, Award } from "lucide-react";

const OfferSection = () => (
  <section className="py-20 md:py-28 bg-pistachio-light">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-background rounded-2xl shadow-xl p-8 md:p-12 text-center border border-border"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Oferta especial
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Curso Balloon Cake
        </h2>
        <p className="font-body text-muted-foreground mb-6">Acesso completo + bônus exclusivos</p>

        <div className="mb-6">
          <p className="font-body text-sm text-muted-foreground line-through">De R$ 497,00</p>
          <p className="font-display text-5xl md:text-6xl font-bold text-primary">
            R$ 297<span className="text-2xl">,00</span>
          </p>
          <p className="font-body text-base text-muted-foreground mt-1">
            ou 12x de R$ 29,06
          </p>
        </div>

        <CTAButton className="w-full md:w-auto mb-8">Quero garantir minha vaga →</CTAButton>

        <div className="grid sm:grid-cols-3 gap-4 text-left">
          {[
            { icon: Shield, label: "Garantia de 7 dias", desc: "100% do dinheiro de volta" },
            { icon: Clock, label: "Acesso vitalício", desc: "Assista quando quiser" },
            { icon: Award, label: "Certificado", desc: "Ao concluir o curso" },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{item.label}</p>
                <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
