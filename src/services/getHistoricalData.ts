import axios from 'axios';

const getHistoricalData = async (
  timeInterval: string,
  currency: string
): Promise<any> => {
  try {
    const { data } = await axios.get(
      `https://min-api.cryptocompare.com/data/v2/histo${timeInterval}?fsym=${currency}&tsym=USD&limit=1000`
    );
    return data;
  } catch (e) {
    return e.message;
  }
};

export { getHistoricalData };
