import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="page">
      <main className={styles.start}>
        <h2>Get Started</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>This page is designed to help you figure out where to start with updating your identity documents.</p>
          <p>
            Depending on your situation, you may need to change your name and/or gender marker on various documents. Here are some common scenarios to consider:
          </p>
          {/* <ul>
            <li>If you are changing your name for the first time, start with the Ontario name change process.</li>
            <li>If you have already changed your name and need to update your birth certificate, follow the Ontario birth certificate guide.</li>
            <li>If you need to update your health card, refer to the Ontario health card guide.</li>
            <li>For updating your drivers license or photo card, check out the Ontario drivers licenses and photo cards guide.</li>
            <li>If you are applying for or updating your Canadian passport, follow the Canadian passports guide.</li>
            <li>For permanent resident cards, refer to the Permanent resident cards guide.</li>
            <li>If you need to update your Social Insurance Number, check the Social Insurance Registry guide.</li>
            <li>For tax-related updates, refer to the Canada Revenue Agency guide.</li>
          </ul> */}
          <p>
            Each guide provides step-by-step instructions, required forms, and helpful tips to make the process as smooth as possible. If you have any questions or need further assistance, feel free to reach out through our contact page.
          </p>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}