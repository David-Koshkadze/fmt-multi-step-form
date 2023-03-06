import { useCallback, useEffect } from "react";

import { FormWrapper } from "./FormWrapper";
import { ReactComponent as ArcadeIcon } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../assets/images/icon-pro.svg";
import PlanSelect from "../PlanSelect";
import { useFormContext } from "react-hook-form";
import { usePriceInfo } from "../../usePriceInfo";

export function SelectPlanForm() {
  const { register, watch } = useFormContext();

  const isYearlyBilling = watch("yearly_billing");

  // Custom hooks for controlling prices
  const { prices, formatPrice } = usePriceInfo(isYearlyBilling);

  return (
    <FormWrapper
      title="Select Plan"
      infoText="You have the option of monthly or yearly billing."
    >
      <div className="grid w-full gap-4 grid-cols-3 mb-4">
        <PlanSelect
          name="plan_mode"
          title="Arcade"
          price={formatPrice(prices.arcade)}
          id="arcade-mode"
          value="arcade"
          icon={<ArcadeIcon />}
          isYearlyBilling={isYearlyBilling}
        />

        <PlanSelect
          name="plan_mode"
          title="Advanced"
          price={formatPrice(prices.advanced)}
          id="advanced-mode"
          value="advanced"
          icon={<AdvancedIcon />}
          isYearlyBilling={isYearlyBilling}
        />

        <PlanSelect
          name="plan_mode"
          title="Pro"
          price={formatPrice(prices.pro)}
          id="pro-mode"
          value="pro"
          icon={<ProIcon />}
          isYearlyBilling={isYearlyBilling}
        />
      </div>

      <div className="flex py-3 justify-center items-center gap-4 bg-gray-100 rounded-lg">
        <span>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            {...register("yearly_billing")}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purplish-blue"></div>
        </label>
        <span>Yearly</span>
      </div>
    </FormWrapper>
  );
}
