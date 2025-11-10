import Link from "next/link";
import styles from "./page.module.css";

export default function Guides() {
  return (
    <div className="page">
      <main className={styles.guides}>
        <h2>Guides</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <h3>Ontario</h3>
          <ul>
            <li>
              <Link href="/on/name">Legal name changes</Link>
            </li>
            <li>
              <Link href="/on/birth">Birth certificate updates</Link>
            </li>
            <li>
              <Link href="/on/health">Health card updates</Link>
            </li>
            <li>
              <Link href="/on/license">Drivers license and photo card updates</Link>
            </li>
          </ul>
          <h3>Canada-wide</h3>
          <ul>
            <li>
              <Link href="/travel">Passport updates</Link>
            </li>
            <li>
              <Link href="/residency">Permanent resident card updates</Link>
            </li>
            <li>
              <Link href="/residency">Social Insurance Registry updates</Link>
            </li>
            <li>
              <Link href="/residency">Canada Revenue Agency updates</Link>
            </li>
          </ul>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}