import React from "react";
import { useFormContext } from "react-hook-form";
import { usePriceInfo } from "../../usePriceInfo";
import { FormWrapper } from "./FormWrapper";

export default function Summary() {
  const { getValues } = useFormContext();

  let { yearly_billing, add_ons: services, plan_mode } = getValues();

  // Capitalize planMode
  const planModeStr = plan_mode.charAt(0).toUpperCase() + plan_mode.slice(1);

  function formatService(service) {
    return service
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  const { prices, servicePrices, formatPrice } = usePriceInfo(yearly_billing);

  // Calculate Total
  function calculateTotal() {
    let serviceSum = services.reduce((a, b) => a + parseInt(servicePrices[b]), 0)
    return prices[plan_mode] + serviceSum; 
  }

  return (
    <FormWrapper
      title="Finishing up"
      infoText="Double-check everything looks OK before confirming."
    >
      <>
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between">
            <p>
              {planModeStr} ({yearly_billing ? "Yearly" : "Monthly"})
            </p>
            <p>{formatPrice(prices[plan_mode])}</p>
          </div>

          {services.map((addOn, idx) => (
            <div key={idx} className="flex justify-between">
              <p>{formatService(String(addOn))}</p>
              <p>+{formatPrice(servicePrices[addOn])}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between px-4">
          <p>Total {yearly_billing ? "(per year)" : "(per month)"}</p>
          <p className="text-blue-700 text-lg font-ubuntu-bold">+${String(calculateTotal())}/{yearly_billing ? 'yr' : 'mo'}</p>
        </div>
      </>
    </FormWrapper>
  );
}
