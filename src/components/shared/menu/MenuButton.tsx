// Lib
import { useState } from "react";

// Components
import MenuModal from "./MenuModal";
import { FaBars } from "react-icons/fa6";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <button onClick={() => setIsOpen((prev) => !prev)}>
      {isOpen ? <MenuModal /> : <FaBars className="size-6" />}
    </button>
  );
}
