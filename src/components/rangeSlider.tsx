import {FC, useState} from 'react';
import InputRange from 'react-input-range';
import {RangeValueType} from "../types";
import {TypedDispatch} from "../state/store";
import {ActionTypes, StateType} from "../state/types";
import {connect, ConnectedProps} from "react-redux";

const RangeSlider: FC<RangeSliderProps> = ({
  range,
  setRange
}) => {
  const [value, setValue] = useState<RangeValueType>(range);
  return (
    <>
      <InputRange
        draggableTrack
        maxValue={100}
        minValue={0}
        onChange={(value) => setValue(value as RangeValueType)}
        onChangeComplete={(value) => {
          if ("min" in value && value.min < 0) {value.min = 0}
          if ("max" in value && value.max > 100) {value.max = 100}
          console.log(JSON.stringify(value));
          setRange(value);
        }}
        value={ value }
      />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  range: state.range,
});

const mapDispatchToProps = (dispatch: TypedDispatch) => {
  return {
    setRange: (range: RangeValueType) =>
      dispatch(
        {
          type: ActionTypes.SET_RANGE,
          payload: range
        }
      )
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type RangeSliderProps = ConnectedProps<typeof connector>;

export default connector(RangeSlider);
