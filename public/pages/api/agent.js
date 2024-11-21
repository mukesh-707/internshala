// pages/api/agents.js
export default async function handler(req, res) {
    const response = await fetch('https://api.retellai.com/agents', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
      },
    });
  
    const data = await response.json();
    res.status(200).json(data);
  }
  