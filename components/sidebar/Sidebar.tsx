import Link from "next/link";
import cx from "classnames";
import styles from "./styles.module.css";

interface Article {
  id: number;
  title: string;
  path: string;
}

export default function ArticleList(props: {
  content: Article[];
  current: string;
}) {
  const articles = props.content;
  const current = props.current;
  const listItems = articles.map((article) => (
    <li
      className={cx(styles.item, {
        [styles.highlight]: +current === article.id,
      })}
      key={article.id}
    >
      <Link href={`/column/article/${article.id}`}>{article.title}</Link>
    </li>
  ));
  return <ul className={styles.list}>{listItems}</ul>;
}
