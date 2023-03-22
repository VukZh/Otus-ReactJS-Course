import React, { FormEvent, useEffect, useState } from 'react';
import { style } from 'typestyle';
import { useNavigate } from 'react-router-dom';

type FormData = {
  name: {
    value: string;
  };
};

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
  const siteNav = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem('name')) {
      setName(window.localStorage.getItem('name'));
    }
  }, []);
  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const formData = e.target as unknown as FormData;
    window.localStorage.setItem('name', formData.name.value);
    siteNav('currency');
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const nameValue = e.target as HTMLInputElement;
    setName(nameValue.value);
  };

  return (
    <form className={startPageStyle} onSubmit={handleSubmit}>
      <p>Cryptocurrency checker app</p>
      <fieldset>
        <label>
          <input type='text' name='name' onChange={handleChange} value={name} />
          Input your name
        </label>
      </fieldset>
      <button type='submit' disabled={name.length < 3}>
        Enter
      </button>
    </form>
  );
};
