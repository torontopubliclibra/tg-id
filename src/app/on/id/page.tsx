import Link from 'next/link';
import styles from "./page.module.css";

export default function OnID() {
  return (
    <div className="page">
      <main className={styles.about}>
        <h2 className="page-title">Ontario driver&apos;s licenses & photo cards</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>

          <div className="pageNav">
            <p>Jump to: </p>
            <ul>
              <li><Link href="#fees-and-recommendations">Fees and recommendations</Link></li>
              <li><Link href="#to-x">M to X and F to X changes</Link></li>
              <li><Link href="#to-f-or-m">M to F and F to M changes</Link></li>
              <li><Link href="#sources">Important considerations</Link></li>
              <li><Link href="#sources">Sources</Link></li>
            </ul>
          </div>
          <hr />
          
          <p>When updating the sex designation on your driver&apos;s licence or photo card, you have the options of M (male), F (female), or X (gender neutral). Depending on your chosen designation, your process will be different.</p>

          <h3 id="fees-and-recommendations">Fees and recommendations</h3>
          <p>Driver&apos;s license changes are free for anyone with an existing license. For those who do not drive, an Ontario photo card comes with a $35 fee.</p>
          <p>Personally, we highly recommend the photo card for trans and non-binary people without driver&apos;s licenses, as this can serve as a very helpful I.D. in proving your legal name, sex designation, and address, and may alleviate any issues or pushback you encounter while changing other documents, voting, or working through bureaucratic processes in general.</p>

          <h3 id="to-x">M to X and F to X changes</h3>
          <p>To change the sex designation on your driver&apos;s licence or photo card to an X (gender neutral), you can simply visit a ServiceOntario. You do not require any supporting documents.</p>

          <h3 id="to-f-or-m">M to F and F to M changes</h3>
          <p>For binary sex designation changes, you can go to a ServiceOntario and bring an original document that indicates the updated sex designation. This can be your short or long-form birth certificate or a certified copy of a birth registration.</p>
          <p>If you do not have a birth certificate or registration that represents the desired sex designation, you will need to bring the following two documents:</p>
				  <ol>
					  <li>A letter from a licensed doctor or psychologist that is written on the doctor&apos;s letterhead, states that the doctor has examined or treated you and they can attest that the updated designation is appropriate, and is signed by the doctor</li>
            <li>A letter from you that includes the change you want to make, your full name and current address, your driver&apos;s license  or photo card number, and the name and address of the doctor or psychologist who has signed the other letter</li>
				  </ol>
				  <p>Please ensure you obtain original copies of these documents, signed in ink, as ServiceOntario will not accept e-signatures or photocopies.</p>
          <p>Surgery is no longer required as a condition for sex designation changes. However, if you have had surgery, you are able to present documentation from a recognized specialist instead of a letter from a doctor or psychologist.</p>

				  <h3 id="important-considerations">Important considerations</h3>
          <p>By law in Ontario, if you hold a driver&apos;s license, you must notify the Ministry of Transportation within 6 days of legally changing your name. Make sure to factor this in to your application process when submitting your documents for a legal name change.</p>

          <hr />
          <h3 id="sources">Sources</h3>
          <ul>
            <li><a href="https://www.ontario.ca/page/change-sex-designation-your-government-ids" target="_blank" rel="norefferer">ServiceOntario - Change the sex designation on your government IDs</a></li>
          </ul>
          <hr />

          <div className="pageNav">
            <p>See also: </p>
            <ul>
              <li><Link href="/on/name">Ontario legal name changes</Link></li>
              <li><Link href="/on/birth">Ontario birth certificates</Link></li>
              <li><Link href="/on/health">Ontario health cards</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}