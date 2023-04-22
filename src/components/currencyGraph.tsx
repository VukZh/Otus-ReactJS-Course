import React from 'react';
import { StateType } from '../state/types';
import { connect, ConnectedProps } from 'react-redux';
import { HistoricalDataType } from '../types';

const CurrencyGraph: React.FC<CurrencyGraphProps> = ({ data }) => {
  const convertHistoryData = (data: HistoricalDataType) =>
    data.map((item) => item.close);

  const convertedData = convertHistoryData(data);

  const _max = Math.max(...convertedData);
  const _min = Math.min(...convertedData);

  const max = _max + 0.22 * (_max - _min);
  const min = _min - 0.22 * (_max - _min);

  const startTime = new Date(data[0].time * 1000).toLocaleString();
  const endTime = new Date(data[data.length - 1].time * 1000).toLocaleString();

  const width = 1000;
  const height = 150;
  const colorLine =
    convertedData[0] < convertedData[convertedData.length - 1]
      ? 'green'
      : 'red';

  const xScale = width / (convertedData.length - 1);
  const yScale = height / (max - min);

  const points = convertedData.map(
    (value, index) => `${index * xScale},${(max - value) * yScale}`
  );

  return (
    <svg width={width} height={height}>
      <line x1='0' y1='0' x2='0' y2={height} stroke='black' />
      <line x1={width} y1='0' x2={width} y2={height} stroke='black' />
      <line x1='0' y1={height} x2={width} y2={height} stroke='black' />
      <line x1='0' y1='0' x2={width} y2='0' stroke='black' />

      <polyline
        points={points.join(' ')}
        fill='none'
        stroke={colorLine}
        strokeWidth='2'
      />
      <text
        x='5'
        y='6'
        textAnchor='start'
        dominantBaseline='hanging'
        style={{
          fontSize: '9px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fill: 'blue',
        }}
      >
        {startTime}
      </text>
      <text
        x='995'
        y='145'
        textAnchor='end'
        dominantBaseline='auto'
        style={{
          fontSize: '9px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fill: 'blue',
        }}
      >
        {endTime}
      </text>
      <text
        x='5'
        y='145'
        textAnchor='start'
        dominantBaseline='auto'
        style={{
          fontSize: '9px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fill: 'red',
        }}
      >
        {data[0].low}
      </text>
      <text
        x='995'
        y='10'
        textAnchor='end'
        dominantBaseline='handing'
        style={{
          fontSize: '9px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fill: 'red',
        }}
      >
        {data[data.length - 1].high}
      </text>
    </svg>
  );
};

const mapStateToProps = (state: StateType) => ({
  data: state.data,
});

const connector = connect(mapStateToProps);

type CurrencyGraphProps = ConnectedProps<typeof connector>;
export default connector(CurrencyGraph);
