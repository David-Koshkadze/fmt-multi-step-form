import React from "react";
import { FormWrapper } from "./FormWrapper";
import { ReactComponent as ArcadeIcon } from "./assets/images/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "./assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "./assets/images/icon-pro.svg";

export function SelectPlanForm({ billingPlan, planMode, updateFields }) {
  return (
    <FormWrapper
      title="Select Plan"
      infoText="You have the option of monthly or yearly billing."
    >
      <ul className="grid w-full gap-4 grid-cols-3">
        <li>
          <input
            type="radio"
            id="arcade-mode"
            name="planMode"
            value="arcade"
            className="hidden peer"
          />
          <label
            htmlFor="arcade-mode"
            className="flex flex-col w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-purplish-blue peer-checked:bg-gray-200 peer-hover:border-purplish-blue"
          >
            <ArcadeIcon />
            <div className="mt-8">
              <h1 className="text-lg">Arcade</h1>
              <p className="text-gray-400">$9/mo</p>
            </div>
          </label>
        </li>

        <li>
          <input
            type="radio"
            id="advanced-mode"
            name="planMode"
            value="advanced"
            className="hidden peer"
          />
          <label
            htmlFor="advanced-mode"
            className="flex flex-col w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-purplish-blue peer-checked:bg-gray-200 peer-hover:border-purplish-blue"
          >
            <AdvancedIcon />
            <div className="mt-8">
              <h1 className="text-lg">Advanced</h1>
              <p className="text-gray-400">$12/mo</p>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="pro-mode"
            name="planMode"
            value="pro"
            className="hidden peer"
          />
          <label
            htmlFor="pro-mode"
            className="flex flex-col w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-purplish-blue peer-checked:bg-gray-200 peer-hover:border-purplish-blue"
          >
            <ProIcon />
            <div className="mt-8">
              <h1 className="text-lg">Pro</h1>
              <p className="text-gray-400">$15/mo</p>
            </div>
          </label>
        </li>
      </ul>
    </FormWrapper>
  );
}
