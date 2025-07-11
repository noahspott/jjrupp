// Lib
import clsx from "clsx";

// Types
import type { AnchorHTMLAttributes } from "react";
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({ className, children, ...rest }: LinkProps) {
  return (
    <a
      {...rest}
      className={clsx(
        "font-heading heading-3 bg-primary text-secondary px-6 py-3 select-none hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </a>
  );
}
