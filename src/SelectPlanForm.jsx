import { FormWrapper } from "./FormWrapper";
import { ReactComponent as ArcadeIcon } from "./assets/images/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "./assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "./assets/images/icon-pro.svg";
import PlanSelect from "./components/PlanSelect";

export function SelectPlanForm({ register, watch }) {
  const watchBillingMode = watch("isYearly");

  return (
    <FormWrapper
      title="Select Plan"
      infoText="You have the option of monthly or yearly billing."
    >
      <div className="grid w-full gap-4 grid-cols-3 mb-4">
        <PlanSelect
          register={register("planMode")}
          title="Arcade"
          price="$9/mo"
          watchBillingMode={watchBillingMode}
          id="arcade-mode"
          value="arcade"
          icon={<ArcadeIcon />}
        />

        <PlanSelect
          register={register("planMode")}
          title="Advanced"
          price="$12/mo"
          watchBillingMode={watchBillingMode}
          id="advanced-mode"
          value="advanced"
          icon={<AdvancedIcon />}
        />

        <PlanSelect
          register={register("planMode")}
          title="Pro"
          price="$15/mo"
          watchBillingMode={watchBillingMode}
          id="pro-mode"
          value="pro"
          icon={<ProIcon />}
        />
      </div>

      <div className="flex py-3 justify-center items-center gap-4 bg-gray-100 rounded-lg">
        <span>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            {...register("isYearly")}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purplish-blue"></div>
        </label>
        <span>Yearly</span>
      </div>
    </FormWrapper>
  );
}
