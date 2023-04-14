import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// import CurrencyPage from './components/containers/CurrencyPage';
// import { StartPage } from './components/containers/StartPage';
// import { NotFound } from './components/containers/NotFound';
import { style } from 'typestyle';
import { Provider } from 'react-redux';
import { store } from './state/store';

// const navStyle = style({
//   fontFamily: 'Helvetica, Arial, sans-serif',
//   display: 'flex',
//   margin: '10px auto',
//   justifyContent: 'space-evenly',
// });

const App: React.FC = () => (
  <>
    {/*<BrowserRouter>*/}
    {/*  <nav className={navStyle}>*/}
    {/*    <NavLink*/}
    {/*      to='/'*/}
    {/*      style={({ isActive }) => ({*/}
    {/*        color: isActive ? 'green' : 'black',*/}
    {/*      })}*/}
    {/*    >*/}
    {/*      Start*/}
    {/*    </NavLink>*/}
    {/*    <NavLink*/}
    {/*      to='/currencies'*/}
    {/*      style={({ isActive }) => ({*/}
    {/*        color: isActive ? 'green' : 'black',*/}
    {/*      })}*/}
    {/*    >*/}
    {/*      Currency*/}
    {/*    </NavLink>*/}
    {/*  </nav>*/}
    {/*  <Routes>*/}
    {/*    <Route index element={<StartPage />} />*/}
    {/*    <Route path='currencies' element={<CurrencyPage />} />*/}
    {/*    <Route path='currencies/:id' element={<CurrencyPage />} />*/}
    {/*    <Route path='*' element={<NotFound />} />*/}
    {/*  </Routes>*/}
    {/*</BrowserRouter>*/}
  </>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
