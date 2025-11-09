import React from "react";
import {
  FieldError,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  textarea?: boolean;
  placeholder?: string;
  min?:string;
  max?:string;
  step?:number;
}

const InputField = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  textarea = false,
  placeholder,
  min,
  max,
  step,
}: InputFieldProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-semibold text-black">
          {label} <span className="text-2xl">*</span>
        </label>
      )}

      {textarea ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          className="w-full border border-neutral-200 rounded-lg p-3 resize-none"
          rows={5}
        />
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          disabled={type === "time" && (!min || !max)}
          min={min}
          max={max}
          step={step}
          className="w-full border border-neutral-200 rounded-lg p-3"
        />
      )}

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default InputField;
