// Lib
import clsx from "clsx";

// Components
import { FaSpotify, FaYoutube, FaItunesNote, FaAmazon } from "react-icons/fa6";

// Data
import { SPOTIFY, APPLE_MUSIC, AMAZON_MUSIC, YOUTUBE } from "@/data/business";

const socials = [
  {
    href: SPOTIFY,
    Icon: FaSpotify,
    ariaLabel: "Listen to JJ Rupp on Spotify",
  },
  {
    href: APPLE_MUSIC,
    Icon: FaItunesNote,
    ariaLabel: "Listen to JJ RUPP on Apple Music",
  },
  {
    href: AMAZON_MUSIC,
    Icon: FaAmazon,
    ariaLabel: "Listen to JJ RUPP on Amazon Music",
  },
  {
    href: YOUTUBE,
    Icon: FaYoutube,
    ariaLabel: "Listen to JJ RUPP on YouTube",
  },
];

export default function StreamingIcons({
  className,
  iconClassName,
  hasBgCircles = false,
}: {
  className?: string;
  iconClassName?: string;
  hasBgCircles?: boolean;
}) {
  return hasBgCircles ? (
    <ul className={clsx("flex gap-5", className)}>
      {socials.map((social) => (
        <li
          key={social.href}
          className="bg-secondary/70 h-[55px] w-[55px] rounded-full sm:h-[75px] sm:w-[75px]"
        >
          <a
            href={social.href}
            aria-label={social.ariaLabel}
            className="flex h-full w-full items-center justify-center"
          >
            {
              <social.Icon
                className={clsx("text-primary size-7", iconClassName)}
              />
            }
          </a>
        </li>
      ))}
    </ul>
  ) : (
    <ul className={clsx("flex gap-14", className)}>
      {socials.map((social) => (
        <li key={social.href}>
          <a href={social.href} aria-label={social.ariaLabel}>
            {<social.Icon className={clsx("size-5", iconClassName)} />}
          </a>
        </li>
      ))}
    </ul>
  );
}
