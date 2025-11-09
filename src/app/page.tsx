import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="page">
      <main className={styles.main}>
        <div className={styles.intro}>
          <div>
            <p className={styles.headline}>
              We all deserve I.D.s that reflect our lives <em><small>(and don&apos;t make them any more difficult)</small></em>.
            </p>
            <p>
              Changing your legal name and gender marker across all of your identity documents in Ontario is a complex and frustrating process. <strong>TG I.D.</strong> is here to help make it easier by providing <Link href="/guides">step-by-step guides</Link>, <Link href="/downloads">downloadable forms</Link>, and <Link href="/workshops">resources to support you</Link> through the journey.
            </p>
            <p>Let&apos;s make I.D. changes accessible to everyone.</p>
          </div>
          <div className={styles.group}>
            <div className="stacks flipped"></div>
            <div className={styles.guides}>
              <h2>Step-by-step guides on:</h2>
              <ul>
                <li>
                  <Link href="/on/name">Ontario legal name changes</Link>
                </li>
                <li>
                  <Link href="/on/birth">Ontario birth certificate updates</Link>
                </li>
                <li>
                  <Link href="/on/health">Ontario health card updates</Link>
                </li>
                <li>
                  <Link href="/on/id">Ontario drivers license and photo card updates</Link>
                </li>
                <li>
                  <Link href="/travel">Canadian passport updates</Link>
                </li>
                <li>
                  <Link href="/residency">Permanent resident card updates</Link>
                </li>
                <li>
                  <Link href="/guides">and more...</Link>
                </li>
              </ul>
            </div>
            <div className="stacks"></div>
          </div>
        </div>
      </main>
    </div>
  );
}