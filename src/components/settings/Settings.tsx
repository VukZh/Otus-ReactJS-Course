import React, { FormEvent } from 'react';
import './settings.css';

interface SettingsProps {
  // eslint-disable-next-line no-unused-vars
  close: (event: React.MouseEvent) => void;
  // eslint-disable-next-line no-unused-vars
  setGettingPeriod: (time: number) => void;
  // eslint-disable-next-line no-unused-vars
  setHistoricity: (historicity: boolean) => void;
}

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
      className='formWrapper'
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <p>Please select options: </p>
      <fieldset className='formInputPart'>
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
      <button type='submit' className='formButton'>
        Submit
      </button>
      <button type='button' className='formButton' onClick={close}>
        Cancel
      </button>
    </form>
  );
};
