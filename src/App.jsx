import { useMutltiStepForm } from "./useMultiStepForm";

export default function App() {
  const { steps, currentStepIndex, step, next, back } = useMutltiStepForm([
    <div>First Step</div>,
    <div>Second Step</div>,
    <h1>Third Step</h1>
  ]);

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial"
      }}
    >
      <form>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem"
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}

        {currentStepIndex > 1 && <button onClick={back}>Back</button>}
        <button onClick={next}>Next</button>
      </form>
    </div>
  );
}
