export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, businessContext } = req.body;

  if (!prompt || !businessContext) {
    return res.status(400).json({ error: 'Missing prompt or business data' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `You are a professional business financial analyst for South African small businesses. Given this business data:

${businessContext}

User question: "${prompt}"

Respond in this EXACT JSON format (no markdown, no backticks, pure JSON only):
{
  "title": "Report title (short)",
  "summary": "2-3 sentence executive summary using the actual numbers from the data",
  "positive": { "title": "Strength", "text": "One key positive finding with specific numbers" },
  "negative": { "title": "Risk / Concern", "text": "One key risk or area needing attention with specific numbers" },
  "action": { "title": "Recommendation", "text": "One concrete, specific action the business owner should take" }
}`,
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    let text = data.choices[0].message.content;
    text = text.replace(/```json|```/g, '').trim();
    const result = JSON.parse(text);

    return res.status(200).json(result);

  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to generate report' });
  }
}
