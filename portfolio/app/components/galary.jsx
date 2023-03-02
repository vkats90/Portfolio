import Image from "next/image";
import ImageComp from "./image-comp";

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
  ];
  return (
    <div className=" md:mx-16 mx-6 p-2 border [&:hover>img]:opacity-50 border-secondary rounded-md grid grid-flow-dense grid-cols-3 lg:grid-cols-5 w-fit my-4 justify-center">
      {images.map((x, i) => (
        <ImageComp key={i} src={x} />
      ))}
    </div>
  );
}
