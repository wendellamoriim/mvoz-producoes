import { motion } from "framer-motion";
import { CalendarDays, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos criar o seu <span className="text-gradient-gold">próximo projeto</span>.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 font-sans">
            Agende uma visita ao nosso estúdio ou peça um orçamento para o seu projeto audiovisual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contactos"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3 rounded font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
            >
              <CalendarDays size={18} />
              Agendar Visita
            </a>
            <a
              href="#orcamento"
              className="inline-flex items-center gap-2 border border-gold/40 text-foreground px-8 py-3 rounded font-semibold tracking-wider uppercase text-sm hover:bg-foreground/5 transition-colors"
            >
              <FileText size={18} />
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
