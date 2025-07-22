// Lib
import clsx from "clsx";

// Types
import type { AnchorHTMLAttributes } from "react";

type LinkStyle = "button" | "link";
type LinkVariant = "primary" | "secondary";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  styleType?: LinkStyle;
  variant?: LinkVariant;
};

export default function Link({
  className,
  children,
  styleType = "button",
  variant = "primary",
  ...rest
}: LinkProps) {
  const isButton = styleType === "button";
  const isPrimary = variant === "primary";

  return (
    <a
      {...rest}
      className={clsx(
        "font-heading heading-4 button-animation transition-colors select-none",
        // BUTTON STYLE
        isButton &&
          (isPrimary
            ? "bg-primary text-secondary"
            : "bg-secondary text-primary"),
        isButton && "px-6 py-3",

        // LINK STYLE
        !isButton &&
          (isPrimary
            ? "text-primary underline underline-offset-2"
            : "text-secondary underline underline-offset-2"),

        className,
      )}
    >
      {children}
    </a>
  );
}
