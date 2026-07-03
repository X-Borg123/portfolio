import { Award, Briefcase, GraduationCap } from "lucide-react";
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

const workExperience = [
  {
    period: "10/2022 — PRESENT",
    title: "Web Developer",
    subtitle: "Mandalay",
    bullets: [
      "Built responsive UIs using React.js",
      "Developed backend services with Node.js (Early 2025)",
      "Built and customized websites using WordPress (Mid 2025)",
      "Wrote Python scripts for automation tasks (2025)",
      "Automated workflows using n8n (2025)",
    ],
    icon: Briefcase,
    tags: ["React", "Node.js", "WordPress", "Python", "n8n"],
  },
  {
    period: "01/2022 — 06/2022",
    title: "Web Developer",
    subtitle: "Yangon",
    bullets: [
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, Bootstrap, and PHP",
      "Collaborated with senior developers on Laravel-based applications and contributed to backend functionality",
      "Used Git & GitHub for version control",
      "Assisted with debugging, testing, and deployment",
    ],
    icon: Briefcase,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Laravel", "Git"],
  },
];

const education = [
  {
    period: "04/2026 — PRESENT",
    title: "NCC Level 5 Diploma in Computing with Data Science",
    subtitle: "Currently Enrolled",
    status: "in-progress",
    modules: [
      "Agile",
      "Artificial Intelligence",
      "Analysis, Design and Implementation",
      "Data Science and Big Data",
    ],
    icon: GraduationCap,
    tags: ["Data Science", "AI", "Agile", "System Design"],
  },
  {
    period: "10/2024 — 10/2025",
    title: "NCC Level 4 Diploma in Computing",
    subtitle: "Completed — Certificate Awarded",
    status: "completed",
    modules: [
      "Arithmetics and Mathematics Concepts in Computing",
      "Computer Networks",
      "Computer Systems",
      "Databases",
      "Object-Oriented System Analysis and Design (DDOOCP)",
      "Frontend Development",
      "Software Engineering",
    ],
    icon: Award,
    tags: [
      "Software Development",
      "Databases",
      "Networks",
      "OOP",
      "Frontend",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-18 border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-400 px-5 py-20 sm:px-6 md:px-8 lg:px-5">
        {/* Work Experience Header */}
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
            TRAJECTORY
          </p>

          <h2 className="font-mono text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Work Experience
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base font-semibold leading-relaxed text-muted-foreground md:text-lg">
            A timeline of my professional development journey.
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
            <svg
              width="120"
              height="100%"
              viewBox="0 0 120 600"
              preserveAspectRatio="none"
              className="h-full"
            >
              <motion.path
                d="M60 0 C90 150, 30 300, 60 450 C75 525, 50 575, 60 600"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 2.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </svg>
          </div>

          <div className="space-y-12 lg:space-y-20">
            {workExperience.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 0;

              return (
                <div
                  key={`${item.period}-${item.title}`}
                  className="relative lg:grid lg:grid-cols-[1fr_120px_1fr] lg:gap-10"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={isRight ? "hidden lg:block" : "hidden lg:block"}
                  >
                    {!isRight ? (
                      <WorkCard item={item} Icon={Icon} />
                    ) : null}
                  </motion.div>

                  <div className="hidden lg:flex lg:flex-col lg:items-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative z-10 size-4 rounded-full border border-primary bg-background shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
                    >
                      <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                    </motion.div>

                    <p className="mt-4 text-center font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      {item.period}
                    </p>
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{
                      delay: 0.12,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={isRight ? "hidden lg:block" : "hidden lg:block"}
                  >
                    {isRight ? (
                      <WorkCard item={item} Icon={Icon} />
                    ) : null}
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="lg:hidden"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="relative size-4 rounded-full border border-primary bg-background shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_70%,transparent)]">
                        <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                      </span>

                      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        {item.period}
                      </p>
                    </div>

                    <WorkCard item={item} Icon={Icon} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-32"
        >
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-primary">
            CREDENTIALS
          </p>

          <h2 className="font-mono text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Education
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base font-semibold leading-relaxed text-muted-foreground md:text-lg">
            Academic qualifications and certifications.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
            <svg
              width="120"
              height="100%"
              viewBox="0 0 120 600"
              preserveAspectRatio="none"
              className="h-full"
            >
              <motion.path
                d="M60 0 C90 150, 30 300, 60 450 C75 525, 50 575, 60 600"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 2.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </svg>
          </div>

          <div className="space-y-12 lg:space-y-20">
            {education.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 0;

              return (
                <div
                  key={`${item.period}-${item.title}`}
                  className="relative lg:grid lg:grid-cols-[1fr_120px_1fr] lg:gap-10"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={isRight ? "hidden lg:block" : "hidden lg:block"}
                  >
                    {!isRight ? (
                      <EducationCard item={item} Icon={Icon} />
                    ) : null}
                  </motion.div>

                  <div className="hidden lg:flex lg:flex-col lg:items-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative z-10 size-4 rounded-full border border-primary bg-background shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
                    >
                      <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                    </motion.div>

                    <p className="mt-4 text-center font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      {item.period}
                    </p>
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{
                      delay: 0.12,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={isRight ? "hidden lg:block" : "hidden lg:block"}
                  >
                    {isRight ? (
                      <EducationCard item={item} Icon={Icon} />
                    ) : null}
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="lg:hidden"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="relative size-4 rounded-full border border-primary bg-background shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_70%,transparent)]">
                        <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                      </span>

                      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        {item.period}
                      </p>
                    </div>

                    <EducationCard item={item} Icon={Icon} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ item, Icon }) {
  return (
    <Card className="group h-full p-6 transition-colors hover:border-primary sm:p-7">
      <CardHeader>
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Icon className="size-5 text-primary" />

            <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              {item.subtitle}
            </span>
          </div>
        </div>

        <CardTitle className="text-2xl sm:text-3xl">{item.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="mt-4 space-y-2">
          {item.bullets.map((bullet) => (
            <li
              key={bullet}
              className="text-sm font-semibold leading-relaxed text-muted-foreground sm:text-base"
            >
              <span className="mr-2 text-primary">—</span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
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
  );
}

function EducationCard({ item, Icon }) {
  return (
    <Card className="group h-full p-6 transition-colors hover:border-primary sm:p-7">
      <CardHeader>
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Icon className="size-5 text-primary" />

            <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              {item.subtitle}
            </span>
          </div>

          {item.status === "in-progress" && (
            <span className="inline-flex items-center gap-1.5 border border-primary/50 bg-primary/10 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              In Progress
            </span>
          )}

          {item.status === "completed" && (
            <span className="inline-flex items-center gap-1.5 border border-border bg-background px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Completed
            </span>
          )}
        </div>

        <CardTitle className="text-xl sm:text-2xl">{item.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="mt-4 mb-3 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Modules Studied{item.status === "in-progress" ? " So Far" : ""}:
        </p>

        <ul className="space-y-1.5">
          {item.modules.map((mod) => (
            <li
              key={mod}
              className="text-sm font-semibold leading-relaxed text-muted-foreground"
            >
              <span className="mr-2 text-primary">—</span>
              {mod}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
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
  );
}
