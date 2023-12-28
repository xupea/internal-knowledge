"use client";
import ReactPlayer from "react-player";

export default function Video({ url }: { url: string }) {
  return (
    <ReactPlayer
      url={`http://${document.location.hostname}:8080${url}`}
      controls={true}
      width="100%"
      height="100%"
      config={{
        file: {
          attributes: {
            crossOriginIsolated: true,
          },
        },
      }}
    />
  );
}
