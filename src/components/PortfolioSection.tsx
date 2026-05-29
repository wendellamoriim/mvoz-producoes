import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const categories = [
  "Todos",
  "Podcasts",
  "Publicidade",
  "Documentários",
  "Clipes Musicais",
  "Redes Sociais",
  "Ensaios Fotográficos",
];

const portfolioItems = [
  { image: portfolio1, title: "Podcast Pro Studio", category: "Podcasts", isVideo: true },
  { image: portfolio2, title: "Campanha Publicitária", category: "Publicidade", isVideo: true },
  { image: portfolio3, title: "Videoclipe Musical", category: "Clipes Musicais", isVideo: true },
  { image: portfolio4, title: "Ensaio Editorial", category: "Ensaios Fotográficos", isVideo: false },
  { image: portfolio5, title: "Documentário Natureza", category: "Documentários", isVideo: true },
  { image: portfolio6, title: "Conteúdo Digital", category: "Redes Sociais", isVideo: true },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 font-sans">Portfólio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Alguns Exemplos de <span className="text-gradient-gold">Produções</span>
          </h2>
          <p className="text-muted-foreground font-sans">Alguns exemplos de produções audiovisuais.</p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-gold text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-lg overflow-hidden aspect-video cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  {item.isVideo && (
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center mb-3">
                      <Play className="text-primary-foreground ml-1" size={22} />
                    </div>
                  )}
                  <p className="font-display text-lg font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-primary font-sans tracking-wider uppercase">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
