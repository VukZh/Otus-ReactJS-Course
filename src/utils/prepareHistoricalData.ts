export const prepareHistoricalData = (data: any) => {
  return data.Data.Data.map((el) => ({
    time: el.time,
    high: el.high,
    low: el.low,
    open: el.open,
    close: el.close,
  }))
}