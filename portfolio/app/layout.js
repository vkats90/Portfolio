import "./globals.css";
import { Anton } from "@next/font/google";

const anton = Anton({
  variable: "--font-anton",
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={"$(anton.variable)"}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
