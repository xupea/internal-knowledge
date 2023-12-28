import styles from "./styles.module.css";
import { customFetch } from "@/utils/api";
import Tag from "@/components/tag/Tag";

async function getCourseData() {
  return customFetch(`/courses/all`);
}

export default async function Admin() {
  const courseData = await getCourseData();

  return (
    <div className={styles.container}>
      <div className={styles.content}><Tag courses={courseData} /></div>
    </div>
  );
}
