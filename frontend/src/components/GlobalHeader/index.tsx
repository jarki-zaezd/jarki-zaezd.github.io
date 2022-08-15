import React from 'react';
import { Link } from 'react-router-dom';

import ToolbarItem from './ToolbarItem';
import { Offset, AppBar, LogoContainer, Toolbar, ToolbarItemsWrapper } from './styles';

import { headerMenuItems } from '../../constants/headerMenu';
import { publicUrls } from '../../config';

const GlobalHeader = () => (
  <>
    <AppBar position="fixed" color="transparent">
      <Toolbar variant="dense">
        <LogoContainer variant="h4" noWrap component={Link} to={publicUrls.dashboard} />

        <ToolbarItemsWrapper>
          {headerMenuItems.map(header => <ToolbarItem key={header.menuTitle} {...header} />)}
        </ToolbarItemsWrapper>
      </Toolbar>
    </AppBar>

    <Offset />
  </>
);

export default GlobalHeader;
