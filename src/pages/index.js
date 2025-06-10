import Head from 'next/head'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Trackify - Task & Productivity Tracker</title>
        <meta name="description" content="Organize your day, track your tasks, and boost your productivity with Trackify!" />
      </Head>

      <div className="container">
        <h1 className="main-title">Welcome to <span style={{ color: '#8e24aa' }}>Trackify</span></h1>
        <p className="tagline">Plan. Track. Achieve. All in one place.</p>

        <img
          src="/vercel.svg"
          alt="Trackify Banner"
          style={{ width: '100%', maxWidth: '300px', margin: '30px auto' }}
        />

        <div style={{ marginTop: '30px' }}>
          <Link href="/dashboard" className="button">
            Go to Dashboard
          </Link>
          <Link href="/about" className="button back" style={{ marginLeft: '15px' }}>
            Learn More
          </Link>
        </div>
      </div>
    </>
  )
}
