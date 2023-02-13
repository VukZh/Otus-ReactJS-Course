import React from 'react';

import { Button } from './Button';
import './header.css';
import { IconButton } from './IconButton';

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  showModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  historicity: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showModal, historicity }) => (
  <header>
    <div className='wrapper'>
      <div>
        <div className='select-time'>Please select time period</div>
        <Button active={true} label='15'></Button>
        <Button label='30'></Button>
        <Button label='60'></Button>
        <IconButton icon='forward' disabled={!historicity}></IconButton>
        <IconButton icon='backward' disabled={!historicity}></IconButton>
        <IconButton icon='settings' onClickAction={showModal}></IconButton>
      </div>
    </div>
  </header>
);
