import Videoplayer from "./video-player.jsx";

export default function Card({ head, text, img, side, top, video }) {
  return (
    <a
      href="#"
      className={`scale-100 h-96 w-80 text-center p-4 m-4 border border-secondary rounded-md shadow-lg shadow-primary hover:shadow-xl hover:shadow-primary hover:skew-x-[${side}] hover:skew-y-[${top}] transition ease-in-out duration-700 hover:scale-125 ${img} bg-cover`}
    >
      <h2 className="z-10 text-primary text-xl my-6 font-rumor">{head}</h2>
      <p className="z-10 text-primary text-md">{text}</p>
      <div
        className={`absolute -z-10 left-0 top-0  min-h-full bg-red-300 rounded-md  ${video} `}
      >
        <Videoplayer />
      </div>
    </a>
  );
}
