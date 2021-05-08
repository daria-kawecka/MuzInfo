import React from 'react';
import { Appbar, AppHeader, LogoWrapper, Logo } from './AppBar.styles';

const AppBar = () => {
  return (
    <Appbar>
      <LogoWrapper to="/">
        <Logo />
        <AppHeader>
          <span>Muz</span>Info
        </AppHeader>
      </LogoWrapper>
    </Appbar>
  );
};

export default AppBar;
