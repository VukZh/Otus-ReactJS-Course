import React from 'react';
import { StateType } from '../state/types';
import { connect, ConnectedProps } from 'react-redux';
import { HistoricalDataType } from '../types';

const CurrencyGraph: React.FC<CurrencyGraphProps> = ({ data, mode, range }) => {
  if (!data.length) return null;

  console.log(
    '--- ',
    data.length,
    Math.floor((data.length * range.min) / 100),
    Math.ceil((data.length * range.max) / 100)
  );

  const recalcData = data.slice(Math.floor((data.length * range.min) / 100), Math.ceil((data.length * range.max) / 100))
  const convertHistoryData = (data: HistoricalDataType) =>
    data.map((item) => (item.close + item.open) / 2);
  const convertHistoryDataHeight = (data: HistoricalDataType) =>
    data.map((item) => item.high);
  const convertHistoryDataLow = (data: HistoricalDataType) =>
    data.map((item) => item.low);

  const convertedData = convertHistoryData(recalcData);
  const convertedDataL = convertHistoryDataLow(recalcData);
  const convertedDataH = convertHistoryDataHeight(recalcData);

  const _max = mode
    ? Math.max(...convertedData, ...convertedDataH)
    : Math.max(...convertedData);
  const _min = mode
    ? Math.min(...convertedData, ...convertedDataL)
    : Math.min(...convertedData);

  console.log(_max, _min);

  const max = _max + 0.22 * (_max - _min);
  const min = _min - 0.22 * (_max - _min);

  const startTime = new Date(recalcData[0].time * 1000).toLocaleString();
  const endTime = new Date(recalcData[recalcData.length - 1].time * 1000).toLocaleString();

  const width = 1000;
  const height = 350;
  const colorLine =
    convertedData[0] < convertedData[convertedData.length - 1]
      ? 'green'
      : 'red';

  const xScale = width / (convertedData.length - 1);
  const yScale = height / (max - min);

  const points = convertedData.map(
    (value, index) => `${index * xScale},${(max - value) * yScale}`
  );
  const pointsH = convertedDataH.map(
    (value, index) => `${index * xScale},${(max - value) * yScale}`
  );
  const pointsL = convertedDataL.map(
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
      {mode && (
        <>
          <polyline
            points={pointsH.join(' ')}
            fill='none'
            stroke='green'
            strokeWidth='1'
          />
          <polyline
            points={pointsL.join(' ')}
            fill='none'
            stroke='red'
            strokeWidth='1'
          />
        </>
      )}

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
        {recalcData[0].low}
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
        {recalcData[recalcData.length - 1].high}
      </text>
    </svg>
  );
};

const mapStateToProps = (state: StateType) => ({
  data: state.data,
  mode: state.extendedMode,
  range: state.range,
});

const connector = connect(mapStateToProps);

type CurrencyGraphProps = ConnectedProps<typeof connector>;
export default connector(CurrencyGraph);
