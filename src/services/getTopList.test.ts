import { getTopList } from './getTopList';
import axios from 'axios';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('getCurrencyData', () => {
  it('getCurrencyData successfully data', async () => {
    const currency = ['BTC', 'LTC'];
    const resp = { data: currency };
    mockedAxios.get.mockResolvedValueOnce(resp);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getTopList();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(currency);
  });

  it('getCurrencyData erroneously data', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Unknown error'));
    const data = await getTopList();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual('Unknown error');
  });
});
