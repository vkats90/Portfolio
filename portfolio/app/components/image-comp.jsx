import Image from "next/image";

export default function ImageComp(src, key) {
  return (
    <div>
      <Image
        key={key}
        className="hover:scale-125 hover:!opacity-100 transition ease-in-out duration-700 hover:z-20"
        src={src.src}
        width={400}
        height={500}
      />
    </div>
  );
}
