import { UserForm } from "./UserForm";
import { AddressForm } from "./AddressForm";
import { AccountForm } from "./AccountForm";
import { useMutltiStepForm } from "./useMultiStepForm";

export default function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMutltiStepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  return (
    <div className="relative bg-white border border-black rounded-lg p-8 m-4">
      <form>
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
          <button
            type="button"
            onClick={next}
            className="bg-green-500 py-2 px-4 rounded-lg"
          >
            {!isLastStep ? "Next" : "Finish"}
          </button>
        </div>
      </form>
    </div>
  );
}
