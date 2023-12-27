import styles from "./styles.module.css";
import { customFetch } from "@/utils/api";
import Tag from "@/components/tag/Tag";

async function getCourseData(id: string) {
  return customFetch(`/courses`);
}

export default async function Page({ params }: { params: { did: string } }) {
  const courseData = await getCourseData(params.did);

  return (
    <div className={styles.container}>
      <div className={styles.content}><Tag courses={courseData} /></div>
    </div>
  );
}
