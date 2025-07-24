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
      <label className="capitalize" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className="border-secondary appearance-none border-2 p-2"
        type={type}
        required
      />
    </div>
  );
}
