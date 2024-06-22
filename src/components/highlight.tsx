import React from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

interface HighlightCardProps {
  title: string;
  text: string;
  link: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, text, link }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <div
      ref={ref}
      className={`max-w-sm mx-auto transition duration-500 ease-in h-[200px] min-h-fit relative  ${
        inView ? "opacity-1" : "opacity-0 translate-y-5 blur-sm"
      } rounded-lg overflow-hidden`}
    >
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <hr className="border-t-2 border-primary my-2" />
        <p className="text-gray-7000 text-base">{text}</p>
      </div>
      <button
        className="absolute bottom-0 right-[50%] translate-x-[50%] text-primary hover:text-emerald-800"
        onClick={() => navigate(link)}
      >
        Read more
      </button>
    </div>
  );
};

export default HighlightCard;
