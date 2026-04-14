import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    text: "Nunca pensei que eu conseguiria fazer algo tão bonito! Meus clientes ficam encantados e eu já aumento meus preços com confiança.",
  },
  {
    name: "Fernanda L.",
    text: "A Clara explica de um jeito tão simples que até eu, que nunca tinha feito bolo, consegui criar um Balloon Cake lindo no primeiro final de semana.",
  },
  {
    name: "Juliana R.",
    text: "Investi no curso e em 2 meses já recuperei o valor. Hoje meus Balloon Cakes são os mais pedidos da minha confeitaria!",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <SectionHeading
        label="Depoimentos"
        title="O que dizem as alunas"
      />
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-mandarine text-mandarine" />
              ))}
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 italic">
              "{t.text}"
            </p>
            <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
