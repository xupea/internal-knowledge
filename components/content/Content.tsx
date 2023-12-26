"use client";
import PDFViewer from "../pdf/PDFViewer";
import Video from "../video/Video";

export default function Content({ url }: { url: string }) {
  if (url.endsWith(".mp4")) {
    return <Video url={url} />;
  } else if (url.endsWith(".pdf")) {
    return <PDFViewer url={url} />;
  }

  return null;
}
