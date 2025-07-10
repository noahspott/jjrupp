export default function FormInput({
  type,
  label,
  name,
  placeholder,
}: {
  type: React.HTMLInputTypeAttribute;
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lunar-white capitalize" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className="bg-lunar-white appearance-none rounded-xs p-2 text-black"
        type={type}
        required
      />
    </div>
  );
}
