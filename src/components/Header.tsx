import React from 'react';

import { Button } from './Button';
import './header.css';
import { IconButton } from './IconButton';

export const Header: React.FC = () => (
  <header>
    <div className='wrapper'>
      <div>
        <div className='select-time'>Please select time period</div>
        <Button active={true} label='15'></Button>
        <Button label='30'></Button>
        <Button label='60'></Button>
        <IconButton icon='forward'></IconButton>
        <IconButton icon='backward'></IconButton>
      </div>
    </div>
  </header>
);
