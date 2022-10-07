import { connectDatabase } from 'database';
import { History } from 'database/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onError: (error, req, res) => {
    res.status(500).json({ message: error.message });
  },
});

handler.get(async (req, res) => {
  await connectDatabase();
  const words = await History.find();
  res.status(200).json(words);
});

export default handler;
