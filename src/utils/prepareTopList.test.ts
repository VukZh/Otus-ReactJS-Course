import { prepareTopList, TopListType } from './prepareTopList';

it('prepareTopList test', () => {
  const fakeData: TopListType = {
    Data: [
      {
        CoinInfo: {
          Algorithm: '',
          AssetLaunchDate: '',
          BlockNumber: 1,
          BlockReward: 1,
          BlockTime: 1,
          DocumentType: '',
          FullName: 'Bitcoin',
          Id: 1,
          ImageUrl: '',
          Internal: '',
          MaxSupply: 1,
          Name: 'BTC',
          NetHashesPerSecond: 1,
          ProofType: '',
          Rating: {},
          Type: 1,
          Url: '',
        },
        DISPLAY: {},
        RAW: {},
      },
    ],
    HasWarning: false,
    Message: '',
    MetaData: { Count: 1 },
    RateLimit: {},
    SponsoredData: [],
    Type: 1,
  };
  expect(prepareTopList(fakeData)).toEqual([
    {
      name: 'BTC',
      fullName: 'Bitcoin',
    },
  ]);
});
