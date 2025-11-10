import Link from 'next/link';
import styles from "./page.module.css";

export default function OnHealth() {
  return (
    <div className="page">
      <main className={styles.about}>
        <h2 className="page-title">Ontario health cards</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>

          <div className="pageNav">
            <p>Jump to: </p>
            <ul>
              <li><Link href="#process">Process</Link></li>
              <li><Link href="#important-considerations">Important considerations</Link></li>
              <li><Link href="#sources">Sources</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id="process">Process</h3>
          <p>There is no fee for a new Ontario health card.</p>
          <p>To change your name on your health card, you must visit a ServiceOntario and bring a completed <a href="/downloads#0280-82e">Change of Information form (0280-82e)</a> as well as an original copy of one of the following documents:</p>
          <ol>
            <li>a <a href="/birth-certificates">Canadian birth certificate</a></li>
            <li>a Canadian change of name certificate (such as the one provided upon completion of an <a href="/name-changes">Ontario name change</a>)</li>
            <li>a citizenship/immigration status document in the name</li>
          </ol>
				  <p>Since June 2016, sex designation is no longer displayed on Ontario health cards.</p>
          <br />

          <h3 id="important-considerations">Important considerations</h3>
          <h4>French language characters</h4>
          <p>Since August 2022, you can now add French language characters to your name on your Ontario health card. To request a new health card with French language characters in your name, visit a ServiceOntario location with documents proving your legal name and showing those characters. If your Canadian citizenship or immigration document does not show your legal name with French language characters, you may be able to provide another proof of residency or identity document that does.</p>

          <hr />
          <h3 id="sources">Sources</h3>
          <ul>
            <li><a href="https://www.ontario.ca/page/replace-cancel-or-change-information-your-health-card#section-3" target="_blank" rel="norefferer">ServiceOntario - Replace, cancel or change information on your health card</a></li>
          </ul>
          <hr />

          <div className="pageNav">
            <p>See also: </p>
            <ul>
              <li><Link href="/on/name">Ontario legal name changes</Link></li>
              <li><Link href="/on/birth">Ontario birth certificates</Link></li>
              <li><Link href="/on/id">Ontario driver&apos;s licenses & photo cards</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}