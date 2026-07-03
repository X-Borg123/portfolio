import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_HEIGHT = 72;

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Certificates",
    href: "#certificates",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("theme");

    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "dark";
  });

  const navRef = useRef(null);
  const desktopNavRef = useRef(null);
  const linkRefs = useRef({});
  const scrollLockUntilRef = useRef(0);

  const [indicatorStyle, setIndicatorStyle] = useState({
    x: 0,
    width: 0,
    opacity: 0,
  });

  const isDark = theme === "dark";

  function getNavbarHeight() {
    return navRef.current?.offsetHeight || NAV_HEIGHT;
  }

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  function scrollToSection(href) {
    const section = document.querySelector(href);

    if (!section) return;

    const navbarHeight = getNavbarHeight();

    const top =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  }

  function handleNavClick(event, href) {
    event.preventDefault();

    setActiveHash(href);
    setIsOpen(false);

    // Keeps active link fixed while smooth scroll is moving
    scrollLockUntilRef.current = Date.now() + 1400;

    // Important for mobile menu:
    // wait until menu starts closing before measuring scroll target
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(href);
      });
    });
  }

  const updateIndicator = useCallback(
    (hash = activeHash) => {
      const nav = desktopNavRef.current;
      const activeLink = linkRefs.current[hash];

      if (!nav || !activeLink) {
        setIndicatorStyle((prev) => ({
          ...prev,
          opacity: 0,
        }));
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setIndicatorStyle({
        x: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    },
    [activeHash]
  );

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useLayoutEffect(() => {
    updateIndicator(activeHash);
  }, [activeHash, updateIndicator]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateIndicator(activeHash);
    });

    if (desktopNavRef.current) {
      resizeObserver.observe(desktopNavRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeHash, updateIndicator]);

  useEffect(() => {
    let ticking = false;

    function getSortedSections() {
      return navLinks
        .map((link) => {
          const section = document.querySelector(link.href);

          if (!section) return null;

          return {
            href: link.href,
            top: section.offsetTop,
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);
    }

    function updateActiveSection() {
      if (Date.now() < scrollLockUntilRef.current) {
        ticking = false;
        return;
      }

      const navbarHeight = getNavbarHeight();
      const scrollPosition = window.scrollY + navbarHeight + 80;

      const sections = getSortedSections();

      let currentSection = "#home";

      for (const section of sections) {
        if (scrollPosition >= section.top) {
          currentSection = section.href;
        }
      }

      setActiveHash(currentSection);
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    }

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-999 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <nav
        ref={navRef}
        className="mx-auto flex h-18 max-w-400 items-center justify-between px-5"
      >
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="font-mono text-2xl font-black text-foreground"
        >
          Pyae Sone Phyo
        </a>

        <div
          ref={desktopNavRef}
          className="relative hidden h-full items-center gap-9 lg:flex"
        >
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;

            return (
              <a
                key={link.href}
                ref={(element) => {
                  linkRefs.current[link.href] = element;
                }}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={cn(
                  "flex h-full items-center font-sans text-sm font-semibold transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </a>
            );
          })}

          <motion.span
            className="pointer-events-none absolute bottom-4.5 left-0 h-0.5 rounded-full bg-primary shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_55%,transparent)]"
            animate={{
              x: indicatorStyle.x,
              width: indicatorStyle.width,
              opacity: indicatorStyle.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 34,
              mass: 0.8,
            }}
          />
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {isDark ? <Moon className="size-4" /> : <Sun className="size-5" />}
          </button>

          <Button
            size="lg"
            className="h-10 text-sm"
            onClick={(event) => handleNavClick(event, "#contact")}
          >
            Hire Me
            <ArrowRight className="size-5" />
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex size-11 items-center justify-center border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {isDark ? <Moon className="size-5" /> : <Sun className="size-5" />}
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "absolute left-0 right-0 top-18 z-40 overflow-hidden border-b border-border bg-background transition-all duration-300 lg:hidden",
          isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={cn(
                  "relative border-b border-border py-4 font-sans text-base font-semibold transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}

                {isActive ? (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_55%,transparent)]" />
                ) : null}
              </a>
            );
          })}

          <Button
            className="mt-5 h-12 w-full"
            onClick={(event) => handleNavClick(event, "#contact")}
          >
            Hire Me
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
