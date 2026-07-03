import {
  Bot,
  Code2,
  Database,
  GitBranch,
  Globe,
  Server,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const coreSkills = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Building responsive interfaces with React, reusable components, hooks, and modern UI patterns.",
    tags: ["React", "Tailwind", "HTML/CSS", "JavaScript"],
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Creating backend services with Node.js, Express, and REST APIs.",
    tags: ["Node.js", "Express", "REST API", "PHP/Laravel"],
  },
  {
    icon: Globe,
    title: "WordPress",
    description:
      "Building and customizing WordPress sites with themes and plugins.",
    tags: ["WordPress", "Themes", "Plugins", "WooCommerce"],
  },
  {
    icon: Bot,
    title: "Automation",
    description:
      "Writing Python scripts for automation tasks and building workflows with n8n.",
    tags: ["Python", "n8n", "Scripting", "Workflows"],
  },
];

const tools = [
  { icon: GitBranch, name: "Git & GitHub" },
  { icon: Database, name: "MongoDB / SQL" },
  { icon: Terminal, name: "CLI / Bash" },
  { icon: Server, name: "Docker" },
];

export function Skills() {
  return (
    <section
      id="skills"
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
            TECHNICAL STACK
          </p>

          <h2 className="font-mono text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Skills
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base font-semibold leading-relaxed text-muted-foreground md:text-lg">
            Technologies and tools I work with.
          </p>
        </motion.div>

        {/* Core skills grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
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
                <Card className="group h-full p-6 transition-colors hover:border-primary">
                  <CardHeader>
                    <Icon className="mb-6 size-5 text-primary" />
                    <CardTitle>{skill.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="mt-4 text-sm font-semibold leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border bg-background px-2 py-1 font-mono text-[10px] font-bold text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tools row */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.name}
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
                <Card className="flex min-h-28 items-center gap-4 p-5 transition-colors hover:border-primary">
                  <Icon className="size-5 text-primary" />
                  <p className="font-mono text-sm font-bold text-foreground">
                    {tool.name}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
