import React, { FormEvent } from 'react';
import { style } from 'typestyle';

interface SettingsProps {
  // eslint-disable-next-line no-unused-vars
  close: (event: React.MouseEvent) => void;
  // eslint-disable-next-line no-unused-vars
  setGettingPeriod: (time: number) => void;
  // eslint-disable-next-line no-unused-vars
  setHistoricity: (historicity: boolean) => void;
}

const formWrapperStyle = style({
  fontFamily: 'Arial, SansSerif',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid gray',
  margin: '10px auto',
  width: '200px',
  padding: '10px',
  height: '260px',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'white',
});

const formInputPartStyle = style({
  width: '150px',
});

const formButtonStyle = style({
  width: '100px',
  height: '30px',
  fontWeight: 'bolder',
});

export const Settings: React.FC<SettingsProps> = ({
  close,
  setGettingPeriod,
  setHistoricity,
}) => {
  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    // @ts-ignore
    console.log(e.target.updateTime.value, e.target.saveHistory.checked);
    // @ts-ignore
    setGettingPeriod(1000 * e.target.updateTime.value);
    // @ts-ignore
    setHistoricity(e.target.saveHistory.checked);
    close(e as React.MouseEvent);
  };

  return (
    <form
      className={formWrapperStyle}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <p>Please select options: </p>
      <fieldset className={formInputPartStyle}>
        <legend>Set update time:</legend>
        <select name='updateTime' id='timePeriod' data-testid='select'>
          <option value='60'>1 minute</option>
          <option value='30'>30 seconds</option>
          <option value='10'>10 seconds</option>
          <option value='2'>2 seconds</option>
        </select>
      </fieldset>
      <fieldset className='formInputPart'>
        <legend>Set history:</legend>
        <label>
          <input type='checkbox' id='saveHistory' name='saveHistory' />
          Currencies history
        </label>
      </fieldset>
      <button type='submit' className={formButtonStyle}>
        Submit
      </button>
      <button type='button' className={formButtonStyle} onClick={close}>
        Cancel
      </button>
    </form>
  );
};
