import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen bg-gray-800 flex flex-col items-center justify-center">
      <header className="absolute top-0 grid grid-cols-2 p-4 pt-2 w-screen items-center text-slate-50 h-12 border-b border-slate-50 ">
        <div className="grid grid-1">
          <h3 className="font-anton">NOMAD</h3>
          <h3 className="w-20 pl-6">VLAD</h3>
        </div>
        <div className="flex gap-4 align-center justify-self-end">
          <h4> Work</h4>
          <h4>photography</h4>
          <h4>about</h4>
        </div>
      </header>
      <h1 className="text-7xl text font-anton text-slate-300">
        Vlad's Portfolio
      </h1>
    </main>
  );
}
