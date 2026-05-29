import { motion } from "framer-motion";
import { Mic2, GraduationCap, Tv, Film, Music, Share2, Camera } from "lucide-react";

const services = [
  {
    icon: Mic2,
    title: "Estúdio de Podcast",
    description: "Espaço profissional equipado para gravação de podcasts com excelente qualidade de áudio e vídeo.",
  },
  {
    icon: GraduationCap,
    title: "Gravação de Mentorias e Cursos",
    description: "Produção profissional de conteúdos educativos, mentorias e cursos online.",
  },
  {
    icon: Tv,
    title: "VT Publicitários",
    description: "Criação de vídeos publicitários para empresas, campanhas, marcas e produtos.",
  },
  {
    icon: Film,
    title: "Documentários",
    description: "Produção e realização de documentários com narrativa forte e qualidade cinematográfica.",
  },
  {
    icon: Music,
    title: "Clipes Musicais",
    description: "Produção criativa de videoclipes para artistas e projetos musicais.",
  },
  {
    icon: Share2,
    title: "Vídeos para Redes Sociais",
    description: "Produção de conteúdo audiovisual dinâmico e profissional para Instagram, TikTok, YouTube e outras plataformas.",
  },
  {
    icon: Camera,
    title: "Ensaios Fotográficos",
    description: "Espaço preparado para sessões fotográficas profissionais, ensaios criativos e produção de imagem.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 font-sans">O que fazemos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Os Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-secondary/50 border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-gold transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
