import React, { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function PlanSelect({
  name,
  value,
  id,
  icon,
  title,
  price,
  isYearlyBilling,
}) {
  const { register } = useFormContext();

  return (
    <div>
      <input
        type="radio"
        id={id}
        {...register(name)}
        value={value}
        className="hidden peer"
      />
      <label
        htmlFor={id}
        className="flex flex-col w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-purplish-blue peer-checked:bg-gray-200 peer-hover:border-purplish-blue"
      >
        {icon}
        <div className="mt-8">
          <h1 className="text-lg">{title}</h1>
          <p className="text-gray-400">{price}</p>
          {isYearlyBilling && (
            <p className="text-purplish-blue text-sm">2 months free</p>
          )}
        </div>
      </label>
    </div>
  );
}
