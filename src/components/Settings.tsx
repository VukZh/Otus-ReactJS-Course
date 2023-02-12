import React, { FormEvent } from 'react';

import './settings.css';

export const Settings: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    console.log(e.target.updateTime.value, e.target.saveHistory.checked);
  };
  return (
    <form className='formWrapper' onSubmit={handleSubmit}>
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
    </form>
  );
};
