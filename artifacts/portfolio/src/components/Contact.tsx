import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono tracking-widest uppercase text-sm mb-4">07. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            I'm currently looking for new opportunities in backend and full-stack development. Whether you have a question, a project in mind, or just want to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:aleenajomy4@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]"
          >
            <Mail size={20} />
            Say Hello
          </a>

          <div className="grid sm:grid-cols-2 gap-6 mt-16 text-left">
            <div className="bg-card border border-border p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono mb-1">Location</p>
                <p className="font-medium">Kannur, Kerala, India</p>
              </div>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono mb-1">Phone</p>
                <a href="tel:+918547139184" className="font-medium hover:text-primary transition-colors">+91 8547139184</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
