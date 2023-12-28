"use client";
import Card from "@/components/card/Card";
import styles from "./styles.module.css";
import { updateCourse } from "../../utils/api";

export default function Tag({ courses }: { courses: any }) {
  const handleCategoryChange = async (value: string, id: number) => {
    await updateCourse(id, "direction", value);
  };

  const handleVisibleChange = async (value: boolean, id: number) => {
    await updateCourse(id, "hidden", value);
  };

  const content = courses.map((course: any) => {
    return (
      <div key={course.id} className={styles.container}>
        <Card course={course} />

        <select
          name="all"
          defaultValue={course.direction || 'all'}
          onChange={(event) =>
            handleCategoryChange(event.target.value, course.id)
          }
        >
          <option value="all">全部</option>
          <option value="backend">后端/架构</option>
          <option value="fontend">前端/移动</option>
        </select>

        <div>
          隐藏?：
          <input
            type="checkbox"
            defaultChecked={!!course.hidden}
            onChange={(event) =>
              handleVisibleChange(event.target.checked, course.id)
            }
          ></input>
        </div>
      </div>
    );
  });
  return content;
}
