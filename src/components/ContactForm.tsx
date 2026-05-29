import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  "Estúdio de Podcast",
  "Gravação de Mentorias e Cursos",
  "VT Publicitários",
  "Documentários",
  "Clipes Musicais",
  "Vídeos para Redes Sociais",
  "Ensaios Fotográficos",
  "Outro",
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Por favor, preencha os campos obrigatórios.");
      return;
    }
    toast.success("Pedido enviado com sucesso! Entraremos em contacto brevemente.");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="orcamento" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 font-sans">Orçamento</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Solicitar <span className="text-gradient-gold">Orçamento</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {[
            { name: "name", label: "Nome *", type: "text", placeholder: "O seu nome" },
            { name: "email", label: "Email *", type: "email", placeholder: "email@exemplo.com" },
            { name: "phone", label: "Telefone", type: "tel", placeholder: "+351 000 000 000" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm text-foreground font-sans mb-1.5">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.name as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                maxLength={255}
                className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm font-sans focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm text-foreground font-sans mb-1.5">Serviço Pretendido</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm font-sans focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            >
              <option value="">Selecione um serviço</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-foreground font-sans mb-1.5">Mensagem</label>
            <textarea
              placeholder="Conte-nos sobre o seu projeto..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm font-sans focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3 rounded font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            Solicitar Orçamento
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
