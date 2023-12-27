"use client";
import ReactPlayer from "react-player";

export default function Video({ url }: { url: string }) {
  return (
    <ReactPlayer
      url={`http://localhost:3000${url}`}
      controls={true}
      width="100%"
      height="100%"
    />
  );
}
