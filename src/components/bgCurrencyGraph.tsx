import React from 'react';
import { StateType } from '../state/types';
import { connect, ConnectedProps } from 'react-redux';
import { HistoricalDataType } from '../types';

const BgCurrencyGraph: React.FC<BgCurrencyGraphProps> = ({ data }) => {
  if (!data.length) return null;
  const convertHistoryData = (data: HistoricalDataType) =>
    data.map((item) => (item.close + item.open) / 2);

  const convertedData = convertHistoryData(data);

  const max = Math.max(...convertedData);
  const min = Math.min(...convertedData);

  const width = 1000;
  const height = 66;
  const colorLine = 'black';

  const xScale = width / (convertedData.length - 1);
  const yScale = height / (max - min);

  const points = convertedData.map(
    (value, index) => `${index * xScale},${(max - value) * yScale}`
  );

  return (
    <svg width={width} height={height}>
      <polyline
        points={points.join(' ')}
        fill='none'
        stroke={colorLine}
        strokeWidth='2'
      />
    </svg>
  );
};

const mapStateToProps = (state: StateType) => ({
  data: state.data,
});

const connector = connect(mapStateToProps);

type BgCurrencyGraphProps = ConnectedProps<typeof connector>;
export default connector(BgCurrencyGraph);
