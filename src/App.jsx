import { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { SelectPlanForm } from "./SelectPlanForm";
import { AccountForm } from "./AccountForm";
import { useMutltiStepForm } from "./useMultiStepForm";

const INITIAL_DATA = {
  username: "",
  emailAddress: "",
  phoneNumber: "",
  street: "",
  city: "",
  email: "",
  password: "",
};

export default function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMutltiStepForm([
      <PersonalInfoForm {...data} updateFields={updateFields} />,
      <SelectPlanForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert(JSON.stringify(data));
  }

  return (
    <div className="w-full h-screen bg-light-gray grid place-items-center font-ubuntu">
      <div className="flex gap-24 bg-white p-4 shadow-sm rounded-2xl pr-24">
        <div className="rounded-2xl w-56 bg-green-500 pt-12 pl-8 bg-[url('./assets/images/bg-sidebar-desktop.svg')]">
          <div className="flex flex-col w-full gap-4 mx-auto">
            {Array.from({ length: steps.length }, (_, index) => index + 1).map(
              (stepItem, idx) => {
                return (
                  <div key={idx} className="flex w-full gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-teal-500 border border-white grid place-items-center">
                      <span>{idx + 1}</span>
                    </div>
                    <div>
                      <span className="uppercase text-cool-gray text-sm">
                        Step {idx + 1}
                      </span>
                      <div className="uppercase text-white">Personal Info</div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            {step}
            <div
              className={`${
                !isFirstStep ? "justify-between" : "justify-end"
              } flex mt-4 mb-4`}
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
      </div>
    </div>
  );
}
