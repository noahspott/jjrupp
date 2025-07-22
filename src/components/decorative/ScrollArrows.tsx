import { LuChevronDown } from "react-icons/lu";

export default function ScrollArrows({ className }: { className: string }) {
  const iconClass = "-mt-16 size-22";
  const strokeWidth = 1;
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <LuChevronDown
        className={`arrow1 ${iconClass}`}
        strokeWidth={strokeWidth}
      />
      <LuChevronDown
        className={`arrow2 ${iconClass}`}
        strokeWidth={strokeWidth}
      />
      <LuChevronDown
        className={`arrow3 ${iconClass}`}
        strokeWidth={strokeWidth}
      />
    </div>
  );
}
