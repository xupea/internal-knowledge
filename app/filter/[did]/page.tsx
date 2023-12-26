import styles from "./styles.module.css";
import { customFetch } from "@/utils/api";
import Filter from "@/components/filter/Filter";
import Card from "@/components/card/Card";

async function getCourseData(id: string) {
  return customFetch(`/courses`);
}

export default async function Page({ params }: { params: { did: string } }) {
  const courseData = await getCourseData(params.did);
  const content = courseData.map((course: any) => {
    return <Card key={course.id} course={course} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Filter type={params.did} />
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
