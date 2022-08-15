import { createTheme as createMuiTheme } from '@mui/material/styles';

export const globalHeaderHeight = 55;

export const white = '#FFFFFF';
export const lightGray = '#F0F0F5';
export const primaryColor = '#FC5200';

export const loadingBackdropBackground = 'rgba(255, 255, 255, .8)';

// const above = 1;
const below = -1;

export const pageLoadingSpinner = 1000;
export const pageLoadingBackdrop = below + pageLoadingSpinner;

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
});
