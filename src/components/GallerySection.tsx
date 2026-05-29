import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImage from "@/assets/about-image.jpg";

const images = [
  { src: portfolio1, alt: "Estúdio Podcast", span: "col-span-1 row-span-1" },
  { src: heroBg, alt: "Estúdio Principal", span: "col-span-2 row-span-1" },
  { src: portfolio3, alt: "Set Musical", span: "col-span-1 row-span-1" },
  { src: portfolio4, alt: "Ensaio Fotográfico", span: "col-span-1 row-span-2" },
  { src: portfolio2, alt: "Produção Comercial", span: "col-span-1 row-span-1" },
  { src: aboutImage, alt: "Equipa em Ação", span: "col-span-1 row-span-1" },
  { src: portfolio5, alt: "Documentário", span: "col-span-1 row-span-1" },
  { src: portfolio6, alt: "Conteúdo Digital", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 font-sans">Galeria</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Os Nossos <span className="text-gradient-gold">Trabalhos</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-lg mx-auto">
            Uma seleção visual de projetos, produções e sessões fotográficas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${img.span} group relative rounded-lg overflow-hidden cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-500 flex items-end">
                <p className="p-4 font-sans text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
