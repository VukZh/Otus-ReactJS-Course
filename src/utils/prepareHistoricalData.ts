type HistoricalItemType = {
  close: number;
  conversionSymbol: '';
  conversionType: string;
  high: number;
  low: number;
  open: number;
  time: number;
  volumefrom: number;
  volumeto: number;
};

type HistoricalDataType = {
  Data: {
    Aggregated: boolean;
    Data: Array<HistoricalItemType>;
    TimeFrom: number;
    TimeTo: number;
  };
  HasWarning: boolean;
  Message: '';
  RateLimit: object;
  Response: string;
  Type: number;
};

export const prepareHistoricalData = (data: HistoricalDataType) => {
  return data.Data.Data.map((el) => ({
    time: el.time,
    high: el.high,
    low: el.low,
    open: el.open,
    close: el.close,
  }));
};
