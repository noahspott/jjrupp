// Components
import { FaXmark } from "react-icons/fa6";

export default function MenuModal() {
  return (
    <div className="bg-primary absolute inset-0 h-screen w-screen">
      <FaXmark className="text-secondary absolute top-11 right-4 size-6" />
    </div>
  );
}
