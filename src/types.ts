type CurrencyNameType = {
  name: string;
  fullName: string;
};

export type CurrenciesTopType = Array<CurrencyNameType>;

type HistoricalDataItemType = {
  time: number;
  high: number;
  low: number;
  open: number;
  close: number;
};

export type HistoricalDataType = Array<HistoricalDataItemType>;
