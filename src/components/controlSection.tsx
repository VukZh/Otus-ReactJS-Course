import { FC, useEffect } from 'react';
import { Radio, RadioChangeEvent, Select, Checkbox } from 'antd';
import { ActionTypes, StateType, TimeStepType } from '../state/types';
import { TypedDispatch } from '../state/store';
import { connect, ConnectedProps } from 'react-redux';
import { CurrenciesTopType } from '../types';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import styled from 'styled-components';

const TimeStep = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`;

const ControlsPart = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
`;

const ControlSection: FC<ControlSectionProps> = ({
  topList,
  changeCurrency,
  changeTimeStep,
  getTopList,
  getHistoricalData,
  setExtendedMode,
  currency,
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
      {currency && (
        <>
          <ControlsPart>
            <TimeStep>
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
              <div></div>
            </TimeStep>

            <Checkbox onChange={changeModeHandler}>Extended view</Checkbox>
          </ControlsPart>
          <div>{currency}</div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  topList: state.top,
  currency: state.currency,
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
