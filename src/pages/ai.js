import { useState } from 'react'

export default function AIPage() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()
      console.log('🔍 OpenAI Response:', data)

      if (res.ok) {
        setResponse(data.result || '⚠️ No result returned from AI.')
      } else {
        setResponse('❌ Error from AI: ' + (data.error || 'Unknown error'))
      }
    } catch (err) {
      setResponse('❌ Failed to connect to API')
      console.error('❌ Network error:', err)
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: '28px', color: '#8e24aa' }}>🧠 Ask Trackify AI</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Example: suggest a daily schedule for 5 tasks"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            borderRadius: '12px',
            border: '2px solid #ba68c8',
            marginTop: '20px',
          }}
        />
        <button type="submit" className="button" style={{ marginTop: '15px' }}>
          Ask
        </button>
      </form>

      {loading && <p style={{ marginTop: '20px' }}>⏳ Thinking...</p>}

      {response && (
        <div className="result-box" style={{
          background: '#f3e5f5',
          padding: '20px',
          marginTop: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ color: '#6a1b9a' }}>AI Suggestion:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}
