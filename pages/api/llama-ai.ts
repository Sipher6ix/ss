import axios from 'axios';

export default async function handler(req: any, res: any) {
  const { input } = req.body;
  const openRouterApiKey = process.env.OPENROUTER_API_KEY;

  const response = await axios.post(`https://api.openrouter.ai/llama-ai`, {
    input,
    API_KEY: openRouterApiKey,
  });

  res.status(200).json(response.data);
}
