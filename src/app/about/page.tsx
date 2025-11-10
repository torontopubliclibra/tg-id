import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="page">
      <main className={styles.about}>
        <h2>About TG I.D.</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>TG I.D. is an online resource collecting information on how to update legal names, gender markers, and identity documents in Ontario, Canada. Please note however that this site does not provide legal advice.</p>
          <p>The project is led by <Link href="https://danateagle.com" target='blank' rel='norefferer'>Dana Rosamund Teagle</Link>—a designer and web/software developer based in Toronto. Since 2021, she has run workshops on name and gender marker changes for a range of organizations. To learn more about booking her for in-person or online presentations, please visit <Link href="/workshops">our workshops page</Link>.</p>
          <br />
          <h3 id='changelog'>Changelog</h3>
          <ul>
            <li>v1.0.0 - </li>
          </ul>
          <br />
          <h3 id='sitemap'>Sitemap</h3>
          <ul className={styles.sitemap}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link> <small>(you are here)</small></li>
            <li>
              <Link href="/guides">Guides</Link>
              <ul>
                <li><Link href="/on/name">Ontario legal names</Link></li>
                <li><Link href="/on/birth">Ontario birth certificates</Link></li>
                <li><Link href="/on/health">Ontario health cards</Link></li>
                <li><Link href="/on/license">Ontario drivers licenses and photo cards</Link></li>
                <li><Link href="/travel">Canadian passports</Link></li>
                <li><Link href="/residency">Permanent resident cards</Link></li>
                <li><Link href="/sin">Social Insurance Registry</Link></li>
                <li><Link href="/cra">Canada Revenue Agency</Link></li>
              </ul>
            </li>
            <li><Link href="/workshops">Workshops</Link></li>
            <li><Link href="/downloads">Downloads</Link></li>
          </ul>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}