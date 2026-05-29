import { motion } from "framer-motion";
import { Award, Settings, Palette, Clapperboard, Building, Layers } from "lucide-react";

const items = [
  { icon: Award, title: "Produção Profissional", description: "Qualidade técnica e artística em cada projeto." },
  { icon: Settings, title: "Equipamento de Alta Qualidade", description: "Câmaras, iluminação e áudio de referência." },
  { icon: Palette, title: "Criatividade e Identidade Visual", description: "Conteúdos únicos com identidade própria." },
  { icon: Clapperboard, title: "Experiência em Audiovisual", description: "Anos de experiência em produção." },
  { icon: Building, title: "Espaço para Gravações", description: "Estúdio preparado para diversas produções." },
  { icon: Layers, title: "Soluções Completas", description: "Vídeo, fotografia e pós-produção integrados." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 font-sans">Diferenciais</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Porquê Escolher a <span className="text-gradient-gold">M Voz</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
