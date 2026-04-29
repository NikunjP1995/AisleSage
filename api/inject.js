export default async function handler(req, res) {
  const key = process.env.SUPABASE_ANON_KEY || '';
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(key);
}
