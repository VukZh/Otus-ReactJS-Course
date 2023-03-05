import React, { FormEvent, useEffect, useState } from 'react';
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
  const [name, setName] = useState('');
  useEffect(() => {
    if (window.localStorage.getItem('name')) {
      setName(window.localStorage.getItem('name'));
    }
  }, []);
  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    // @ts-ignore
    const name = e.target.name.value;
    console.log('> ', name);
    window.localStorage.setItem('name', name);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    setName(e.target.value);
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
          <input
            type='text'
            name='name'
            onChange={(e) => handleChange(e)}
            value={name}
          />
          Input your name
        </label>
      </fieldset>
      <button type='submit' disabled={name.length < 3}>
        Enter
      </button>
    </form>
  );
};
