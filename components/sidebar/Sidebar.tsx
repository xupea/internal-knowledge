interface Article {
  id: number;
  title: string;
  path: string;
}

// replace .pdf or .ts in a string
const replace = (str: string) => str.replace(/\.[^.]+$/, "");

export default function ArticleList(props: { content: Article[] }) {
  const articles = props.content;
  const listItems = articles.map((article) => (
    <li key={article.id}>
      <a href={`/column/article/${article.id}`}>{replace(article.title)}</a>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
