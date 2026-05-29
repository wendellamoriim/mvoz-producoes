import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const ContactsSection = () => {
  return (
    <section id="contactos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 font-sans">Contactos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Fale <span className="text-gradient-gold">Connosco</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: MapPin,
                title: "Morada",
                lines: ["Av. Movimento das Forças Armadas 8", "Amadora, Portugal"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["mvozproducoes@hotmail.com"],
                href: "mailto:mvozproducoes@hotmail.com",
              },
              {
                icon: Phone,
                title: "Telefone",
                lines: ["+351 912 590 378"],
                href: "tel:+351912590378",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a key={line} href={item.href} className="block text-sm text-muted-foreground font-sans hover:text-primary transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-muted-foreground font-sans">{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              <a
                href={`https://wa.me/351912590378?text=${encodeURIComponent("Olá, gostaria de mais informações sobre os vossos serviços.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142,70%,35%)] text-foreground px-5 py-2.5 rounded text-sm font-sans font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="tel:+351912590378"
                className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded text-sm font-sans font-semibold hover:bg-secondary transition-colors"
              >
                <Phone size={16} />
                Ligar
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden border border-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4!2d-9.23!3d38.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ1JzAwLjAiTiA5wrAxMyc0OC4wIlc!5e0!3m2!1spt-PT!2spt!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização M Voz Produções"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
