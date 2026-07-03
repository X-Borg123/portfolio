import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center cursor-pointer justify-center gap-2",
    "whitespace-nowrap select-none border font-mono font-bold",
    "outline-none",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground",
        outline: "border-primary bg-transparent text-primary",

        secondary:
          "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:text-primary",

        destructive:
          "border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90",

        link:
          "border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-10 px-5 text-md",
        xs: "h-7 px-2.5 text-xs",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
        icon: "size-10",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },

      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "none",
    },
  }
);

const motionVariants = {
  default: {
    initial: {
      backgroundColor: "var(--primary)",
      color: "var(--primary-foreground)",
      borderColor: "var(--primary)",
    },
    hover: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      color: "var(--primary)",
      borderColor: "var(--primary)",
    },
    tap: {
      y: 1,
    },
  },

  outline: {
    initial: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      color: "var(--primary)",
      borderColor: "var(--primary)",
    },
    hover: {
      backgroundColor: "var(--primary)",
      color: "var(--primary-foreground)",
      borderColor: "var(--primary)",
    },
    tap: {
      y: 1,
    },
  },
};

function Button({
  className,
  variant = "default",
  size = "default",
  radius = "none",
  type = "button",
  ...props
}) {
  const animation = motionVariants[variant];

  return (
    <motion.button
      type={type}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, radius, className }))}
      initial={animation?.initial}
      animate={animation?.initial}
      whileHover={animation?.hover}
      whileTap={animation?.tap}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    />
  );
}

export { Button };
