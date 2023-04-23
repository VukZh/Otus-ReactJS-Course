import {FC, useState} from 'react';
import InputRange from 'react-input-range';

type RangeValueType = {
  min: number,
  max: number
}
const RangeSlider: FC = () => {
  const [value, setValue] = useState<RangeValueType>({min: 5, max: 55});
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
        }}
        value={ value }
      />
    </>
  );
};

export default RangeSlider;
