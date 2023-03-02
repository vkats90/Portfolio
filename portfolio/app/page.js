import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Obstructor from "./utils/Obstructor.js";
import Card from "./components/card.jsx";
import Galary from "./components/galary.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" min-h-screen bg-gray-800 flex flex-col items-center ">
        <h1 className="my-8 text-7xl text text-primary ">Hello</h1>
        <p className="text-primary text-5xl my-8 ">
          My name is
          <span className="text-secondary font-pacifica font-bold"> Vlad</span>
        </p>
        <div className="grid grid-cols-2  justify-around">
          <Card
            head="I do Photography"
            text="Mostly for fun but some say I have a knack for it :)"
            img="bg-bg_image"
            side="2deg"
            video="hidden"
            top="-2deg"
            link="/Photography"
          ></Card>
          <Card
            top="2deg"
            side="-2deg"
            head="I develop websites"
            text="Just like this website!"
            link="/Projects"
          ></Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
