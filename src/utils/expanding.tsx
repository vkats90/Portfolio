import { ReactNode, useState } from "react";

const Expanding = ({ children }: { children: ReactNode }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="relative pb-12 transition duration-300 ">
      <div className={` ${!showMore ? "h-56" : "h-fit"} overflow-hidden `}>
        <div
          className={` absolute bg-gradient-to-b from-transparent ${
            !showMore ? "to-gray-100" : "invisible"
          }  w-full h-full `}
        ></div>
        {children}
      </div>
      <button
        onClick={toggleShowMore}
        className="text-primary hover:text-primary/50 absolute bottom-0 left-4 "
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Expanding;
