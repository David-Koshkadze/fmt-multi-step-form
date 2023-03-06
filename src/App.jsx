import { useState } from "react";
import { PersonalInfoForm } from "./components/forms/PersonalInfoForm";
import { SelectPlanForm } from "./components/forms/SelectPlanForm";
import { AccountForm } from "./components/forms/AccountForm";
import Summary from "./components/forms/Summary";
import ThankYouComponent from "./components/ThankYouComponent";

import { useMutltiStepForm } from "./useMultiStepForm";

import { FormProvider, useForm } from "react-hook-form";

export default function App() {
  const [finishForm, setFinishForm] = useState(false);

  const methods = useForm({
    defaultValues: {
      plan_mode: "advanced",
      yearly_billing: false,
    },
  });

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMutltiStepForm([
      {
        element: <PersonalInfoForm />,
        title: "Your Info",
      },
      {
        element: <SelectPlanForm />,
        title: "Select Plan",
      },
      {
        element: <AccountForm />,
        title: "Add-ons",
      },
      {
        element: <Summary />,
        title: "Summary",
      },
    ]);

  // Submit function when handleSubmit(onSubmit) is called
  const onSubmit = (data) => {
    if (!isLastStep) return next();
    setFinishForm(true);
    console.log(data);
  };

  return (
    <div className="w-full h-screen bg-light-gray grid place-items-center font-ubuntu">
      <div className="grid grid-cols-3 gap-24 h-[600px] bg-white p-4 shadow-sm rounded-2xl relative">
        <div className="rounded-lg col-span-1 pt-10 pl-8 bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover">
          <div className="flex flex-col gap-8 mx-auto font-ubuntu-md">
            {steps.map((stepItem, idx) => {
              return (
                <div key={idx} className="flex w-full gap-3 items-center">
                  {currentStepIndex === idx ? (
                    <div className="w-8 h-8 rounded-full bg-teal-300 grid place-items-center">
                      <span>{idx + 1}</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-transparent text-magnoli border border-magnoli grid place-items-center">
                      <span>{idx + 1}</span>
                    </div>
                  )}

                  <div className="flex flex-col">
                    <span className="uppercase text-light-gray text-xs">
                      Step {idx + 1}
                    </span>
                    <span className="uppercase text-magnoli font-ubuntu-bold text-sm tracking-wider">
                      {stepItem.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {finishForm ? (
          <ThankYouComponent />
        ) : (
          <FormProvider {...methods}>
            <div className="relative col-span-2 pr-20">
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {step}
                <div
                  className={`flex absolute bottom-8 right-0 left-0 ${
                    !isFirstStep ? "justify-between" : "justify-end"
                  }`}
                >
                  {!isFirstStep && (
                    <button
                      href="#"
                      type="button"
                      onClick={back}
                      className="py-2 text-light-gray rounded-lg"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="bg-marine-blue py-2 px-4 rounded-lg text-white"
                  >
                    {!isLastStep ? "Next Step" : "Confirm"}
                  </button>
                </div>
              </form>
            </div>
          </FormProvider>
        )}
      </div>
    </div>
  );
}
