// Lib
import { useState } from "react";
import { useScrollLock } from "./useScrollLock";

// Components
import MenuModal from "./MenuModal";
import { FaBars } from "react-icons/fa6";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useScrollLock(isOpen);
  return (
    <button onClick={() => setIsOpen((prev) => !prev)}>
      {isOpen ? <MenuModal /> : <FaBars className="menu-button size-6" />}
    </button>
  );
}
