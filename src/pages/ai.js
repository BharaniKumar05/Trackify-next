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
      setResponse(data.result)
    } catch {
      setResponse('❌ Failed to fetch response')
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <h1>🧠 Ask Trackify AI</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Ask something like: suggest a schedule for my 5 tasks"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
        <button type="submit" className="button">Ask</button>
      </form>

      {loading && <p>⏳ Thinking...</p>}
      {response && (
        <div className="result-box">
          <h3>🧠 AI Suggestion:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}
