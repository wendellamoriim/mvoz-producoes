import { motion } from "framer-motion";
import { CalendarDays, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Estúdio de produção audiovisual"
          className="w-full h-full object-cover"
        />
        <div className="cinema-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-gradient-gold">M Voz</span>{" "}
            <span className="text-foreground">Produções</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-lg md:text-xl text-foreground/80 italic max-w-2xl mx-auto mb-4"
        >
          Produção audiovisual profissional para marcas, artistas e criadores.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 font-sans"
        >
          Transformamos ideias em conteúdos visuais de alto impacto, com qualidade, criatividade e identidade profissional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
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
            Pedir Orçamento
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
