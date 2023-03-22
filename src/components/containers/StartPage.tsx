import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type FormData = {
  name: {
    value: string;
  };
};

const Fieldset = styled.fieldset`
  padding: 10px 20px;
`;

const Form = styled.form`
  font-family: Arial, SansSerif;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 400px;
  padding: 10px;
  height: 260px;
  justify-content: space-around;
  align-items: center;
  background-color: lightsalmon;
`;

const Button = styled.button`
  padding: 10px 20px;
`;

const Input = styled.input`
  margin-right: 10px;
`;
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
    <Form onSubmit={handleSubmit}>
      <p>Cryptocurrency checker app</p>
      <Fieldset>
        <label>
          <Input type='text' name='name' onChange={handleChange} value={name} />
          Input your name
        </label>
      </Fieldset>
      <Button type='submit' disabled={name.length < 3}>
        Enter
      </Button>
    </Form>
  );
};
