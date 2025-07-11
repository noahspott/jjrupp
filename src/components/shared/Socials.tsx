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

export default function Socials({ className }: { className?: string }) {
  return (
    <ul className={`flex gap-14 ${className}`}>
      {socials.map((social) => (
        <li key={social.href}>
          <a href={social.href} aria-label={social.ariaLabel}>
            {<social.Icon className="size-5" />}
          </a>
        </li>
      ))}
    </ul>
  );
}
