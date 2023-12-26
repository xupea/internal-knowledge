import Link from "next/link";
import cx from "classnames";
import styles from "./styles.module.css";

interface Item {
  key: string;
  label: string;
  sub?: Item[];
}

const directionFilter: Item[] = [
  {
    label: "全部",
    key: "all",
  },
  {
    label: "后端/架构",
    key: "backend",
  },
  {
    label: "前端/移动",
    key: "fontend",
  },
];

export default function Filter({ type }: { type: string }) {
  const content = directionFilter.map((item) => (
    <div
      className={cx(styles.item, { [styles.highlight]: type === item.key })}
      key={item.key}
    >
      <Link href={`/filter/${item.key}`}> {item.label}</Link>
    </div>
  ));

  return (
    <div className={styles.outer}>
      <div>方向：</div>
      <div className={styles.container}>{content}</div>
    </div>
  );
}
