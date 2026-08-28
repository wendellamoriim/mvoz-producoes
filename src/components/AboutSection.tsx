import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 font-sans">Quem Somos</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Produção Audiovisual <span className="text-gradient-gold">de Excelência</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
              A M Voz Produções é uma produtora audiovisual localizada em São Marcos, Agualva-Cacém, Portugal, dedicada à criação de conteúdos visuais com qualidade profissional. Trabalhamos com empresas, artistas e criadores que procuram elevar o nível da sua comunicação através de vídeos, fotografia e produção audiovisual criativa.
            </p>
            <p className="text-muted-foreground leading-relaxed font-sans">
              Combinamos técnica, criatividade e visão estratégica para transformar ideias em projetos visuais impactantes.
            </p>
            <div className="mt-8 flex gap-8">
              {[
                { num: "100+", label: "Projetos" },
                { num: "50+", label: "Clientes" },
                { num: "5+", label: "Anos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-bold text-gradient-gold">{stat.num}</p>
                  <p className="text-sm text-muted-foreground font-sans">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Equipa M Voz Produções"
              className="rounded-lg w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 rounded-lg border border-primary/20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
