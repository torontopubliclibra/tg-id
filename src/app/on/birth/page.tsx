import Link from 'next/link';
import styles from "./page.module.css";

export default function OnBirth() {
  return (
    <div className="page">
      <main className={styles.about}>
        <h2>Ontario birth certificates</h2>
        <div className="stacks flipped"></div>

        <div className={styles.main}>
          <div className="pageNav">
            <p>Jump to: </p>
            <ul>
              <li><Link href="#process">Process</Link></li>
              <li><Link href="#requirements">Requirements</Link></li>
              <li><Link href="#submitting-your-application">Submitting your application</Link></li>
              <li><Link href="#sources">Sources</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id='process'>Process</h3>
          <p>To update the sex designation on your Ontario birth registration or certificate, you will need to complete the Ontario Application for Change of Sex Designation on a Birth Registration of an Adult (11325e) as well as the Statutory Declaration for a Change of Sex Designation on a Birth Registration of an Adult (11324e). This part of the presentation is based on the application and declaration updated as of November 2022. Please make sure you are filling out the most recent version of these forms.</p>
          <p>The application is two pages long, and the declaration is a single page. They can be submitted at the same time as your Ontario name change, if applicable.</p>
          <p>When changing your sex designation, you have the options of M (male), F (female), or X (gender neutral). You also have the option to choose not to display the sex designation field at all. Any person with an Ontario birth registration has this option, regardless of their gender identity. Depending on your chosen designation, your process will be different.</p>

          <h3 id="requirements">Requirements</h3>
          <p>You must be born in Ontario, and 16 years of age or older to complete this application. Along with the forms, you must provide:</p>
          <ol>
            <li>A letter from a licensed doctor or psychologist in good-standing, written on the doctor&apos;s letterhead, stating that the doctor has examined or treated you and they can attest that the updated designation is appropriate, and signed by the doctor</li>
            <li>All previously issued short- and long-form Ontario birth certificates and certified copies of your birth registration</li>
            <li>A completed application form and declaration, along with any applicable fees</li>
          </ol>

          <h4>Commissioning</h4>
          <p>Just like the name change application, you must sign the statutory declaration of this application in front of a commissioner for taking affidavits, so please factor that into your plan as you begin to work through your documents.</p>

          <h3 id="submitting-your-application">Submitting your application</h3>

          <h4>Fees</h4>
          <p>While there used to be a fee for changing your sex designation, ServiceOntario began waiving this fee back in 2021. They have continued to periodically extend the window for free applications, and currently do not list a fee, however please make sure to double-check this policy is still in standing at the time of submission. There also may be fees applicable for copies of short- or long-form Ontario birth certificates or registrations (unless submitting at the same time as an Ontario name change for an individual born in Ontario, which will be included in that fee).</p>

          <h4>By mail</h4>
          <p>Send your completed form, payment, and required documents to:</p>

          <p>If mailing at the same time as a name change, you can mail all documents in one envelope to the address listed under that section.</p> 
          <p>If being filed without a name change, we recommend a tracked envelope as with that application. Photocopied, faxed, or e-signed documents will not be accepted.</p>

          <h4>Important considerations</h4>
          <p>Ontario birth certificates with a sex designation of X or no sex displayed are recognized by the Government of Ontario, who claim they do not endorse any rejection of valid Ontario Ontario birth certificates by any official body. However, unfortunately they also claim they cannot guarantee that these documents will be accepted by organizations in Ontario or in other jurisdictions.</p>
          
          <h4>Delivery time</h4>
          <p>If your application is complete and all requirements are met, you should receive your new birth certificate or registration in 6-8 weeks.</p>

          <hr />
          <h3 id="sources">Sources</h3>
          <ul>
            <li><a href="https://www.ontario.ca/page/changing-your-sex-designation-your-birth-registration-and-birth-certificate" target="_blank" rel="norefferer">ServiceOntario - Changing your sex designation on your birth registration and birth certificate</a></li>
          </ul>
          <hr />

          <div className="pageNav">
            <p>See also: </p>
            <ul>
              <li><Link href="/on/name">Ontario name changes</Link></li>
              <li><Link href="/on/health">Ontario health cards</Link></li>
              <li><Link href="/on/licenses">Ontario drivers licenses & photo cards</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}