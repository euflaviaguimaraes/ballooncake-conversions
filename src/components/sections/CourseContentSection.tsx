import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import CTAButton from "../CTAButton";
import { BookOpen, Palette, Layers, TrendingUp } from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    title: "Fundamentos",
    desc: "Ingredientes, utensílios e bases essenciais para começar com segurança",
  },
  {
    icon: Palette,
    title: "Técnica das Esferas",
    desc: "O passo a passo completo para criar esferas de chocolate perfeitas",
  },
  {
    icon: Layers,
    title: "Montagem & Acabamento",
    desc: "Como montar, posicionar e finalizar o bolo com visual profissional",
  },
  {
    icon: TrendingUp,
    title: "Dicas de Venda",
    desc: "Como precificar, fotografar e vender seus Balloon Cakes com lucro",
  },
];

const CourseContentSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <SectionHeading
        label="Conteúdo"
        title="O que você vai aprender"
        subtitle="Um curso completo, do zero ao bolo pronto — com tudo que você precisa para vender."
      />
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
          >
            <mod.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{mod.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{mod.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <CTAButton>Quero aprender agora →</CTAButton>
      </div>
    </div>
  </section>
);

export default CourseContentSection;
