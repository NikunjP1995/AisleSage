Last login: Tue Apr 28 13:50:55 on ttys000
venkats-MacBook-Pro:~ venkat$ cd api
-bash: cd: api: No such file or directory
venkats-MacBook-Pro:~ venkat$ nano chat.js



























































  GNU nano 2.0.6                                                       File: chat.js                                                                                                            Modified  

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'API connection failed. Please try again.' });
  }
}




























^G Get Help                      ^O WriteOut                      ^R Read File                     ^Y Prev Page                     ^K Cut Text                      ^C Cur Pos
^X Exit                          ^J Justify                       ^W Where Is                      ^V Next Page                     ^U UnCut Text                    ^T To Spell
