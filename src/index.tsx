import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import CurrencyPage from './components/containers/CurrencyPage';
import { StartPage } from './components/containers/StartPage';
import { style } from 'typestyle';

const navStyle = style({
  fontFamily: 'Helvetica, Arial, sans-serif',
  display: 'flex',
  margin: '10px auto',
  justifyContent: 'space-evenly',
});

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav className={navStyle}>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              color: isActive ? 'green' : 'black',
            })}
          >
            Start
          </NavLink>
          <NavLink
            to='/currency'
            style={({ isActive }) => ({
              color: isActive ? 'green' : 'black',
            })}
          >
            Currency
          </NavLink>
        </nav>

        <Routes>
          <Route index element={<StartPage />} />
          <Route path='currency' element={<CurrencyPage />} />
          <Route path='currency/:id' element={<CurrencyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
