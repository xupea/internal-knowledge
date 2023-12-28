"use client";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

export default function PDFViewer({ url }: { url: string }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
      <div
        style={{
          height: "100%",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Viewer
          fileUrl={`http://${document.location.hostname}:8080${url}`}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
}
