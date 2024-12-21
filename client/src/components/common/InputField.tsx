import { memo } from "react";

interface Props {
  label: string;
  id: string;
  type?: "text" | "number" | "email" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = memo(
  ({ label, id, type = "text", value, onChange }: Props): JSX.Element => {
    return (
      <div className="relative">
        <label htmlFor={id} className="leading-7 text-sm text-gray-600">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    );
  }
);

export default InputField;
