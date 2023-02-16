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
    <div
      className="relative bg-white border border-black rounded-lg p-8 m-4 w-max"
    >
      <form onSubmit={handleSubmit}>
        <div className="absolute top-2 right-2">
          {currentStepIndex + 1} / {steps.length}
        </div>
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
          <button type="submit" className="bg-green-500 py-2 px-4 rounded-lg">
            {!isLastStep ? "Next" : "Finish"}
          </button>
        </div>
      </form>
    </div>
  );
}
