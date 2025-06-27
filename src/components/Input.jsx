import React from "react";

const Input = ({label, name, register, errors, index, className, type}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...register(`subjects.${index}.${name}`, {
          required: `${label.toUpperCase()} is required`,
          min: { value: 0, message: `Minimum ${type === "number" ? 0 : ""}` },
          max: { value: 100, message: `Maximum ${type === "number" ? 100 : ""}` },
          valueAsNumber: type === "number" ? true : false,
        })}
        step="any"
        className={`w-full px-4 py-2 border ${
          errors.subjects?.[index]?.[name]
            ? "border-red-500"
            : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
        placeholder={type === "number" ? "0-100" : ""}
      />
      {errors.subjects?.[index]?.[name] && (
        <p className="mt-1 text-xs text-red-600">
          {errors.subjects[index][name].message}
        </p>
      )}
    </div>
  );
};

export default Input;
