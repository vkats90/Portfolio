import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hamburger() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <section className="MOBILE-MENU flex md:hidden">
        <div
          className="HAMBURGER-ICON space-y-2 mt-2 group"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-[3px] w-8  bg-black group-hover:bg-primary transition duration-200"></span>
          <span className="block h-[3px] w-8  bg-black group-hover:bg-primary transition duration-200"></span>
          <span className="block h-[3px] w-8  bg-black group-hover:bg-primary transition duration-200"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav bg-black/80" : "hideMenuNav"}>
          <ul
            className={`relative flex flex-col  text-xl text-gray-600 items-center justify-between min-h-[250px] h-[50%] py-[20%] rounded-lg shadow-sm shadow-white bg-[#EAEFF5] w-[90%] transition duration-300 ${
              isNavOpen ? "translate-x-9" : ""
            }`}
          >
            <div //exit button
              className="absolute top-0 right-0 px-2 py-2"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <Link className="self-center cursor-pointer " to="/resume">
              Resume
            </Link>
            <Link className="self-center cursor-pointer " to="/projects">
              Projects
            </Link>
            <Link className="self-center cursor-pointer " to="/contact">
              Contact
            </Link>
          </ul>
        </div>
      </section>

      <style>{`
      .hideMenuNav {
       
        
      }
      .showMenuNav {
       
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
       
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  );
}
