import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { getNews } from '../../services/getNews';
import styled from 'styled-components';
import Link from 'next/link';

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
  padding: 15px;
  font-family: Helvetica, Arial, sans-serif;
  border-bottom: 1px solid lightgrey;
  list-style: none;
  color: gray;
  font-size: small;
  display: flex;
`;

const NewsItemLinkPart = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding-left: 15px;
`;

const NewsItemLink = styled.a`
  font-weight: bold;
  font-size: medium;
  color: darkblue;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #366aee;
  }

  &:visited {
    color: lightskyblue;
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  try {
    const { data } = await getNews(id as string);
    return {
      props: { news: data },
    };
  } catch (e) {
    return e.message;
  }
};

const NewsPage = ({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const shortNews: Array<NewsType> = news.Data.slice(0, 10);
  return (
    <News>
      {shortNews.map((item) => {
        const date = new Date(item.CREATED_ON * 1000);
        return (
          <>
            <NewsItem key={item.ID}>
              <Link href={item.URL} rel='noopener noreferrer' target='_blank'>
                <Image
                  src={item.IMAGE_URL}
                  width={50}
                  height={50}
                  alt={item.SOURCE_DATA.NAME}
                ></Image>
              </Link>
              <NewsItemLinkPart>
                <div>{date.toLocaleString('en-US')}</div>
                <div>
                  <NewsItemLink
                    href={item.URL}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.TITLE}
                  </NewsItemLink>
                </div>
              </NewsItemLinkPart>
            </NewsItem>
          </>
        );
      })}
    </News>
  );
};

export default NewsPage;
