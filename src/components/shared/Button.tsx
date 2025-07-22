// Lib
import clsx from "clsx";

// Types
import type { ButtonHTMLAttributes } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  className,
  children,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "font-heading heading-4 button-animation px-6 py-3 select-none",
        variant === "primary" && "bg-primary text-secondary",
        variant === "secondary" && "bg-secondary text-primary",
        className,
      )}
    >
      {children}
    </button>
  );
}
