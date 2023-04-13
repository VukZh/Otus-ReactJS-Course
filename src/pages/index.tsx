import React from 'react';
// import Link from 'next/link';
import { style } from 'typestyle';
import NavBar from '@/components/NavBar';

const navStyle = style({
  fontFamily: 'Helvetica, Arial, sans-serif',
  display: 'flex',
  margin: '10px auto',
  justifyContent: 'space-evenly',
});
const Home: React.FC = () => <NavBar></NavBar>;

export default Home;
