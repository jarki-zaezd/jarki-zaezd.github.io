import styled from 'styled-components';

import MuiBackdrop from '@mui/material/Backdrop';
import MuiCircularProgress from '@mui/material/CircularProgress';

import { pageLoadingBackdrop, pageLoadingSpinner } from '../../config/theme';

export const Backdrop = styled(MuiBackdrop)`
  z-index: ${pageLoadingBackdrop};
`;

export const CircularProgress = styled(MuiCircularProgress)`
  z-index: ${pageLoadingSpinner};
`;
