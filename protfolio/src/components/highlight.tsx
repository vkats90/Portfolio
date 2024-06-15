import React from "react";
import { useInView } from "react-intersection-observer";

interface HighlightCardProps {
  title: string;
  text: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <div
      ref={ref}
      className={`max-w-sm mx-auto transition duration-500 ease-in ${
        inView ? "opacity-1" : "opacity-0 translate-y-5 blur-sm"
      } rounded-lg overflow-hidden`}
    >
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <hr className="border-t-2 border-primary my-2" />
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
};

export default HighlightCard;
