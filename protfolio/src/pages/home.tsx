import BackgroundImage from "../assets/Homepage-bg.jpg";
import MainButton from "../components/mainBotton";
import SecondaryButton from "../components/secondaryButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="z-0 h-[100vh] bg-[#EAEFF5] ">
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
          <SecondaryButton onClick={() => navigate("/resume")} text="RESUME" />
        </div>
      </div>
      <div className="relative top-[85%] text-center -mt-14 md:mt-0 mx-auto max-w-[90%] md:max-w-[50%]  shadow-lg shadow-black/50  bg-gradient-to-t from-primary/20 to-white rounded-lg  overflow-hidden">
        <div className=" absolute w-[300px] h-[300px] -top-10 -right-6 bg-primary/20 rounded-full z-0"></div>
        <div className=" absolute w-[100px] h-[100px] -bottom-10 -left-6 bg-primary/10 rounded-full z-0"></div>
        <h1 className="text-3xl md:text-4xl mt-2">Summary</h1>
        <p className="relative p-5 text-lg text-left z-10">
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
    </div>
  );
};

export default Home;
