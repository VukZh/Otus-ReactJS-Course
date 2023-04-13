import React from 'react';
import Link from 'next/link';
import { style } from 'typestyle';

const navStyle = style({
  fontFamily: 'Helvetica, Arial, sans-serif',
  display: 'flex',
  margin: '10px auto',
  justifyContent: 'space-evenly',
});
const Home: React.FC = () => (
  <nav className={navStyle}>
    <Link href='/start'>Start</Link>
    <Link href='/currency'>Currency</Link>
  </nav>
);

export default Home;
