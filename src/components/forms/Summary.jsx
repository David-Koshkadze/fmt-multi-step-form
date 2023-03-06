import React from "react";
import { useFormContext } from "react-hook-form";
import { FormWrapper } from "./FormWrapper";

export default function Summary() {
  const { getValues } = useFormContext();

  let planMode = getValues().plan_mode;

  // Capitalize planMode
  const planModeStr = planMode.charAt(0).toUpperCase() + planMode.slice(1);

  const services = getValues().add_ons;

  return (
    <FormWrapper
      title="Finishing up"
      infoText="Double-check everything looks OK before confirming."
    >
      <>
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between">
            <p>{planModeStr} (Monthly)</p>
            <p>$9/mo</p>
          </div>

          {services.map((addOn, idx) => (
            <div key={idx} className="flex justify-between">
              <p>{addOn}</p>
              <p>+$1/mo</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between px-4">
          <p>Total (per month)</p>
          <p className="text-blue-700 text-lg font-ubuntu-bold">+$12/mo</p>
        </div>
      </>
    </FormWrapper>
  );
}
