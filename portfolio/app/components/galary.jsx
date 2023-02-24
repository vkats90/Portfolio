import Image from "next/image";

export default function Galary() {
  let images = [
    "/assets/DSC04597-1.jpg",
    "/assets/DSC04611-2.jpg",
    "/assets/DSC04693-3.jpg",
    "/assets/DSC05338-1.jpg",
    "/assets/DSC05356-1.jpg",
    "/assets/DSC05463-1.jpg",
    "/assets/DSC05489-2.jpg",
    "/assets/DSC05491-3.jpg",
    "/assets/DSC05569-1.jpg",
    "/assets/DSC05723-5.jpg",
    "/assets/Sunset-trees.jpg",
  ];
  return (
    <div className=" grid grid-flow-row grid-cols-5 w-fit my-4 justify-center">
      {images.map((x, i) => (
        <Image src={x} key={i} width={200} height={250} />
      ))}
      <div className="h-60 w-60  border border-priamry"></div>
    </div>
  );
}
