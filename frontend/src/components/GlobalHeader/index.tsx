import React from 'react';
import { Link } from 'react-router-dom';

import ToolbarItem from './ToolbarItem';
import { Offset, AppBar, LogoContainer, Toolbar, ToolbarItemsWrapper } from './styles';

import globalHeaderItems from '../../constants/globalHeader';
import { publicUrls } from '../../config';

const GlobalHeader = () => (
  <React.Fragment>
    <AppBar position="fixed" color="transparent">
      <Toolbar variant="dense">
        <LogoContainer variant="h4" noWrap component={Link} to={publicUrls.dashboard} />

        <ToolbarItemsWrapper>
          {globalHeaderItems.map(header => <ToolbarItem key={header.menuTitle} {...header} />)}
        </ToolbarItemsWrapper>
      </Toolbar>
    </AppBar>

    <Offset />
  </React.Fragment>
);

export default GlobalHeader;
