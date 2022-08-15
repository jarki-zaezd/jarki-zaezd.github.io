import styled from 'styled-components';

import MuiMenuItem from '@mui/material/MenuItem';
import MuiButton from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';

import { globalHeaderHeight, lightGray, primaryColor, white } from '../../config/theme';

import appLogo from '../../logo.svg';

export const Offset = styled.div`
  box-sizing: border-box;
  height: ${globalHeaderHeight}px;
`;

export const AppBar = styled(MuiAppBar)`
  && {
    box-shadow: 0 1px 2px rgb(0 0 0 / 3%);
    border-bottom: 1px solid ${lightGray};
    height: ${globalHeaderHeight}px;
    user-select: none;
  }
`;

export const Toolbar = styled(MuiToolbar)`
  && {
    padding: 0 16px;
    margin: 0 32px;
    height: ${globalHeaderHeight}px;
  }
`;

export const LogoContainer = styled(MuiTypography)`
  && {
    background-image: url(${appLogo});
    background-size: cover;
    background-position: left top;
    background-repeat: no-repeat;
    height: 20px;
    width: 95px
  }
` as typeof MuiTypography;

export const MenuItemsWrapper = styled.div`
  height: 100%;
  margin-left: 20px;
`;

type MenuButtonProps = {
  $isOpen: boolean;
};

export const BaseNavbarButton = styled(MuiButton)`
  && {
    height: 100%;
    background-color: ${white} !important;
    text-transform: none;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const NavbarItemBase = styled(MuiButton)`
  && {
    height: 100%;
    background-color: ${white} !important;
    text-transform: none;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const NavbarItemDropdown = styled(NavbarItemBase)<MenuButtonProps>`
  && {
    ${props => props.$isOpen && `
    color: ${primaryColor};
    border-radius: 0;
    background-color: ${white};
    border-left: 1px solid #dfdfe8;
    border-right: 1px solid #dfdfe8;
    border-bottom: 1px solid #fff;
    `}
  }
`;

export const NavBarItemLink = styled(NavbarItemBase)`
  && {
    padding: 0 12px;
    :hover {
      color: ${primaryColor};
    }
  }
`;

export const Button = styled(MuiButton)<MenuButtonProps>`
  && {
    height: 100%;
    background-color: ${white} !important;
    text-transform: none;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;


    ${props => props.$isOpen && `
      color: ${primaryColor};
      border-radius: 0;
      background-color: ${white};
      border-left: 1px solid #dfdfe8;
      border-right: 1px solid #dfdfe8;
      border-bottom: 1px solid #fff;
    `}
  }
`;

export const MenuItem = styled(MuiMenuItem)`
  
` as typeof MuiMenuItem;
