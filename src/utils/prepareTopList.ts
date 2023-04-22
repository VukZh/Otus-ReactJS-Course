type TopListItemType = {
  CoinInfo: {
    Algorithm: string;
    AssetLaunchDate: string;
    BlockNumber: number;
    BlockReward: number;
    BlockTime: number;
    DocumentType: string;
    FullName: string;
    Id: number;
    ImageUrl: string;
    Internal: string;
    MaxSupply: number;
    Name: string;
    NetHashesPerSecond: number;
    ProofType: string;
    Rating: object;
    Type: 1;
    Url: string;
  };
  DISPLAY: object;
  RAW: object;
};

type TopListType = {
  Data: Array<TopListItemType>;
  HasWarning: boolean;
  Message: string;
  MetaData: { Count: number };
  RateLimit: object;
  SponsoredData: Array<string>;
  Type: number;
};

export const prepareTopList = (top: TopListType) => {
  return top.Data.map((el) => ({
    name: el.CoinInfo.Name,
    fullName: el.CoinInfo.FullName,
  }));
};
