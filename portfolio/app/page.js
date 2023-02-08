import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen bg-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-7xl text text-slate-300">Vlad's Portfolio</h1>
    </main>
  );
}
