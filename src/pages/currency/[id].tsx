import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CurrencyData from '@/components/CurrencyData';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ActionTypes } from '@/state/types';
import { NavBar } from '@/components/NavBar';
import { useDispatch } from 'react-redux';
import { style } from 'typestyle';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const graphStyle = style({
  width: '450px',
  height: '105px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px auto',
  border: '1px solid gray',
});

const newsItemStyle = style({
  padding: '20px',
  fontFamily: 'Helvetica, Arial, sans-serif',
  borderBottom: '1px solid gray',
  listStyle: 'none',
  $nest: {
    '& .news-title-style': {
      fontWeight: 'bold',
    },
    '& .news-created-style': {
      color: 'gray',
      fontSize: 'small',
    },
  },
});

const newsItem = style({
  padding: '20px',
});

type CategoryType = {
  CATEGORY: string;
};

type SourceDataType = {
  CREATED_ON: number;
  IMAGE_URL: string;
  LANG: string;
  LAST_UPDATED_TS: number;
  NAME: string;
  SORT_ORDER: null;
  SOURCE_KEY: string;
  STATUS: string;
  TYPE: string;
  UPDATED_ON: null;
  URL: string;
};

type NewsType = {
  BODY: string;
  CATEGORY_DATA: Array<CategoryType>;
  CREATED_ON: number;
  DOWNVOTES: number;
  GUID: string;
  ID: number;
  IMAGE_URL: string;
  KEYWORDS: string;
  LANG: string;
  PUBLISHED_ON: number;
  SCORE: number;
  SENTIMENT: string;
  SOURCE_DATA: SourceDataType;
  SOURCE_ID: number;
  STATUS: string;
  TITLE: string;
  UPDATED_ON: number;
  UPVOTES: string;
  URL: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  try {
    const { data } = await axios.get(
      `https://data-api.cryptocompare.com/news/v1/article/list?categories=${id}`
    );
    return {
      props: { news: data },
    };
  } catch (e) {
    return e.message;
  }
};

const CurrencyPage = ({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;
  console.log('--', router);
  const dispatch = useDispatch();
  const [chartLink, setChartLink] = useState('');
  useEffect(() => {
    if (id) {
      setChartLink(
        `https://images.cryptocompare.com/sparkchart/${id
          .toString()
          .toUpperCase()}/USD/latest.png`
      );
      dispatch({
        type: ActionTypes.SET_CURRENT_CURRENCY,
        payload: id,
      });
      dispatch({
        type: ActionTypes.GET_CURRENCY_VALUE,
      });
    }
  }, [id]);
  const shortNews: Array<NewsType> = news.Data.slice(0, 5);
  return (
    <>
      <NavBar></NavBar>
      {chartLink && (
        <img src={chartLink} alt='sparkchart' className={graphStyle} />
      )}
      <ErrorBoundary>
        <CurrencyData />
      </ErrorBoundary>
      <ul className={newsItem}>
        {shortNews.map((item, i: number) => {
          const date = new Date(item.CREATED_ON * 1000);
          return (
            <div key={i} className={newsItemStyle}>
              <li className='news-created-style'>
                {date.toLocaleString('en-US')}
              </li>
              <li className='news-title-style'>
                <a
                  href={item.URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: 'none' }}
                >
                  {item.TITLE}
                </a>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default CurrencyPage;
