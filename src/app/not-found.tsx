import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className="page">
      <div className={styles.notfound}>
        <h2>404 | Page not found</h2>
        <hr />
        <p>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <br />
        <div>
          <Link href="/">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}