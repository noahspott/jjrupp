import { FaChevronDown } from "react-icons/fa6";

export default function ScrollArrows({ className }: { className: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <FaChevronDown className="arrow1 -mt-6 size-12" />
      <FaChevronDown className="arrow2 -mt-6 size-12" />
      <FaChevronDown className="arrow3 -mt-6 size-12" />
    </div>
  );
}
