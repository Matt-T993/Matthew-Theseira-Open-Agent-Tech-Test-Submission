import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const ThankYou = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col mt-[150px]  items-center justify-center space-y-4 text-center   ">
      <div className="border-4 border-[#00AB55] rounded-full p-4 flex mb-8">
        <TiTick className="text-7xl  text-[#068c49]" />
      </div>

      <h1 className=" text-2xl mt-4  md:text-4xl">
        Thank you for contacting us!
      </h1>
      <div className="mt-4 space-y-1">
        <p className="md:text-lg">We have received your messsage! </p>
        <p className="md:text-lg ">We will get back to you shortly! </p>
      </div>
      <button onClick={handleRedirect} className=" py-2 px-3 btn">
        Go back to Contact Us
      </button>
    </div>
  );
};

export default ThankYou;
