import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';

import { KeyboardArrowDown } from '@mui/icons-material';
import { MenuList, Paper, ToolbarItemDropdown, ToolbarItemLink, MenuItem } from './styles';

import { ItemsProps } from '../../constants/headerMenu';

const baseButtonProps = {
  variant: 'text',
  color: 'inherit',
  disableElevation: true,
  disableFocusRipple: true,
  disableRipple: true,
  disableTouchRipple: true,
} as const;

const ToolbarLink = ({ menuTitle, link }: { menuTitle: string; link: string }) => {
  const { pathname } = useLocation();

  return (
    <ToolbarItemLink
      {...baseButtonProps}
      $isActive={pathname === link}
      id={`${menuTitle}-link`}
      component={Link}
      to={link}
    >
      {menuTitle}
    </ToolbarItemLink>
  );
};

const ToolbarDropdown = ({ menuTitle, items }: ItemsProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();

  const toolbarItemRef = React.useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = React.useRef<HTMLDivElement>(null);

  const handleDropdownOpen = () => {
    setIsOpen(true);
  };

  const handleDropdownClose = (event: React.MouseEvent<HTMLElement>) => {
    const relatedTarget = event.relatedTarget;

    // If secondary target for the mouseOver event is not button or menu then close dropdown
    if (!(relatedTarget instanceof Node) ||
        !(toolbarItemRef.current?.contains(relatedTarget) || dropdownMenuRef.current?.contains(relatedTarget))
    ) {
      setIsOpen(false);
    }
  };

  const isActiveItem = () => {
    return !!items?.some(item => item.link === pathname);
  };

  return (
    <React.Fragment>
      <ToolbarItemDropdown
        {...baseButtonProps}
        $isOpen={isOpen}
        $isActive={isActiveItem()}
        ref={toolbarItemRef}
        id={`${menuTitle}-menu`}
        aria-controls={isOpen ? `${menuTitle}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onMouseOver={handleDropdownOpen}
        onMouseLeave={handleDropdownClose}
        endIcon={<KeyboardArrowDown />}
      >
        {menuTitle}
      </ToolbarItemDropdown>

      <Popper
        open={isOpen}
        anchorEl={toolbarItemRef.current}
        ref={dropdownMenuRef}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <MenuList autoFocusItem={isOpen} onMouseLeave={handleDropdownClose}>
                {items?.map(item => (
                  <MenuItem key={item.title} $isActive={pathname === item.link} component={Link} to={item.link}>
                    {item.title}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

const NavItem = ({ menuTitle, items, link }: ItemsProps) => {
  if (link) {
    return <ToolbarLink menuTitle={menuTitle} link={link} />;
  }

  return <ToolbarDropdown menuTitle={menuTitle} items={items} />;
};

export default NavItem;
