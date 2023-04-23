import {FC, useState} from 'react';
import InputRange from 'react-input-range';

const RangeSlider: FC = () => {
  const [value, setValue] = useState({min: 5, max: 55});
  return (
    <>
      <InputRange
        draggableTrack
        maxValue={100}
        minValue={0}
        onChange={(value) => setValue(value)}
        onChangeComplete={(value) => console.log(JSON.stringify(value))}
        value={ value }
      />
    </>
  );
};

export default RangeSlider;
