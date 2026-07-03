import { FolderGit2, Link2, Mail } from "lucide-react";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/X-borg123",
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pyae-sone-phyo-44391b245",
    icon: Link2,
  },
  {
    label: "Email",
    href: "mailto:pyaesonephyophyo2004@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex min-h-40 w-full max-w-400 flex-col justify-between gap-10 px-5 py-10 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:px-5">
        <div>
          <a
            href="#home"
            className="font-mono text-xl font-black text-foreground transition-colors hover:text-primary"
          >
            Pyae Sone Phyo
          </a>

          <p className="mt-5 max-w-xl font-sans text-sm font-semibold leading-relaxed text-muted-foreground">
            Copyright {new Date().getFullYear()} Pyae Sone Phyo. Built with
            React & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {footerLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex size-11 items-center justify-center border border-transparent text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
