import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  Link2,
  Mail,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  title: z.string().min(2, "Please enter a subject."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

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

const contactLinks = [
  {
    title: "Email",
    description: "pyaesonephyophyo2004@gmail.com",
    href: "mailto:pyaesonephyophyo2004@gmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    description: "github.com/X-borg123",
    href: "https://github.com/X-borg123",
    icon: FolderGit2,
  },
  {
    title: "LinkedIn",
    description: "Pyae Sone Phyo",
    href: "https://www.linkedin.com/in/pyae-sone-phyo-44391b245",
    icon: Link2,
  },
];

export function Contact() {
  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: "",
    },
  });

  async function onSubmit(data) {
    setStatus("loading");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("config-error");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          title: data.title,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        { publicKey },
      );

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
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
            CONTACT
          </p>

          <h2 className="font-mono text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Get In Touch
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base font-semibold leading-relaxed text-muted-foreground md:text-lg">
            Available for freelance work and full-time opportunities.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.6fr]">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{
              delay: 0.12,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Card className="p-7 sm:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                      Name
                    </label>

                    <Input
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                      placeholder="Your name"
                    />

                    {errors.name ? (
                      <p className="mt-2 text-xs font-semibold text-destructive">
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="mb-3 block font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                      Email
                    </label>

                    <Input
                      {...register("email")}
                      type="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      placeholder="your@email.com"
                    />

                    {errors.email ? (
                      <p className="mt-2 text-xs font-semibold text-destructive">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="mb-3 block font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                    Subject
                  </label>

                  <Input
                    {...register("title")}
                    aria-invalid={errors.title ? "true" : "false"}
                    placeholder="What is this about?"
                  />

                  {errors.title ? (
                    <p className="mt-2 text-xs font-semibold text-destructive">
                      {errors.title.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-3 block font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                    Message
                  </label>

                  <Textarea
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                    placeholder="Your message..."
                    rows={5}
                  />

                  {errors.message ? (
                    <p className="mt-2 text-xs font-semibold text-destructive">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-12 w-full text-sm tracking-wider"
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="size-4" />
                    </>
                  )}
                </Button>

                {status === "success" ? (
                  <div className="flex items-center gap-3 border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-500">
                    <CheckCircle2 className="size-5" />
                    Message sent successfully.
                  </div>
                ) : null}

                {status === "config-error" ? (
                  <div className="border border-primary/40 bg-primary/10 p-4 text-sm font-semibold text-primary">
                    Email service is not configured. Please contact me directly.
                  </div>
                ) : null}

                {status === "error" ? (
                  <div className="border border-destructive/40 bg-destructive/10 p-4 text-sm font-semibold text-destructive">
                    Something went wrong. Please try again or email me directly.
                  </div>
                ) : null}
              </form>
            </Card>
          </motion.div>

          {/* Sidebar links */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{
              delay: 0.2,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-5"
          >
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block"
                >
                  <Card className="group flex items-center gap-4 p-5 transition-colors hover:border-primary">
                    <Icon className="size-5 text-primary" />

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-sm font-bold text-foreground group-hover:text-primary">
                        {item.title}
                      </p>

                      <p className="truncate text-xs font-semibold text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <ExternalLink className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  </Card>
                </a>
              );
            })}

            <Card className="flex items-center gap-3 p-5">
              <span className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.6)]" />
              <p className="font-mono text-sm font-bold text-foreground">
                Accepting New Projects
              </p>
            </Card>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
