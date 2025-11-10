import styles from "./page.module.css";

export default function Downloads() {
  return (
    <div className="page">
      <main className={styles.downloads}>
        <h2 className="page-title">Downloads</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}></div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}