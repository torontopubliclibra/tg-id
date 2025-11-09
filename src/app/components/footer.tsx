import Link from 'next/link';
import Image from 'next/image';
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>This site is developed and maintained by <Link href="https://danateagle.com" target='blank' rel='norefferer'>Dana Teagle</Link>.</p>
            <p>v1.0.0 | Last updated: <Link href="/about#changelog">November 2025</Link> | <Link href="/about#sitemap">Sitemap</Link></p>
        </footer>
    );
}