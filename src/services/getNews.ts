import axios from 'axios';

const getNews = async (currency: string): Promise<any> => {
  try {
    const { data } = await axios.get(
      `https://data-api.cryptocompare.com/news/v1/article/list?categories=${currency}`
    );
    return data;
  } catch (e) {
    return e.message;
  }
};

export { getNews };
