import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const certificates = [
  {
    title: "NCC Level 4 Diploma in Computing",
    issuer: "NCC Education",
    year: "2025",
    status: "Completed",
    file: "/certificates/L4DC_PyaeSonePhyo_FinalTerm.pdf",
  },
];

export function Certificates() {
  return (
    <section
      id="certificates"
      className="scroll-mt-18 border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-400 px-5 py-20 sm:px-6 md:px-8 lg:px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-primary">
            CREDENTIALS
          </p>

          <h2 className="font-mono text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Certificates
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base font-semibold leading-relaxed text-muted-foreground md:text-lg">
            Verified academic qualifications.
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{
                delay: index * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card className="group flex h-full flex-col justify-between p-7 transition-colors hover:border-primary">
                <div>
                  <div className="mb-6 flex items-start justify-between">
                    <Award className="size-6 text-primary" />
                    <span className="font-mono text-xs font-bold text-muted-foreground">
                      {cert.year}
                    </span>
                  </div>

                  <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    {cert.status}
                  </p>

                  <h3 className="font-mono text-xl font-bold leading-tight text-foreground">
                    {cert.title}
                  </h3>

                  <p className="mt-2 font-mono text-xs font-bold text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-bold text-foreground transition-colors hover:text-primary"
                >
                  View Certificate
                  <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
