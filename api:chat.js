Last login: Tue Apr 28 14:04:37 on ttys000
venkats-MacBook-Pro:~ venkat$ 
venkats-MacBook-Pro:~ venkat$ export default async function handler(req, res) {
-bash: syntax error near unexpected token `('
venkats-MacBook-Pro:~ venkat$   res.setHeader('Access-Control-Allow-Origin', '*');
-bash: syntax error near unexpected token `'Access-Control-Allow-Origin','
venkats-MacBook-Pro:~ venkat$   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
-bash: syntax error near unexpected token `'Access-Control-Allow-Methods','
venkats-MacBook-Pro:~ venkat$   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
-bash: syntax error near unexpected token `'Access-Control-Allow-Headers','
venkats-MacBook-Pro:~ venkat$   if (req.method === 'OPTIONS') { res.status(200).end(); return; }
-bash: syntax error near unexpected token `{'
venkats-MacBook-Pro:~ venkat$   if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }
-bash: syntax error near unexpected token `{'
venkats-MacBook-Pro:~ venkat$   try {
-bash: try: command not found
venkats-MacBook-Pro:~ venkat$     const response = await fetch('https://api.anthropic.com/v1/messages', {
-bash: syntax error near unexpected token `('
venkats-MacBook-Pro:~ venkat$       method: 'POST',
-bash: method:: command not found
venkats-MacBook-Pro:~ venkat$       headers: {
-bash: headers:: command not found
venkats-MacBook-Pro:~ venkat$         'Content-Type': 'application/json',
-bash: Content-Type:: command not found
venkats-MacBook-Pro:~ venkat$         'x-api-key': process.env.ANTHROPIC_API_KEY,
-bash: x-api-key:: command not found
venkats-MacBook-Pro:~ venkat$         'anthropic-version': '2023-06-01'
-bash: anthropic-version:: command not found
venkats-MacBook-Pro:~ venkat$       },
-bash: },: command not found
venkats-MacBook-Pro:~ venkat$       body: JSON.stringify(req.body)
-bash: syntax error near unexpected token `('
venkats-MacBook-Pro:~ venkat$     });
-bash: syntax error near unexpected token `}'
venkats-MacBook-Pro:~ venkat$     const data = await response.json();
-bash: syntax error near unexpected token `('
venkats-MacBook-Pro:~ venkat$     res.status(200).json(data);
-bash: syntax error near unexpected token `200'
venkats-MacBook-Pro:~ venkat$   } catch (e) {
-bash: syntax error near unexpected token `}'
venkats-MacBook-Pro:~ venkat$     res.status(500).json({ error: 'API connection failed. Please try again.' });
-bash: syntax error near unexpected token `500'
venkats-MacBook-Pro:~ venkat$   }
-bash: syntax error near unexpected token `}'
venkats-MacBook-Pro:~ venkat$ }

















