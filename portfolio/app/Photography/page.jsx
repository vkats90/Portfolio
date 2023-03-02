import Galary from "../components/galary";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Photography() {
  return (
    <>
      <Header />
      <main className=" min-h-screen bg-gray-800 flex flex-col items-center ">
        <h2 className="text-2xl my-16 text-primary">
          Click on a picture for full screen view:
        </h2>
        <Galary />
      </main>
      <Footer />
    </>
  );
}
