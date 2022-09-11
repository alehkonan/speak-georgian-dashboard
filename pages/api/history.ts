import type { NextApiRequest, NextApiResponse } from 'next';

type Word = {
  from: string;
  to: string;
  requested: number;
};

const MOCK_DATA: Word[] = [
  {
    from: 'bye',
    to: 'bye',
    requested: 10,
  },
  {
    from: 'hello',
    to: 'hello',
    requested: 7,
  },
  {
    from: 'How are you?',
    to: 'How are you?',
    requested: 2,
  },
  {
    from: 'ball',
    to: 'ball',
    requested: 15,
  },
  {
    from: 'Excuse me',
    to: 'Excuse me',
    requested: 100,
  },
];

const handler = async (req: NextApiRequest, res: NextApiResponse<Word[]>) => {
  if (req.method === 'GET') {
    res.status(200).json(MOCK_DATA);
  }
};

export default handler;
