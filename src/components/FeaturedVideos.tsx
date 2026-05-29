import { motion } from "framer-motion";
import { Play } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const videos = [
  { thumbnail: portfolio1, title: "Podcast Profissional", subtitle: "Estúdio M Voz" },
  { thumbnail: portfolio2, title: "Campanha de Marca", subtitle: "Publicidade" },
  { thumbnail: portfolio3, title: "Videoclipe Oficial", subtitle: "Clipe Musical" },
];

const FeaturedVideos = () => {
  return (
    <section className="py-24 bg-cinema-dark cinema-grain">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 font-sans">Destaques</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Produções em <span className="text-gradient-gold">Destaque</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-lg overflow-hidden aspect-video cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/60 transition-colors duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary/60 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 transition-all duration-500">
                  <Play className="text-primary ml-1" size={24} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <h3 className="font-display text-lg font-semibold text-foreground">{video.title}</h3>
                <p className="text-xs text-primary font-sans tracking-wider uppercase">{video.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
