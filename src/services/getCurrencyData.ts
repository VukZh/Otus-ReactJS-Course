import axios from 'axios';

const getCurrencyData = async (currency: string): Promise<any> => {
  try {
    const { data } = await axios.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD`
    );
    return data;
  } catch (e) {
    return e.message;
  }
};

export { getCurrencyData };
