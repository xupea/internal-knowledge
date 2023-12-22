import PDFViewer from "../pdf/PDFViewer";

export default function Content({ url }: { url: string }) {
  return <PDFViewer url={url} />;
}
