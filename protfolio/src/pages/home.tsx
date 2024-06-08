import BackgroundImage from "../assets/Homepage-bg.jpg";
import MainButton from "../components/mainBotton";
import SecondaryButton from "../components/secondaryButton";

const Home = () => {
  return (
    <div className="z-0 h-[100vh] bg-[#EAEFF5]">
      <img
        src={BackgroundImage}
        className="absolute top-0 right-0 h-[100vh] max-w-fit z-0 opacity-40 lg:opacity-100"
      />
      <div className="relative z-10 w-fit md:left-[15%] top-[40%] text-center m-auto md:m-0">
        <h1 id="outer">
          <h1
            id="inner"
            className="effect-shine md:text-6xl text-4xl md:my-6 my-2 text-black"
          >
            VLADIMIR KATS
          </h1>
        </h1>
        <p className="md:text-xl text-lg text-primary font-light">
          A FULL STACK SOFTWARE DEVELOPER
        </p>
        <div className="flex md:flex-row flex-col gap-4 mt-8 w-full items-center">
          <MainButton text="CONTACT" />
          <SecondaryButton text="RESUME" />
        </div>
      </div>
      <div className="relative top-[85%] text-center -mt-14 md:mt-0 mx-auto max-w-[90%] md:max-w-[50%] border-2 shadow-lg shadow-black/50 border-primary bg-gradient-to-t from-primary/20 to-white rounded-lg  overflow-hidden">
        <div className=" absolute w-[300px] h-[300px] -top-10 -right-6 bg-primary/20 rounded-full z-0"></div>
        <div className=" absolute w-[100px] h-[100px] -bottom-10 -left-6 bg-primary/10 rounded-full z-0"></div>
        <h1 className="text-3xl md:text-4xl mt-2">Summary</h1>
        <p className="relative p-5 text-left z-10">
          Experienced professional with a strong background in operations
          management, procurement, and web development. Demonstrated success in
          leading teams, streamlining processes, and driving efficiency in
          e-commerce and construction industries. Self taught full-stack web
          development with proficiency in TypeScript, React.js, and GraphQL.
          Completed the Full Stack Open Online Course from the University of
          Helsinki, specializing in modern web development techniques and tools.
          Open to new challenges and eager to contribute to dynamic teams in the
          digital space.
        </p>
      </div>
    </div>
  );
};

export default Home;
