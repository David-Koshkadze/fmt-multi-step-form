import React from "react";

export default function PlanSelect({
  register,
  value,
  id,
  icon,
  title,
  price,
  watchBillingMode,
}) {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name="planMode"
        {...register}
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
          {watchBillingMode && (
            <p className="text-purplish-blue text-sm">2 months free</p>
          )}
        </div>
      </label>
    </div>
  );
}
