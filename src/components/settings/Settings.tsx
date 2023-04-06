import React, { FormEvent } from 'react';

import { style } from 'typestyle';
import { Dispatch } from 'redux';
import { ActionsType, ActionTypes } from '../../state/types';
import { connect, ConnectedProps } from 'react-redux';

type FormData = {
  updateTime: {
    value: number;
  };
  saveHistory: {
    checked: boolean;
  };
};

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

const Settings: React.FC<SettingsProps> = ({
  close,
  setPeriod,
  setHistoricity,
}) => {
  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const formData = e.target as unknown as FormData;

    setPeriod(1000 * formData.updateTime.value);
    setHistoricity(formData.saveHistory.checked);
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

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
  return {
    setHistoricity: (historicity: boolean) =>
      dispatch({
        type: ActionTypes.SET_HISTORICITY,
        payload: historicity,
      }),
    setPeriod: (period: number) =>
      dispatch({
        type: ActionTypes.SET_PERIOD,
        payload: period,
      }),
  };
};

const connector = connect(null, mapDispatchToProps);

type PreSettingsProps = ConnectedProps<typeof connector>;

interface SettingsProps extends PreSettingsProps {
  close: (event: React.MouseEvent) => void;
}

export default connector(Settings);
