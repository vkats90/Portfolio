"use client";
import { useState, useEffect } from "react";

export default function Videoplayer() {
  const [autoPlay, setAutoPlay] = useState(false);
  useEffect(() => {}, []);
  return (
    <video
      id="vid"
      className=""
      onMouseEnter={() => setAutoPlay(true)}
      onMouseLeave={() => setAutoPlay(false)}
      loop
      muted
      autoPlay={autoPlay}
    >
      <source src={"/codingbg.mp4"} type="video/mp4" />
    </video>
  );
}
