import React from 'react';
import styled from 'styled-components';

import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import MuiMenuList from '@mui/material/MenuList';
import MuiPaper from '@mui/material/Paper';

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

export const ToolbarItemsWrapper = styled.div`
  height: 100%;
  margin-left: 20px;
`;

export const ToolbarItem = styled(MuiButton)`
  && {
    height: 100%;
    background-color: ${white} !important;
    font-weight: 300;
    color: rgb(0, 0, 0);
    text-transform: none;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }
`;

type StyleButtonProps = {
  $isOpen?: boolean;
  $isActive: boolean;
};

type StyleMenuItemProps = {
  $isActive: boolean;
  $premium?: boolean
};

type ComponentProp<C> = {
  component?: C
};

export const ToolbarItemDropdown = styled(ToolbarItem)<StyleButtonProps>`
  && {
    border-radius: 0;

    ${props => props.$isActive && `
      box-shadow: inset 0 -2px 0 0 ${primaryColor} !important;
      font-weight: 500;
    `}

    ${props => props.$isOpen && `
      color: ${primaryColor} !important;
      background-color: ${white};
      border-left: 1px solid #dfdfe8;
      border-right: 1px solid #dfdfe8;
    `}
  }
`;

export const ToolbarItemLinkStyle = styled(ToolbarItem)<StyleButtonProps>`
  && {
    border-radius: 0;

    ${props => props.$isActive && `
      box-shadow: inset 0 -2px 0 0 ${primaryColor}  !important;
      font-weight: 500;
    `}

    padding: 0 12px;
    :hover {
      color: ${primaryColor};
    }
  }
`;

export const ToolbarItemLink = <C extends React.ElementType>(
  props: ButtonProps<C, StyleButtonProps & ComponentProp<C>>,
) => {
  return <ToolbarItemLinkStyle {...props} />;
};

export const Paper = styled(MuiPaper)`
  && {
    border-radius: 0px;
    width: 160px;
  }
`;

export const MenuList = styled(MuiMenuList)`
  && {
    padding: 0;
  }
`;

export const MenuItemStyle = styled(MuiMenuItem)<StyleMenuItemProps>`
  && {
    height: 46px;
    font-size: 14px;

    :hover {
      background-color: rgb(240, 240, 245) !important;
    }

    ${props => props.$isActive && `
      color: black;
      font-weight: 700;
    `}
    ${props => props.$premium && `
      background-color: #f7f7fa;
    `}
  }
`;

export const MenuItem = <C extends React.ElementType>(
  props: MenuItemProps<C, StyleMenuItemProps & ComponentProp<C>>,
) => {
  return <MenuItemStyle {...props} />;
};

export const SubscriptionLabel = styled(MuiTypography)`
  && {
    font-size: 9px;
    padding: 12px 12px 0 12px;
    background-color: #f7f7fa;
  }
`;
