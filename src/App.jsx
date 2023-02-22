import { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { SelectPlanForm } from "./SelectPlanForm";
import { AccountForm } from "./AccountForm";
import ThankYouComponent from "./components/ThankYouComponent";

import { useMutltiStepForm } from "./useMultiStepForm";
import { useForm } from "react-hook-form";

export default function App() {
  const [finishForm, setFinishForm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMutltiStepForm([
      {
        element: <PersonalInfoForm register={register} errors={errors} />,
        title: "Your Info",
      },
      {
        element: (
          <SelectPlanForm register={register} watch={watch} errors={errors} />
        ),
        title: "Select Plan",
      },
      {
        element: <AccountForm />,
        title: "Add-ons",
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
      <div className="flex h-[600px] w-full md:w-[80%] lg:w-[60%] gap-24 bg-white p-4 shadow-sm rounded-2xl pr-24 relative">
        <div className="rounded-2xl w-56 bg-green-500 pt-12 pl-8 bg-[url('./assets/images/bg-sidebar-desktop.svg')]">
          <div className="flex flex-col w-full gap-4 mx-auto">
            {steps.map((stepItem, idx) => {
              return (
                <div key={idx} className="flex w-full gap-3 items-center">
                  {currentStepIndex === idx ? (
                    <div className="w-8 h-8 rounded-full bg-teal-500 border border-white grid place-items-center">
                      <span>{idx + 1}</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-transparent text-white border border-white grid place-items-center">
                      <span>{idx + 1}</span>
                    </div>
                  )}

                  <div>
                    <span className="uppercase text-cool-gray text-sm">
                      Step {idx + 1}
                    </span>
                    <div className="uppercase text-white">{stepItem.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {finishForm ? (
          <ThankYouComponent />
        ) : (
          <div className="relative">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  {!isLastStep ? "Next Step" : "Finish"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
