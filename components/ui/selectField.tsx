"use client";

import Image from "next/image";
import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-semibold text-black">
          {label} <span className="text-2xl">*</span>
        </label>
      )}

      <div className="relative w-full">
        <select
          id={name}
          {...register(name)}
          className={`w-full border rounded-lg p-3 outline-none focus:outline-none focus:ring-2 focus:ring-primary appearance-none
          ${error ? "border-red-500" : "border-neutral-200"}
        `}
          defaultValue=""
        >
          <option value="" disabled>
            Select {label.toLowerCase()}
          </option>

          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
          <Image
            src="/Icons/chevron-down.svg"
            alt="chevron-down"
            height={16}
            width={16}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default SelectField;
