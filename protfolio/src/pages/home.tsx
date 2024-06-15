import { useCallback, useRef } from "react";
import BackgroundImage from "../assets/Homepage-bg2.jpg";
import MainButton from "../components/mainBotton";
import SecondaryButton from "../components/secondaryButton";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import HighlightCard from "../components/highlight";

const Home = () => {
  const navigate = useNavigate();

  const { ref: inViewRef1, inView: inView1 } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const { ref: inViewRef2, inView: inView2 } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const { ref: inViewRef3, inView: inView3 } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const setRefs = useCallback(
    (
      ref: HTMLDivElement | null,
      inViewRef: (node?: Element | null) => void
    ) => {
      if (ref) {
        inViewRef(ref);
      }
    },
    [inViewRef1, inViewRef2, inViewRef3]
  );

  return (
    <div className="z-0 h-full">
      <div className="relative h-[100vh]">
        <img
          src={BackgroundImage}
          className="absolute top-0 right-0 h-[100vh] max-w-fit z-0 opacity-40 lg:opacity-100"
        />
        <div className="relative z-10 w-fit md:left-[15%] top-[40%] text-center m-auto md:m-0">
          <h1 id="outer">
            <h1
              id="inner"
              className="effect-shine md:text-7xl text-4xl md:my-6 my-2 text-black font-Bebas"
            >
              VLADIMIR KATS
            </h1>
          </h1>
          <p className="md:text-4xl text-xl text-primary font-regular font-Glory [text-shadow:_0_2px_0_rgb(1px_0_0_/_40%)]">
            A FULL STACK SOFTWARE DEVELOPER
          </p>
          <div className="flex md:flex-row flex-col gap-4 mt-8 w-full justify-center items-center ">
            <MainButton onClick={() => navigate("/contact")} text="CONTACT" />
            <SecondaryButton
              onClick={() => navigate("/resume")}
              text="RESUME"
            />
          </div>
        </div>
      </div>
      <div
        id="summary"
        ref={(ref) => setRefs(ref, inViewRef1)}
        className={` top-[85%] text-center -mt-14 md:mt-36 mx-auto max-w-[90%] md:max-w-[50%]  overflow-hidden transition duration-500 ease-in ${
          inView1 ? "opacity-1" : "opacity-0 translate-y-10 blur-md"
        }`}
      >
        <h1 className="text-3xl md:text-5xl my-16 font-Bebas">Summary</h1>
        <p className="relative p-5 text-lg text-left z-10 text-gray-700">
          Passionate and driven web developer with a strong foundation in
          full-stack development and a proven track record in e-commerce and
          operations management. With hands-on experience in Frontend and
          Backend development using the latest technologies such as TypeScript,
          React.js, GraphQL, Node.JS and MongoDB, I have built and maintained
          dynamic web applications, including an interactive game portal and an
          inventory management API. My background in automating processes with
          VBA macros sparked my interest in web development, leading me to a 2
          year journey of self-learning completing the Full Stack Open Online
          Course from the University of Helsinki and the freeCodeCamp online
          course. I am eager to bring my skills in modern web development to a
          forward-thinking team, where I can contribute to building innovative
          solutions and driving digital growth. Let's connect and explore how I
          can add value to your web development projects.
        </p>
      </div>
      <div
        ref={(ref) => setRefs(ref, inViewRef2)}
        id="highlights"
        className={`  text-center -mt-14 md:mt-36 mx-auto max-w-[90%] md:max-w-[70%]  overflow-hidden transition duration-500 ease-in ${
          inView2 ? "opacity-1" : "opacity-0 translate-y-10 blur-md"
        }`}
      >
        <h1 className="text-3xl md:text-5xl my-16 font-Bebas">Highlights</h1>
        <div className="flex flex-wrap justify-center gap-5">
          <HighlightCard
            title="Project Highlight"
            text="This is a brief description of the project. It showcases the main features and objectives of the project in a concise manner."
          />
          <HighlightCard
            title="Project Highlight"
            text="This is a brief description of the project. It showcases the main features and objectives of the project in a concise manner."
          />
          <HighlightCard
            title="Project Highlight"
            text="This is a brief description of the project. It showcases the main features and objectives of the project in a concise manner."
          />
        </div>
      </div>
      <div
        ref={(ref) => setRefs(ref, inViewRef3)}
        id="bonus"
        className={` text-center -mt-14 md:mt-36 mx-auto max-w-[90%] md:max-w-[50%]  overflow-hidden transition duration-500 ease-in ${
          inView3 ? "opacity-1" : "opacity-0 translate-y-10 blur-md"
        }`}
      >
        <h1 className="text-3xl md:text-5xl my-16 font-Bebas">Bonus</h1>
      </div>
    </div>
  );
};

export default Home;
