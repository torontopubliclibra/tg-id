import styles from "./page.module.css";

export default function Workshops() {
  return (
    <div className="page">
      <main className={styles.workshops}>
        <h2>Workshops</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>Dana Rosamund Teagle brings years of experience supporting trans, non-binary, Two-Spirit, and gender non-conforming communities in Ontario through practical guidance on name and gender marker changes. She has presented for organizations such as LGBT YouthLine, Windsor Hackforge, CUPE 3902, CUPE 3903, and CAMH.</p>
          <p>Workshops are typically 45 to 90 minutes long and can be delivered in-person, virtually, or in a hybrid format. A question and answer period can be accommodated upon request. Honourariums are flexible and can be adjusted to fit your organization&apos;s budget. While commissioning services are not provided, Dana is happy to offer recommendations for further support or resources.</p>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}