import { ReactComponent as ThankYouIcon } from "../assets/images/icon-thank-you.svg";

function ThankYouComponent() {
  return (
    <div className="grid place-items-center w-[600px]">
      <div className="flex flex-col items-center text-center">
        <ThankYouIcon />
        <div>
          <h1 className="font-ubuntu-bold text-3xl mt-8 mb-4">Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYouComponent;
