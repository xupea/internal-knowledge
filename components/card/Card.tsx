import Image from "next/image";
import Link from "next/link";

export default function Card({ course }: { course: any }) {
  const { content, title } = course;
  return (
    <Link href={`/column/article/${content[0].id}`}>
      <div
        className="flex flex-row p-3"
        style={{
          width: 300,
          minWidth: 300,
          paddingBottom: 20,
          paddingLeft: 20,
          borderRadius: 8,
          boxShadow: "0 4px 20px 0 rgba(216,220,223,.8)",
        }}
      >
        <Image
          src={"http://localhost:8080/default.webp"}
          alt=""
          width={102}
          height={134}
          style={{ width: 102, height: 134 }}
        />
        <div className="flex flex-col justify-between p-1">
          <div>{title}</div>
          <div>{content.length}课时</div>
        </div>
      </div>
    </Link>
  );
}
