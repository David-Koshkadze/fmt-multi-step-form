import { ReactComponent as ThankYouIcon } from "../assets/images/icon-thank-you.svg";

function ThankYouComponent() {
  return (
    <div className="max-w-md h-full flex flex-col justify-center items-center text-center">
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
  );
}

export default ThankYouComponent;
