import type { GetStaticProps, NextPage } from 'next';
import { ApiKey, apiKey } from 'api/keys';
import { useWords } from 'api/hooks';
import { connectDatabase } from 'database';
import { History } from 'database/models';
import { Word } from 'types';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';

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

  const columns = useMemo<GridColDef<Word>[]>(() => [
    {
      field: 'from',
      headerName: 'From',
      flex: 2,
      sortable: false,
    },
    {
      field: 'to',
      headerName: 'To',
      flex: 2,
      sortable: false,
    },
    {
      field: 'requested',
      headerName: 'Requested',
      flex: 1,
    }
  ], []);

  return (
    <DataGrid<Word> 
      sx={{
        height: '100vh'
      }}
      getRowId={row => row.from} 
      columns={columns} 
      rows={words || []} 
      autoPageSize 
      density="compact" 
      disableColumnMenu
    />
  );
};

export default WordsPage;
