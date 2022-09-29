import type { GetStaticProps, NextPage } from 'next';
import { ApiKey, apiKey } from 'api/keys';
import { useWords } from 'api/hooks';
import { connectDatabase } from 'database';
import { History } from 'database/models';
import { Word } from 'types';

type Props = {
  fallback: Record<ApiKey['words'], Word[]>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  await connectDatabase();
  const words = await History.find();

  return {
    props: {
      fallback: {
        [apiKey.words]: JSON.parse(JSON.stringify(words)),
      },
    },
  };
};

const WordsPage: NextPage<Props> = ({ fallback }) => {
  const { words } = useWords({ fallback });

  return (
    <div>
      {words?.map(({ from, to, requested }) => {
        return (
          <div key={from}>
            <p>from: {from}</p>
            <p>to: {to}</p>
            <p>requested: {requested}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WordsPage;
