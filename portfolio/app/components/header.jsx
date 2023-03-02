"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathName = usePathname();
  return (
    <nav className="sticky top-0 z-50 flex justify-between px-4 py-2 flex-wrap bg-gray-800 items-center text-primary border-b border-slate-50 ">
      <Link href="/" className="grid grid-1 ">
        <h3 className="font-pacifica text-xl font-bold">NOMAD</h3>
        <h3 className="w-20 pl-6 font-pacifica text-xl font-bold italic  text-secondary leading-3">
          VLAD
        </h3>
      </Link>
      <div className="flex gap-4 align-center justify-self-end text-lg">
        <Link href="#" className="hover:text-secondary transition duration-300">
          {pathName != "/" ? "Home" : ""}
        </Link>
        {["/Projects", "/Photography", "/About"].map((p) =>
          pathName != p ? (
            <Link
              href={p}
              className="hover:text-secondary transition duration-300"
            >
              {p.slice(1)}
            </Link>
          ) : (
            ""
          )
        )}
      </div>
      <div className="flex gap-2">
        <button className="border border-secondary rounded-md px-2 py-1 hover:text-secondary transition duration-300">
          Login
        </button>
        <button className="border border-secondary rounded-md px-2 py-1 hover:text-secondary transition duration-300">
          Register
        </button>
      </div>
    </nav>
  );
}
