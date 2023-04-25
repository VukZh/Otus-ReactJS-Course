import {
  prepareHistoricalData,
  HistoricalDataType,
} from './prepareHistoricalData';

it('prepareHistoricalData test', () => {
  const fakeData: HistoricalDataType = {
    Data: {
      Aggregated: false,
      Data: [
        {
          close: 90,
          conversionSymbol: '',
          conversionType: '',
          high: 100,
          low: 50,
          open: 80,
          time: 11,
          volumefrom: 12,
          volumeto: 13,
        },
      ],
      TimeFrom: 1,
      TimeTo: 1,
    },
    HasWarning: false,
    Message: '',
    RateLimit: {},
    Response: '',
    Type: 1,
  };
  expect(prepareHistoricalData(fakeData)).toEqual([
    {
      time: 11,
      high: 100,
      low: 50,
      open: 80,
      close: 90,
    },
  ]);
});
