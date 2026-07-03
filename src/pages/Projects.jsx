import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  Code2,
  Database,
  Film,
  Filter,
  MessageSquare,
  Server,
  Workflow,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const filters = ["All", "Full Stack", "Automation", "Python", "Frontend"];

const projects = [
  {
    title: "Tele Mini App",
    category: "Full Stack",
    year: "2026",
    type: "Full Stack",
    icon: Film,
    image: "/tele-mini-app.png",
    link: "https://tele-mm-sub.vercel.app",
    description:
      "A Telegram Mini App for browsing and streaming movies, series, and content — featuring real-time upload status, favorites, filters, and instant delivery via Telegram bot.",
    tags: ["React", "Node.js", "Python", "MongoDB", "Telegram"],
    featured: true,
  },
  {
    title: "LINE Chat Summary Bot",
    category: "Automation",
    year: "2026",
    type: "n8n Workflow",
    icon: MessageSquare,
    image: "/line-summary-bot.png",
    description:
      "An NLU-powered LINE bot that captures group messages, understands natural language summary requests, and delivers AI-generated digests — with scheduled daily reports, smart 90-day retention, and real-time error alerts via LINE push notifications.",
    tags: ["n8n", "LINE", "AI", "Supabase"],
    featured: false,
  },
  {
    title: "Facebook AI Auto-Reply",
    category: "Automation",
    year: "2025",
    type: "n8n Workflow",
    icon: Bot,
    image: "/fb-auto-reply.png",
    description:
      "An AI-powered agent that monitors Facebook page comments and generates contextual replies using OpenRouter LLM with a Google Sheets knowledge base — enabling 24/7 automated customer engagement.",
    tags: ["n8n", "Facebook", "AI Agent", "OpenRouter"],
    featured: false,
  },
  {
    title: "Evercomm RAG Chatbot",
    category: "Automation",
    year: "2026",
    type: "n8n Workflow",
    icon: Database,
    image: "/evercomm-rag.png",
    description:
      "A Retrieval-Augmented Generation chatbot on Telegram that answers SGX sustainability and climate reporting questions — powered by PDF ingestion into Supabase Vector Store with Google Gemini embeddings and persistent conversation memory.",
    tags: ["n8n", "RAG", "Telegram", "Supabase"],
    featured: false,
  },
  {
    title: "Employee Management System",
    category: "Full Stack",
    year: "2026",
    type: "Full Stack",
    icon: Server,
    image: "/ems.png",
    link: "https://ems-sigma-bay.vercel.app",
    description:
      "A complete employee management system with role-based access, leave approval workflows, salary management, department organization, and admin dashboards.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    featured: false,
  },
  {
    title: "E-Commerce API",
    category: "Full Stack",
    year: "2026",
    type: "Backend / API",
    icon: Server,
    image: "/ecommerce-api.png",
    description:
      "A backend API for product management, user authentication, orders, payments, and admin workflows.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    featured: false,
  },
  {
    title: "Python Automation Scripts",
    category: "Python",
    year: "2025",
    type: "Automation",
    icon: Wrench,
    image: "/python-automation.png",
    description:
      "Python scripts for file organization, data cleaning, repetitive task automation, and command-line productivity.",
    tags: ["Python", "CLI", "Automation", "Scripts"],
    featured: false,
  },
  {
    title: "Developer Portfolio",
    category: "Frontend",
    year: "2025",
    type: "Frontend",
    icon: Code2,
    image: "/portfolio.jpg",
    description:
      "This portfolio — built with React, Tailwind CSS, Framer Motion, and dark/light theme support.",
    tags: ["React", "Tailwind", "Framer Motion"],
    featured: false,
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  function handleFilterChange(filter) {
    setActiveFilter(filter);
    setVisibleCount(4);
  }

  function handleLoadMore() {
    setVisibleCount((current) => current + 2);
  }

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const featuredProject = filteredProjects.find((project) => project.featured);
  const gridProjects = filteredProjects.filter((project) => !project.featured);
  const visibleProjects = gridProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < gridProjects.length;

  return (
    <section
      id="projects"
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
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-primary">
              WORK
            </p>

            <h2 className="font-mono text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Projects
            </h2>

            <p className="mt-6 max-w-2xl font-sans text-base font-semibold leading-relaxed text-muted-foreground md:text-lg">
              Web applications, automation workflows, and backend services.
            </p>
          </div>
        </motion.div>

        {/* Category chips */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{
            delay: 0.1,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {filters.map((item) => {
            const isActive = activeFilter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => handleFilterChange(item)}
                className={cn(
                  "inline-flex items-center gap-2 border px-4 py-2 font-mono text-xs font-bold transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                <Filter
                  className={cn(
                    "size-3",
                    isActive ? "text-primary-foreground" : "text-primary",
                  )}
                />
                {item}
              </button>
            );
          })}
        </motion.div>

        {/* Featured project */}
        {featuredProject ? (
          <motion.div
            key={`${activeFilter}-${featuredProject.title}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{
              delay: 0.12,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16"
          >
            <Card className="overflow-hidden transition-colors hover:border-primary">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-80 border-b border-border bg-muted lg:border-b-0 lg:border-r">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />

                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    {featuredProject.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="border border-primary/40 bg-background/80 px-2 py-1 font-mono text-[10px] font-bold text-primary backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex min-h-80 flex-col justify-between p-7 md:p-10">
                  <div>
                    <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      {featuredProject.year} // {featuredProject.type}
                    </p>

                    <CardTitle className="text-3xl md:text-4xl">
                      {featuredProject.title}
                    </CardTitle>

                    <p className="mt-6 max-w-xl font-sans text-sm font-semibold leading-relaxed text-muted-foreground md:text-base">
                      {featuredProject.description}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center justify-between">
                    <Button variant="outline" asChild={!!featuredProject.link}>
                      {featuredProject.link ? (
                        <a
                          href={featuredProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View Project
                          <ArrowRight className="size-4" />
                        </a>
                      ) : (
                        <>
                          View Project
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ) : null}

        {/* Project grid */}
        <motion.div
          key={activeFilter}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
          }}
          className="mt-5 grid gap-5 md:grid-cols-2"
        >
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{
                  delay: index * 0.08,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card className="group h-full overflow-hidden transition-colors hover:border-primary">
                  {project.image ? (
                    <div className="relative h-56 overflow-hidden border-b border-border bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />

                      <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="border border-primary/40 bg-background/80 px-2 py-1 font-mono text-[10px] font-bold text-primary backdrop-blur"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex h-56 items-center justify-center border-b border-border bg-muted">
                      <Icon className="size-16 text-primary/30" />

                      <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="border border-primary/40 bg-background/80 px-2 py-1 font-mono text-[10px] font-bold text-primary backdrop-blur"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <CardHeader className="p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        {project.year} // {project.type}
                      </p>

                      <Icon className="size-5 text-primary" />
                    </div>

                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <p className="text-sm font-semibold leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {project.link ? (
                      <div className="mt-8 flex items-center justify-end">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary transition-transform hover:scale-110"
                        >
                          View Project
                          <ArrowRight className="size-4" />
                        </a>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 ? (
          <div className="mt-16 border border-border bg-card p-10 text-center">
            <p className="font-mono text-sm font-bold text-muted-foreground">
              No projects found for this category.
            </p>
          </div>
        ) : null}

        {/* Load more */}
        {hasMoreProjects ? (
          <div className="mt-14 flex justify-center">
            <Button variant="outline" onClick={handleLoadMore}>
              Load More
              <ArrowRight className="size-4" />
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
