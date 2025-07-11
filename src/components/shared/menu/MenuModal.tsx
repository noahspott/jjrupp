// Components
import { FaXmark } from "react-icons/fa6";

// Data
import { links } from "@/data/links";

export default function MenuModal() {
  return (
    <div className="bg-primary absolute inset-0 z-50 h-screen w-screen">
      <FaXmark className="text-secondary absolute top-11 right-4 size-6" />
      <div className="relative h-full w-full">
        <nav className="me-8 mt-48 flex flex-col gap-8">
          {links.map((link) => {
            return (
              <li className="list-none">
                <a
                  className="font-heading font-2 text-lunar-white hover:text-lunar-accent text-right text-4xl uppercase duration-150 hover:cursor-pointer"
                  href={link.href}
                >
                  {link.display}
                </a>
              </li>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
