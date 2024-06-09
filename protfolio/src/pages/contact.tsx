import Input from "../components/Input";
import TextArea from "../components/TextArea";
//import emailjs from "@emailjs/browser";

const Contact = () => {
  /* const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ut56vmi", "template_10fl34t", form.current, {
        publicKey: "b93puRb5Dm3NaiYqW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };*/

  return (
    <div className="z-0 h-[100vh] flex  bg-[#EAEFF5]  items-center justify-center">
      <div className="w-[400px] py-10 flex flex-col items-center justify-center  ">
        <h1 id="outer">
          <h1
            id="inner"
            className="effect-shine md:text-6xl text-5xl md:my-6 my-2 text-black font-Bebas"
          >
            Let's talk
          </h1>
        </h1>
        <form className=" flex flex-col gap-3 items-end justify-center">
          <Input text="First Name" />
          <Input text="Company" />
          <Input text="Phone" />
          <Input text="Email" type="email" />

          <TextArea text="Message" />
          <button
            type="submit"
            // onClick={handleSubmit}
            className="px-10 py-1 text-xl m-auto rounded-lg my-4 text-black border-2 border-primary shadow-md shadow-black/30  hover:bg-emerald-800 hover:bg-opacity-30 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
