export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' })
  }

  const { prompt } = req.body

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' })
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant that gives task suggestions.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    console.log('🧠 Chat API Response:', data)

    // If API fails, fallback
    if (!response.ok || !data.choices || !data.choices[0]?.message?.content) {
      console.warn('⚠️ Falling back to dummy response')
      return res.status(200).json({
        result: `📝 Sample suggestion:\n1. Plan your day\n2. Start with hardest task\n3. Take a break\n4. Finish light tasks\n5. Review at night`,
      })
    }

    const result = data.choices[0].message.content.trim()
    return res.status(200).json({ result })
  } catch (error) {
    console.error('❌ OpenAI Error:', error.message)
    // fallback on fetch error
    return res.status(200).json({
      result: `📝 Sample suggestion:\n- Morning: Study subject A\n- Afternoon: Study subject B\n- Evening: Revise subject C`,
    })
  }
}
