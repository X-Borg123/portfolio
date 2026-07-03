import { motion } from "framer-motion";

export function TypewriterText({
  lines = [],
  className = "",
  highlightClassName = "",
  speed = 0.09,
}) {
  let globalIndex = 0;

  const totalChars = lines.reduce((total, line) => total + line.text.length, 0);

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block max-w-full whitespace-normal wrap-break-word">
          {line.text.split("").map((char, charIndex) => {
            const index = globalIndex++;
            const isLastChar = index === totalChars - 1;

            return (
              <motion.span
                key={`${lineIndex}-${charIndex}`}
                className={line.highlight ? highlightClassName : ""}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * speed,
                  duration: 0.01,
                }}
              >
                {char}

                {isLastChar ? (
                  <motion.span
                    className="ml-2 inline-block h-[0.82em] w-[0.08em] translate-y-[0.08em] bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      delay: totalChars * speed,
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ) : null}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}