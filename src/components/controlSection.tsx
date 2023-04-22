import { FC } from 'react';
import { Radio, RadioChangeEvent, Select } from 'antd';
import { ActionTypes } from '../state/types';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
export const ControlSection: FC = () => {
  const dispatch = useTypedDispatch();
  const options = [
    {
      value: 'BTC',
      label: 'BTC',
    },
    {
      value: 'ETH',
      label: 'ETH',
    },
    {
      value: 'BNB',
      label: 'BNB',
    },
    {
      value: 'USDT',
      label: 'USDT',
    },
    {
      value: 'USDC',
      label: 'USDC',
    },
  ];
  const setTimeStepHandler = (e: RadioChangeEvent) =>
    dispatch({ type: ActionTypes.SET_TIME_STEP, payload: e.target.value });
  const setCurrencyHandler = (currency: string) =>
    dispatch({ type: ActionTypes.SET_CURRENCY, payload: currency });
  return (
    <>
      <div>Time step: </div>
      <Radio.Group
        defaultValue='day'
        buttonStyle='solid'
        onChange={setTimeStepHandler}
      >
        <Radio.Button value='day'>Daily</Radio.Button>
        <Radio.Button value='hour'>Hourly</Radio.Button>
        <Radio.Button value='minute'>Minute</Radio.Button>
      </Radio.Group>
      <div>Select currency:</div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder='Search to Select'
        optionFilterProp='children'
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        listHeight={200}
        options={options}
        onChange={setCurrencyHandler}
      />
    </>
  );
};
