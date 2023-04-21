export const prepareTopList = (top: any) => {
  return top.Data.map((el) => ({
    name: el.CoinInfo.Name,
    fullName: el.CoinInfo.FullName,
  }))
}