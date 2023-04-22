import { FC, useEffect } from 'react';
import { Radio, RadioChangeEvent, Select } from 'antd';
import { ActionTypes, StateType, TimeStepType } from '../state/types';
import { TypedDispatch } from '../state/store';
import { connect, ConnectedProps } from 'react-redux';
import { CurrenciesTopType } from '../types';

const ControlSection: FC<ControlSectionProps> = ({
  topList,
  changeCurrency,
  changeTimeStep,
  getTopList,
  getHistoricalData,
}) => {
  useEffect(() => {
    getTopList();
  }, []);
  const convertTopListToSelect = (topList: CurrenciesTopType) =>
    topList.map((currency) => ({
      value: currency.name,
      label: `${currency.name}/${currency.fullName}`,
    }));

  const options = convertTopListToSelect(topList);
  const setTimeStepHandler = (e: RadioChangeEvent) => {
    console.log('setTime');
    changeTimeStep(e.target.value);
    getHistoricalData();
  };

  const setCurrencyHandler = (currency: string) => {
    changeCurrency(currency);
    console.log('setTime');
    getHistoricalData();
  };
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

const mapStateToProps = (state: StateType) => ({
  topList: state.top,
});

const mapDispatchToProps = (dispatch: TypedDispatch) => {
  return {
    changeCurrency: (currency: string) =>
      dispatch({
        type: ActionTypes.SET_CURRENCY,
        payload: currency,
      }),
    changeTimeStep: (step: TimeStepType) =>
      dispatch({
        type: ActionTypes.SET_TIME_STEP,
        payload: step,
      }),
    getTopList: () => dispatch({ type: ActionTypes.GET_TOP_CURRENCIES }),
    getHistoricalData: () =>
      dispatch({ type: ActionTypes.GET_HISTORICAL_DATA }),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ControlSectionProps = ConnectedProps<typeof connector>;

export default connector(ControlSection);
