import axios from 'axios';

const getTopList = async (): Promise<any> => {
  try {
    const { data } = await axios.get(
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'
    );
    return data;
  } catch (e) {
    return e.message;
  }
};

export { getTopList };
