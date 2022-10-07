import { connectDatabase } from 'database';
import { History } from 'database/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Word } from 'types';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Word[] | string>,
) => {
  if (req.method === 'GET') {
    try {
      await connectDatabase();
      const words = await History.find();
      res.status(200).json(words);
    } catch (error) {
      if (error instanceof Error) {
        console.log('cached error');
        res.status(500).json(error.message);
      }
    }
  }
};

export default handler;
