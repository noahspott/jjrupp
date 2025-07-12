// Lib
import clsx from "clsx";

// Components
import {
  FaSpotify,
  FaMusic,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaItunesNote,
} from "react-icons/fa6";

// Data
import {
  APPLE_MUSIC,
  SPOTIFY,
  YOUTUBE,
  INSTAGRAM,
  FACEBOOK,
} from "@/data/business";

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
    href: YOUTUBE,
    Icon: FaYoutube,
    ariaLabel: "Listen to JJ RUPP on YouTube",
  },
  {
    href: INSTAGRAM,
    Icon: FaInstagram,
    ariaLabel: "Follow JJ Rupp on Instagram",
  },
  {
    href: FACEBOOK,
    Icon: FaFacebookF,
    ariaLabel: "Follow JJ Rupp on Facebook",
  },
];

export default function Socials({
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
          className="bg-secondary h-[50px] w-[50px] rounded-full sm:h-[75px] sm:w-[75px]"
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
