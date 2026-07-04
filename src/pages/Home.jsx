import { ArrowDown, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { TypewriterText } from "../components/common/TypeWriterText";

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

export function Home() {
  function openGitHub() {
    window.open("https://github.com/X-borg123", "_blank", "noopener,noreferrer");
  }

  function scrollToAbout() {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function scrollToProjects() {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-18 border-b border-border"
    >
      <div className="relative min-h-[calc(100vh-72px)]">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-400 items-center gap-10 px-5 py-12 sm:px-6 md:px-8 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-5 lg:py-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-w-0 lg:-translate-y-3"
          >
            <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-primary sm:text-xs md:mb-7 md:tracking-[0.28em]">
              HEY, I AM PYAE SONE PHYO
            </p>

            <TypewriterText
              lines={[
                { text: "Full-Stack Developer &" },
                { text: "AI Automation Engineer", highlight: true },
              ]}
              speed={0.09}
              className="max-w-full font-mono text-[3.15rem] font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl"
              highlightClassName="font-semibold italic text-muted-foreground"
            />

            <p className="mt-7 max-w-3xl font-sans text-base font-semibold leading-relaxed text-muted-foreground md:mt-9 md:text-lg">
              I build responsive web applications using React, Node.js, and WordPress. I also write Python scripts and automate workflows with n8n.
            </p>

            <div className="mt-8 grid gap-4 sm:flex sm:flex-wrap md:mt-10">
              <Button
                onClick={scrollToProjects}
                className="h-12 w-full px-6 text-xs tracking-widest sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.12em]"
              >
                View Projects
                <TerminalSquare className="size-4" />
              </Button>

              <Button
                variant="outline"
                className="h-12 w-full px-6 text-xs tracking-[0.08em] sm:w-auto sm:px-8 sm:text-sm"
                onClick={openGitHub}
              >
                GitHub
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex min-w-0 justify-center lg:justify-end lg:-translate-y-3"
          >
            <div className="relative w-full max-w-90 sm:max-w-107.5 lg:w-115 xl:w-130">
              <div className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-primary/60" />
              <div className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-primary/60" />

              <div className="border border-primary/50 bg-card p-2 shadow-[0_0_80px_color-mix(in_oklab,var(--primary)_16%,transparent)]">
                <img
                  src="/profile2.jpg"
                  alt="Pyae Sone Phyo portrait"
                  className="aspect-3/3 w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={scrollToAbout}
          className="absolute bottom-6 left-5 hidden font-mono text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-primary lg:block"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>Scroll</span>
          <ArrowDown className="mt-2 size-5" />
        </motion.button>
      </div>
    </section>
  );
}
