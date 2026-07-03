import { Bot, Code2, Cpu, Download, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

const focusItems = [
  {
    icon: Cpu,
    label: "React",
  },
  {
    icon: Code2,
    label: "Node.js",
  },
  {
    icon: Lightbulb,
    label: "WordPress",
  },
  {
    icon: Bot,
    label: "n8n",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-18 border-b border-border bg-background"
    >
      <div className="mx-auto max-w-400 px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
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
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.28em] text-primary">
              ABOUT ME
            </p>

            <h2 className="max-w-4xl font-mono text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              The Human
              <br />
              Behind <span className="text-primary">The Code</span>
            </h2>

            <p className="mt-8 max-w-3xl font-sans text-base font-semibold leading-relaxed text-muted-foreground md:text-lg">
              I am Pyae Sone Phyo, a Web Developer based in Myanmar. I build responsive front-end interfaces with React, develop backend services with Node.js, and create websites using WordPress. I also write Python scripts for automation and build workflows with n8n.
            </p>

            <p className="mt-5 max-w-3xl font-sans text-base font-semibold leading-relaxed text-muted-foreground md:text-lg">
              Currently pursuing an NCC Level 5 Diploma in Computing with Data Science, expanding into AI and data-driven development.
            </p>

            <div className="mt-8">
              <motion.a
                href="/Pyae-Sone-Phyo-CV.pdf"
                download="Pyae-Sone-Phyo-CV.pdf"
                className={cn(
                  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2",
                  "whitespace-nowrap select-none border font-mono font-bold",
                  "h-12 px-6 text-lg",
                  "border-primary bg-transparent text-primary",
                  "[&_svg]:pointer-events-none [&_svg]:shrink-0",
                )}
                initial={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "var(--primary)", borderColor: "var(--primary)" }}
                animate={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "var(--primary)", borderColor: "var(--primary)" }}
                whileHover={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)", borderColor: "var(--primary)" }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <Download className="size-4" />
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              delay: 0.15,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-150">
              <div className="bg-card shadow-[0_0_80px_color-mix(in_oklab,var(--primary)_14%,transparent)]">
                <img
                  src="/profile.jpg"
                  alt="Pyae Sone Phyo"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Focus icons */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card className="flex min-h-65 items-center justify-center p-5 transition-colors hover:border-primary">
                  <div className="text-center">
                    <Icon className="mx-auto mb-4 size-8 text-primary" />

                    <p className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
