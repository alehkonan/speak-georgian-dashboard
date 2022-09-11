import type { NextApiRequest, NextApiResponse } from 'next';

type User = {
  userId: number;
  history: { word: string; requested: number }[];
};

const MOCK_DATA: User[] = [
  {
    userId: 12423432,
    history: [
      {
        word: 'hello',
        requested: 10,
      },
      {
        word: 'bye',
        requested: 4,
      },
      {
        word: 'excuse me',
        requested: 99,
      },
    ],
  },
  {
    userId: 1203129321,
    history: [
      {
        word: 'hello',
        requested: 2,
      },
      {
        word: 'bye',
        requested: 5,
      },
      {
        word: 'excuse me',
        requested: 1,
      },
    ],
  },
];

const handler = async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
  if (req.method === 'GET') {
    res.status(200).json(MOCK_DATA);
  }
};

export default handler;
