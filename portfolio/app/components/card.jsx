import Videoplayer from "./video-player.jsx";

export default function Card({ head, text, img, side, top, video, link }) {
  return (
    <a
      href={link}
      className={`scale-100 md:h-96 md:w-80 h-80 w-64 hover:z-10 text-center p-4 m-4 border border-secondary rounded-md shadow-lg shadow-primary hover:shadow-xl hover:shadow-primary hover:skew-x-[${side}] hover:skew-y-[${top}] transition ease-in-out duration-700 hover:scale-110 ${img} bg-cover`}
    >
      <h2 className=" text-primary md:text-xl my-6 z-20 font-rumor">{head}</h2>
      <p className=" text-primary z-20 text-md">{text}</p>
      <div
        className={`absolute left-0 top-0  min-h-full bg-stone-900 rounded-md  ${video} `}
      >
        <Videoplayer />
      </div>
    </a>
  );
}
