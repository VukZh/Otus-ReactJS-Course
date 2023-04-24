import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getNews } from '../../services/getNews';
import styled from 'styled-components';

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

const News = styled.ul`
  padding: 20px;
`;

const NewsItem = styled.div`
  padding: 20px;
  font-family: Helvetica, Arial, sans-serif;
  border-bottom: 1px solid gray;
  list-style: none;
`;

const NewsItemTitle = styled.li`
  font-weight: bold;
`;

const NewsItemCreated = styled.li`
  color: gray;
  font-size: small;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  if (typeof id === 'string') {
    try {
      const { data } = await getNews(id);
      return {
        props: { news: data },
      };
    } catch (e) {
      return e.message;
    }
  }
  return [];
};

const NewsPage = ({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const shortNews: Array<NewsType> = news.length ? news.Data.slice(0, 10) : [];
  return (
    <News>
      {shortNews.map((item) => {
        const date = new Date(item.CREATED_ON * 1000);
        return (
          <NewsItem key={item.ID}>
            <NewsItemCreated>{date.toLocaleString('en-US')}</NewsItemCreated>
            <NewsItemTitle>
              <a
                href={item.URL}
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'none' }}
              >
                {item.TITLE}
              </a>
            </NewsItemTitle>
          </NewsItem>
        );
      })}
    </News>
  );
};

export default NewsPage;
