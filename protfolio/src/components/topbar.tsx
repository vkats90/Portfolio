import { Link, useNavigate } from "react-router-dom";
import Hamburger from "./hamburger";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed flex flex-row w-full  px-5  h-10 z-30 bg-gradient-to-r from-white/0 to-white/50 ">
      <Hamburger />
      <div
        id="logo"
        className="flex-none flex flex-col  flex-grow md:flex-none text-center md:text-left cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1 className="text-xl md:text-2xl font-Bebas ">
          VL<span className="text-primary">A</span>D
        </h1>
        <h1 className="-my-3 translate-x-2    p-0 text-xl md:text-2xl font-Bebas">
          K<span className="text-primary">A</span>TS
        </h1>
      </div>
      <div
        id="links"
        className=" flex-grow text-xl pr-10 hidden md:flex flex-row justify-end gap-4   items-stretch "
      >
        {location.pathname != "/" && (
          <Link
            className="self-center cursor-pointer hover:text-primary"
            to="/"
          >
            Home
          </Link>
        )}
        {location.pathname != "/resume" && (
          <Link
            className="self-center cursor-pointer hover:text-primary"
            to="/resume"
          >
            Resume
          </Link>
        )}
        {location.pathname != "/projects" && (
          <Link
            className="self-center cursor-pointer hover:text-primary"
            to="/projects"
          >
            Projects
          </Link>
        )}
        {location.pathname != "/contact" && (
          <Link
            className="self-center cursor-pointer hover:text-primary"
            to="/contact"
          >
            Contact
          </Link>
        )}
      </div>
      <div
        id="social"
        className="flex-none flex flex-row justify-end items-stretch gap-4"
      >
        <div
          className="w-8 h-8 self-center cursor-pointer transition duration-200 hover:fill-primary"
          onClick={() =>
            window.open("https://www.linkedin.com/in/vladimirkats/")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
          >
            <path d="M25,2C12.3,2,2,12.3,2,25s10.3,23,23,23s23-10.3,23-23S37.7,2,25,2z M19,35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20 c0-0.5,0.5-1,1-1h4c0.5,0,1,0.5,1,1V35z M16,18c-1.6,0-3-1.4-3-3s1.4-3,3-3s3,1.4,3,3S17.6,18,16,18z M38,35c0,0.5-0.5,1-1,1h-4 c-0.5,0-1-0.5-1-1v-7.5c0-1.4-1.1-2.5-2.5-2.5S27,26.1,27,27.5V35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20c0-0.5,0.5-1,1-1h4 c0.5,0,1,0.4,1,1c1.1-0.6,2.2-1,3.5-1c4.1,0,7.5,3.4,7.5,7.5V35z"></path>
          </svg>
        </div>
        <div
          className="w-9 h-9 self-center cursor-pointer transition duration-200 hover:fill-primary"
          onClick={() => window.open("https://github.com/vkats90")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
