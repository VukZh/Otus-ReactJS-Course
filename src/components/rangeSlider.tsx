import { FC, useState } from 'react';
import InputRange, { Range } from 'react-input-range';
import { TypedDispatch } from '../state/store';
import { ActionTypes, StateType } from '../state/types';
import { connect, ConnectedProps } from 'react-redux';

const RangeSlider: FC<RangeSliderProps> = ({ data, range, setRange }) => {
  if (!data.length) return null;
  const [value, setValue] = useState<Range>(range);
  return (
    <>
      <InputRange
        draggableTrack
        maxValue={300}
        minValue={0}
        onChange={(value) => {
          if (typeof value !== 'number') {
            setValue(value);
            if (value.min < 0) {
              value.min = 0;
            }
            if (value.max > 300) {
              value.max = 300;
            }
            setRange(value);
          }
        }}
        value={value}
      />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  data: state.data,
  range: state.range,
});

const mapDispatchToProps = (dispatch: TypedDispatch) => {
  return {
    setRange: (range: Range) =>
      dispatch({
        type: ActionTypes.SET_RANGE,
        payload: range,
      }),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type RangeSliderProps = ConnectedProps<typeof connector>;

export default connector(RangeSlider);
