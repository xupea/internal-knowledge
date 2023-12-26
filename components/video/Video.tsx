"use client";
import ReactPlayer from "react-player";

export default function Video({ url }: { url: string }) {
  return (
    <ReactPlayer
      url={`http://10.0.0.100:3000${url}`}
      controls={true}
      width="100%"
      height="100%"
    />
  );
}
