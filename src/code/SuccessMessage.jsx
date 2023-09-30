import { useParams, useNavigate } from "react-router-dom";

export function SuccessMessage() {
  const navigate = useNavigate();
  const { email } = useParams();

  const onClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col bg-white h-full px-6 py-8 md:h-auto md:max-w-[500px] md:rounded-[32px] md:py-10 md:px-14 md:shadow-2xl md:m-auto">
      <div className="flex flex-1 flex-col mt-40 gap-8 md:mt-0 md:mb-8">
        <div className="bg-icon-success h-[64px] bg-no-repeat"></div>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span> <b>
             {email}
          </b></span>
          
          . Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <button
        className="bg-dark-slate-grey text-white font-bold pb-3 px-4 pt-4 rounded-lg shadow hover:bg-button hover:shadow-button md:mb-4"
        onClick={onClick}
      >
        Dismiss message
      </button>
    </div>
  );
}
