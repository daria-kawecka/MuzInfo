import React from 'react';
import { WelcomeTextWrapper, MusicIcon, Text } from './WelcomeText.styles';

const WelcomeText = () => {
  return (
    <WelcomeTextWrapper>
      <MusicIcon />
      <Text>What are we looking for?</Text>
    </WelcomeTextWrapper>
  );
};

export default WelcomeText;
