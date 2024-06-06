import BackgroundImage from "../assets/Homepage-bg.jpg";
import MainButton from "../components/mainBotton";
import SecondaryButton from "../components/secondaryBotto";

const Home = () => {
  return (
    <div className="z-0 h-[100vh]">
      <img src={BackgroundImage} className="absolute top-0 w-full z-0" />
      <div className="relative z-10 w-fit left-[15%] top-[40%] text-center">
        <h1 className=" text-6xl">VLADIMIR KATS</h1>
        <p className="text-xl text-primary font-light">
          A FULL STACK SOFTWARE DEVELOPER
        </p>
        <div className="flex flex-row gap-4 my-8">
          <MainButton text="CONTACT" />
          <SecondaryButton text="RESUME" />
        </div>
      </div>
    </div>
  );
};

export default Home;
