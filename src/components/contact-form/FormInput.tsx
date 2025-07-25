export default function FormInput({
  type,
  label,
  name,
  placeholder,
  className = "",
}: {
  type: React.HTMLInputTypeAttribute;
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="font-heading capitalize" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className="border-primary appearance-none border-2 bg-white/30 p-2"
        type={type}
        required
      />
    </div>
  );
}
