import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        [
          "min-h-40 w-full resize-none border border-input bg-background px-4 py-4",
          "font-sans text-base font-semibold text-foreground",
          "outline-none transition-colors",
          "placeholder:text-muted-foreground",
          "focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

export { Textarea };