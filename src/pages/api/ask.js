export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST method is allowed' })
  }

  const { prompt } = req.body

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    const text = data.choices?.[0]?.text?.trim() || 'No response'
    res.status(200).json({ result: text })
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to connect to OpenAI' })
  }
}
