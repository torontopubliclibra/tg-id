import Link from 'next/link';
import styles from "./page.module.css";

export default function OnName() {
  return (
    <div className="page">
      <main className={styles.about}>
        <h2 className="page-title">Ontario name changes</h2>
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
          <p>To change your name, you need to fill out the Ontario Application to Change an Adult&apos;s Name (11155e).</p>
          <p>This application is nineteen pages long, and divided into seven parts, but you may not need to fill out all of them. You must also submit a fee of $137 with your application.</p>

          <h3 id='requirements'>Requirements</h3>
          <h4>Information to disclose</h4>
          <p>This application requires you to fill out a lot of your personal information, including:</p>
          <ol>
            <li>Full current legal name</li>
            <li>New chosen name</li>
            <li>Mailing address</li>
            <li>Date and location of birth</li>
            <li>Marital/relationship status</li>
            <li>Parental information</li>
            <li>Details of any previous name change</li>
            <li>Information about any current or past criminal offences</li>
            <li>Information about any current or past financial judgments, fines, or bankruptcy</li>
          </ol>

          <h4>Additional sections and documentation</h4>
          <ul>
            <li>If you are married or have signed a Joint Declaration of Conjugal Relationship, you are required to notify your partner or spouse about your name change and must complete Part 2</li>
            <li>If you are 16 or 17 and changing your own name, you will require the consent of every individual who holds legal custody over you and must complete Part 3</li>
            <li>If you have any outstanding law enforcement orders against you, have ever been convicted of a criminal offence, or have any pending criminal charges against you, you will need a police record check as part of your application (make sure to download the <a href="/downloads#5349e">Requirements for a Police Record Check for a Change of Name form  (5349e)</a> to ensure the police force conducting the check performs one that meets all of the specific requirements)</li>
            <li>If you were born in another part of Canada and want a new birth certificate, you must contact the province or territory where you were born after you receive your change of name certificate</li>
          </ul>

          <h4>Guarantor statement</h4>
          <p>You will also require a guarantor who can prove that any of your permanent addresses have been located in Ontario for the 12 months prior to your application. In my experience, most applicants will use a medical professional for this category. However, there are several other options such as municipal clerks, school principals, and First Nations chiefs (for the full list, please check page 13 of the application). If you cannot find anyone that meets the requirements, you can use someone other than a relative who has known you for at least five years and can speak to your residency in Ontario for the past year. Make sure you remove the Guarantor&apos;s statement section and have the chosen individual complete and return it to you before you submit the application.</p>

          <h4>Previous identity documents</h4>
          <ul>
            <li>If you were born in Ontario and have a valid birth certificate, you must include the originals (or certified copies) of all previously issued short- or long-form certificates with your application</li>
            <li>If you were born outside of Ontario but within Canada, you can submit either an original birth certificate or a certified copy issued by the province or territory of your birth</li>
            <li> If you do not have a birth certificate, you will likely need to apply for a new certificate before you can submit this application</li>
            <li>If all or part of a document sent in support of your change of name application is not written in English or French, you must send an English or French translation. If this is the case for you, please review the requirements for a translator, also on page 13</li>
          </ul>

          <h4>Request for non-publication</h4>
          <p>All name changes registered under Ontario&apos;s Change of Name Act are generally published in The Ontario Gazette, however you can request non-publication if you are transgender, First Nations, Inuit, or Métis by submitting a completed <a href="/downloads#11320e">Request for Non-Publication form (11320e)</a> with your change of name application. The Ontario Gazette currently publishes information both in paper and online, so if publication of your previous name is not desirable, we would strongly recommend adding this into your process.</p>
          <h4>Commissioning</h4>
          <p>You must sign the statutory declaration on page 16 in front of a commissioner for taking affidavits, who will seal or stamp the document at that time to verify your identity and the accuracy of the information as written. The commissioner does not have to know the person signing the application. Several notary/commissioner&apos;s offices in Ontario will commission these documents for trans individuals for no charge; however, the typical charge if applicable is $30-45.</p>

          <h3 id="submitting-your-application">
            Submitting your application
          </h3>
          <h4>By mail</h4>
          <p>If possible, we recommend sending the entire application in a tracked envelope using Canada Post, to ease the stress of your application getting lost in the mail, and to allow for an update when it is likely beginning to be processed.</p>
          <p>Send your completed form, payment, and required documents to:</p>
          <textarea readOnly name="address" id="address" value={
            `Office of the Registrar General, P.O. Box 3000, 189 Red River Road, Thunder Bay, ON, P7B 5W0`}
          />
          <h4>In person</h4>
          <p>If it is more accessible for you to submit the application in person and you are located in Toronto, you can bring your completed form, payment, and required documents to:</p>
          <textarea readOnly name="address" id="address" value={
            `ServiceOntario, 47 Sheppard Avenue East, Unit 417, 4th Floor, Toronto, ON, M2N 5N1 `}
          />

          <h4>Delivery time</h4>
          <p>If your application is complete and accurate, you should receive a certificate of name change in 6-8 weeks, however it may take longer if you have requested a change to a single name or reclaimed name. If you were born in Ontario, you will also receive your updated birth certificate at that time. If you were born elsewhere in Canada, notice of your name change is generally sent to the vital statistics office in the province or territory where you were born. You will most likely need to apply to that vital statistics office to obtain a new birth certificate.</p>
          <h4>Next steps and extra suggestions</h4>
          <p>When filling out these forms, make sure to give yourself time. It will likely take several weeks to gather all the information you need, and to complete, double-check, and submit the forms.</p>
          <p>Additionally, ensure you print clearly using a pen with blue or black ink, do not use correction fluid on any forms, and if you make a mistake or want to change information, you must do the following process:</p>
          <ul>
            <li>Put brackets around the wrong information</li>
            <li>Enter the correct information</li>
            <li>Put your initials beside each change</li>
            <li>Have the commissioner initial each change before it is sworn</li>
          </ul>
          <p>Your change of name certificate will show your previous name and your new name. You can use this certificate to change your name on other personal documents, such as driver&apos;s licenses, photo cards, or health cards. Please note that by law in Ontario, if you have a driver&apos;s license, you must notify the Ministry of Transportation within 6 days of legally changing your name.</p>

          <hr />
          <h3 id="sources">Sources</h3>
          <ul>
            <li><a href="https://www.ontario.ca/page/change-name" target="_blank" rel="norefferer">ServiceOntario - Change of name</a></li>
          </ul>
          <hr />

          <div className="pageNav">
            <p>See also: </p>
            <ul>
              <li><Link href="/on/birth">Ontario birth certificates</Link></li>
              <li><Link href="/on/health">Ontario health cards</Link></li>
              <li><Link href="/on/id">Ontario driver&apos;s licenses & photo cards</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}