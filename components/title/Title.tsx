import styles from "./styles.module.css";

export default function Title({ title }: { title: string }) {
  return (
    <div className={styles.title} title={title}>
      {title}
    </div>
  );
}
