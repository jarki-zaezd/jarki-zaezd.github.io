import React from 'react';
import { CircularProgressProps } from '@mui/material/CircularProgress';

import { CircularProgress, Backdrop } from './styles';

function PageLoader({ size = 60, ...props }: CircularProgressProps) {
  return (
    <Backdrop open>
      <CircularProgress size={size} {...props} />
    </Backdrop>
  );
}

export default PageLoader;
