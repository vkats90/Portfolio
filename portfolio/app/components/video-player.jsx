"use client";
import { useState } from "react";

export default function Videoplayer() {
  const [autoPlay, setAutoPlay] = useState(false);
  return (
    <video
      id="vid"
      className="rounded-md z-0"
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
