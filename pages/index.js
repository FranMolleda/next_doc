import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home({ categorias }) {
  return (
    <div className={styles.container}>
      <Header categorias={categorias} />
    </div>
  );
}

export async function getStaticProps(context) {
  const url = process.env.ALL_CATEGORIES;
  const response = await fetch(url);
  const categorias = await response.json();
  console.log(categorias);
  return {
    props: { categorias: categorias.data.categories },
  };
}
