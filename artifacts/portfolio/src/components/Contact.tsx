import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Warm radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,106,43,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="tracking-[0.2em] uppercase text-sm mb-4"
            style={{ fontFamily: "'Courier Prime', monospace", color: "#D96A2B" }}
          >
            07. What's Next?
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: "#1A1209", lineHeight: 1.2 }}
          >
            Get In Touch
          </h2>

          {/* Centered ink underline */}
          <div className="flex justify-center mb-8">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: "linear-gradient(90deg, #D96A2B, #F0944A)" }}
            />
          </div>

          <p
            className="text-lg mb-12 leading-relaxed"
            style={{ fontFamily: "'Lora', serif", color: "hsl(25, 20%, 42%)" }}
          >
            I'm currently looking for new opportunities in backend and full-stack development. Whether you have a question, a project in mind, or just want to say hi, my inbox is always open.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=aleenajomy4@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold transition-all hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            style={{
              fontFamily: "'Cinzel', serif",
              backgroundColor: "#D96A2B",
              color: "#FFF8F3",
              border: "1px solid #C05A20",
              boxShadow: "0 4px 16px rgba(217,106,43,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            <Mail size={20} />
            Say Hello
          </a>

          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-6 mt-16 text-left">
            <div
              className="p-6 rounded-xl flex items-center gap-4"
              style={{
                backgroundColor: "hsl(36, 60%, 99%)",
                border: "1px solid hsl(30, 25%, 87%)",
                boxShadow: "0 2px 10px rgba(107,75,50,0.07)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#FFF3EB" }}
              >
                <MapPin style={{ color: "#D96A2B" }} />
              </div>
              <div>
                <p
                  className="text-sm mb-1"
                  style={{ fontFamily: "'Courier Prime', monospace", color: "hsl(25, 20%, 52%)" }}
                >
                  Location
                </p>
                <p
                  className="font-semibold"
                  style={{ fontFamily: "'Lora', serif", color: "#1A1209" }}
                >
                  Kannur, Kerala, India
                </p>
              </div>
            </div>

            <div
              className="p-6 rounded-xl flex items-center gap-4"
              style={{
                backgroundColor: "hsl(36, 60%, 99%)",
                border: "1px solid hsl(30, 25%, 87%)",
                boxShadow: "0 2px 10px rgba(107,75,50,0.07)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#FFF3EB" }}
              >
                <Phone style={{ color: "#D96A2B" }} />
              </div>
              <div>
                <p
                  className="text-sm mb-1"
                  style={{ fontFamily: "'Courier Prime', monospace", color: "hsl(25, 20%, 52%)" }}
                >
                  Phone
                </p>
                <a
                  href="tel:+918547139184"
                  className="font-semibold transition-colors"
                  style={{ fontFamily: "'Lora', serif", color: "#1A1209" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D96A2B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1209")}
                >
                  +91 8547139184
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
