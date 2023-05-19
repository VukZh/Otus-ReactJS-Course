import React from 'react';
import styled from 'styled-components';

const Page404 = styled.div`
  font-family: Arial, SansSerif;
  margin: 10% auto;
  text-align: center;
  color: red;
`;

const NotFound: React.FC = () => {
  return (
    <Page404>
      <h2>Oops - page not found</h2>
    </Page404>
  );
};

export default NotFound;
