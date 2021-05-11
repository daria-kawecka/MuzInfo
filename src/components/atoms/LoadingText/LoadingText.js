import React from 'react';
//components:
import { ScaleLoader } from 'react-spinners';
import { LoadingWrapper, LoadingText } from './LoadingText.styles';

const Loading = () => {
  return (
    <LoadingWrapper>
      <ScaleLoader color={'#2d0eb1'} height={45} width={10} />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
