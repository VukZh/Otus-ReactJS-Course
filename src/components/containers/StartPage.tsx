import React, { FormEvent } from 'react';
import { style } from 'typestyle';

const startPageStyle = style({
  fontFamily: 'Arial, SansSerif',
  display: 'flex',
  flexDirection: 'column',
  margin: '10px auto',
  width: '400px',
  padding: '10px',
  height: '260px',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'lightsalmon',
  $nest: {
    '& fieldset': {
      padding: '10px 20px',
    },
    '& button': {
      padding: '5px 10px',
    },
    '& fieldset label input': {
      marginRight: '10px',
    },
  },
});
export const StartPage: React.FC = () => {
  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    // @ts-ignore
    console.log('.. ', e.target.name.value);
  };

  return (
    <form
      className={startPageStyle}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <p>Cryptocurrency checker app</p>
      <fieldset>
        <label>
          <input type='text' name='name' />
          Input your name
        </label>
      </fieldset>
      <button type='submit'>Enter</button>
    </form>
  );
};
