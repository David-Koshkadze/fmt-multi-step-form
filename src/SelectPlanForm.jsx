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
      <ul className="grid w-full gap-4 grid-cols-3 mb-4">
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

      <div className="flex py-3 justify-center items-center gap-4 bg-gray-100 rounded-lg">
        <span>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purplish-blue"></div>
        </label>
        <span>Yearly</span>
      </div>
    </FormWrapper>
  );
}
