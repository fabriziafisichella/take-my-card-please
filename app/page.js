
import styles from "./page.module.css";
import Card from "./components/Card/Card";
import { Form } from "./components/Form/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <Form />
      <Card />
    </main>
  );
}
