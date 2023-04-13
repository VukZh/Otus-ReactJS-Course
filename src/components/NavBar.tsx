import React, { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { style } from 'typestyle';

const navStyle = style({
  fontFamily: 'Helvetica, Arial, sans-serif',
  display: 'flex',
  margin: '10px auto',
  justifyContent: 'space-evenly',
});
const NavBar: React.FC = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/start');
    }
  }, []);
  return (
    <nav className={navStyle}>
      <Link href='/start'>Start</Link>
      <Link href='/currency'>Currency</Link>
    </nav>
  );
};
export default NavBar;
