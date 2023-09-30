import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AppForm() {
  return (
    <div className="flex flex-col bg-white h-full m-auto md:h-auto md:flex-row-reverse md:max-w-[900px] md:rounded-[32px] md:p-6 md:shadow-2xl">
      <div className="bg-illustration-mobile bg-no-repeat w-full bg-cover bg-center min-h-[284px] rounded-b-3xl md:bg-illustration-desktop md:rounded-xl md:w-auto md:min-w-[400px] md:min-h-[593px] md:bg-contain md:bg-right"></div>
      <MainContent />
    </div>
  );
}

function MainContent() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onSubmit = (data) => {
    const email = data.email;
    if (emailRegex.test(email)) {
      let path = "success/" + data.email;
      navigate(path);
    } else {
      const email = document.getElementById("email");
      email.style.color = "#FF0000";
      email.style.borderColor = "#FF0000";
      email.style.background = "#FFE8E5";

      const inValidText = document.getElementById("invalid-text");
      inValidText.style.visibility = "visible";
    }
  };

  return (
    <div className="flex flex-col gap-6 px-6 py-8 md:py-0 md:self-center">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <form
        className="flex flex-col mt-2"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="mb-6">
          <div className=" flex flex-row">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 flex-1"
              htmlFor="email"
            >
              Email address
            </label>
            {
              <p id="invalid-text" className="text-sm text-[#ff0000] invisible">
                Valid email required
              </p>
            }
          </div>

          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 border-grey outline-dark-slate-grey hover:border-dark-slate-grey selection:bg-grey  selection:text-white invalid:bg-[#FFE8E5]"
            id="email"
            placeholder="email@company.com"
            {...register("email")}
          />
        </div>
        <button
          type="submit"
          className="bg-dark-slate-grey text-white font-bold pb-3 px-4 pt-4 rounded-lg shadow hover:bg-button hover:shadow-button"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}
