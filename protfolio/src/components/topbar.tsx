import { Link, useNavigate } from "react-router-dom";
import LinkedInIcon from "../assets/linkedin.png";
import GithubIcon from "../assets/github.png";
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
        <img
          src={LinkedInIcon}
          onClick={() =>
            window.open("https://www.linkedin.com/in/vladimirkats/")
          }
          className="w-7 h-7 self-center cursor-pointer"
        />
        <img
          src={GithubIcon}
          onClick={() => window.open("https://github.com/vkats90")}
          className="w-7 h-7 self-center cursor-pointer "
        />
      </div>
    </div>
  );
};

export default TopBar;
