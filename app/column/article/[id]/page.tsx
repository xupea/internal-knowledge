import Content from "@/components/content/Content";
import ArticleList from "@/components/sidebar/Sidebar";
import styles from "./styles.module.css";

async function getCourseData(id: string) {
  const res = await fetch(`http://10.0.0.135:8080/courses/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getArticleData(id: string) {
  const res = await fetch(`http://10.0.0.135:8080/articles/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const courseData = await getCourseData(params.id);
  const articleData = await getArticleData(params.id);
  console.log(articleData);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ArticleList content={courseData.content} />
      </div>
      <div className={styles.right}>
        <Content url={articleData.path} />
      </div>
    </div>
  );
}
