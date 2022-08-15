import React from 'react';
import { Link } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';
import { Offset, AppBar, LogoContainer, Toolbar, MenuItemsWrapper } from './styles';

import { headerMenuItems } from '../../constants/headerMenu';
import { publicUrls } from '../../config';

function GlobalHeader() {
  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Toolbar variant="dense">
          <LogoContainer variant="h4" noWrap component={Link} to={publicUrls.dashboard} />

          <MenuItemsWrapper>
            {headerMenuItems.map(header => <DropdownMenu key={header.menuTitle} {...header} />)}
          </MenuItemsWrapper>
        </Toolbar>
      </AppBar>

      <Offset />
    </>
  );
}

export default GlobalHeader;
