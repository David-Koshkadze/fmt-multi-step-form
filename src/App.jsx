import { useState } from "react";
import { UserForm } from "./UserForm";
import { AddressForm } from "./AddressForm";
import { AccountForm } from "./AccountForm";
import { useMutltiStepForm } from "./useMultiStepForm";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
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
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert(JSON.stringify(data));
  }

  return (
    <div className="w-full h-screen bg-light-gray grid place-items-center">
      <div className="flex gap-8 bg-white p-4 shadow-sm rounded-2xl w-3/4">
        <div className="rounded-2xl w-56 bg-green-500 pt-12 pl-8">
          <div className="flex flex-col w-full gap-4 mx-auto">
            {Array.from({ length: steps.length }, (_, index) => index + 1).map(
              (stepItem, idx) => {
                return (
                  <div key={idx} className="flex w-full gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-teal-500 border border-white grid place-items-center">
                      <span>{idx + 1}</span>
                    </div>
                    <div>
                      <span>Step {idx + 1}</span>
                      <div>Personal Info</div>
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
            <div className="flex gap-4 mt-4 justify-end">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  className="bg-green-500 py-2 px-4 rounded-lg"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="bg-green-500 py-2 px-4 rounded-lg"
              >
                {!isLastStep ? "Next" : "Finish"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
