import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const objections = [
  {
    q: '"Nunca fiz bolo na vida"',
    a: "Perfeito! O curso foi feito para iniciantes. Você vai aprender cada etapa do zero, com clareza e paciência.",
  },
  {
    q: '"Não tenho talento para confeitaria"',
    a: "Talento se desenvolve com técnica. O método da Clara é passo a passo — é seguir e fazer.",
  },
  {
    q: '"Não sei se tenho dinheiro para investir"',
    a: "Pense no retorno: um único Balloon Cake vendido já pode pagar o investimento do curso inteiro.",
  },
  {
    q: '"Tenho medo de não conseguir"',
    a: "Você tem garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro em até 7 dias.",
  },
];

const ObjectionsSection = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container">
      <SectionHeading
        label="Ainda tem dúvidas?"
        title="Talvez você esteja pensando..."
      />
      <div className="max-w-2xl mx-auto space-y-6">
        {objections.map((obj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background rounded-xl p-6 shadow-sm"
          >
            <p className="font-display text-lg font-semibold text-foreground mb-2">{obj.q}</p>
            <p className="font-body text-muted-foreground text-base leading-relaxed">{obj.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectionsSection;
