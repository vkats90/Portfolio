import Header from "../components/header";
import Footer from "../components/footer";

export default function Projects() {
  return (
    <>
      <Header />
      <main className=" min-h-screen bg-gray-800 flex flex-col items-center ">
        <h2 className="text-2xl my-16 text-primary">
          Click on a project to see a preview:
        </h2>
      </main>
      <Footer />
    </>
  );
}
