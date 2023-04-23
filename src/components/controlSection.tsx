import { FC, useEffect } from 'react';
import { Radio, RadioChangeEvent, Select, Checkbox } from 'antd';
import { ActionTypes, StateType, TimeStepType } from '../state/types';
import { TypedDispatch } from '../state/store';
import { connect, ConnectedProps } from 'react-redux';
import { CurrenciesTopType } from '../types';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const ControlSection: FC<ControlSectionProps> = ({
  topList,
  changeCurrency,
  changeTimeStep,
  getTopList,
  getHistoricalData,
  setExtendedMode,
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
    changeTimeStep(e.target.value);
    getHistoricalData();
  };

  const setCurrencyHandler = (currency: string) => {
    changeCurrency(currency);
    getHistoricalData();
  };

  const changeModeHandler = (e: CheckboxChangeEvent) => {
    setExtendedMode(e.target.checked);
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
      <div></div>
      <Checkbox onChange={changeModeHandler}>Extended Graph</Checkbox>
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
    setExtendedMode: (mode: boolean) =>
      dispatch({
        type: ActionTypes.SET_EXTENDED_MODE,
        payload: mode,
      }),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ControlSectionProps = ConnectedProps<typeof connector>;

export default connector(ControlSection);
