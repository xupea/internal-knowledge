import Content from "@/components/content/Content";
import ArticleList from "@/components/sidebar/Sidebar";
import styles from "./styles.module.css";
import { customFetch } from "@/utils/api";
import Title from "@/components/title/Title";

async function getCourseData(id: string) {
  return customFetch(`/courses/${id}`);
}

async function getArticleData(id: string) {
  return customFetch(`/articles/${id}`);
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const courseData = await getCourseData(params.id);
  return { title: courseData.title}
}

export default async function Page({ params }: { params: { id: string } }) {
  const courseData = await getCourseData(params.id);
  const articleData = await getArticleData(params.id);
  console.log(articleData)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Title title={courseData.title} />
        <ArticleList content={courseData.content} current={params.id} />
      </div>
      <div className={styles.right}>
        <Content url={articleData.path} />
      </div>
    </div>
  );
}
