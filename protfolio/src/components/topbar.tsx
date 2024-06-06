import { Link } from "react-router-dom";
import LinkedInIcon from "../assets/linkedin.png";
import GithubIcon from "../assets/github.png";

const TopBar = () => {
  return (
    <div className="fixed flex flex-row w-full  px-5  h-10 z-30 bg-gradient-to-r from-white/0 to-white/50 ">
      <div id="logo" className="flex-none flex flex-col ">
        <h1 className="text-lg">VLAD</h1>
        <h1 className="-my-2 mx-3 p-0 text-lg">KATS</h1>
      </div>
      <div
        id="links"
        className=" flex-grow  pr-10 flex flex-row justify-end gap-4   items-stretch "
      >
        <Link className="self-center cursor-pointer " to="/resume">
          Resume
        </Link>
        <Link className="self-center cursor-pointer " to="/projects">
          Projects
        </Link>
        <Link className="self-center cursor-pointer " to="/contact">
          Contact
        </Link>
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
