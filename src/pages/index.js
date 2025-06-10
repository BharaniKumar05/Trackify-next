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

        <div className="features-intro">
          <h2>🧠 AI-Enhanced Task Insights</h2>
          <p>
            Trackify uses AI to help prioritize tasks based on urgency, recommend time estimates,
            and even suggest optimal scheduling based on your workload patterns.
          </p>
        </div>

        <div className="features-intro">
          <h2>⚡ Smart Reminders & Daily Planning</h2>
          <p>
            Get intelligent reminders and auto-generated daily plans that adapt to your task
            history and productivity habits.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <Link href="/dashboard" className="button">Go to Dashboard</Link>
          <Link href="/about" className="button back" style={{ marginLeft: '15px' }}>Learn More</Link>
          <Link href="/features" className="button" style={{ marginLeft: '15px' }}>Features</Link>
          <Link href="/faq" className="button back" style={{ marginLeft: '15px' }}>FAQ</Link>
          <Link href="/contact" className="button" style={{ marginLeft: '15px' }}>Contact</Link>
          <Link href="/privacy" className="button back" style={{ marginLeft: '15px' }}>Privacy</Link>
        </div>
      </div>
    </>
  )
}
