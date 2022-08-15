import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Grow from '@mui/material/Grow';
import MenuList from '@mui/material/MenuList';
import Popper from '@mui/material/Popper';

import { KeyboardArrowDown } from '@mui/icons-material';
import { NavbarItemDropdown, NavBarItemLink, MenuItem } from './styles';

import { ItemsProps } from '../../constants/headerMenu';

function RedirectMenuItem({ menuTitle, link }: { menuTitle: string; link: string }) {
  const navigate = useNavigate();

  return (
    <NavBarItemLink
      id={`${menuTitle}-button`}
      variant="text"
      color="inherit"
      onClick={() => navigate(link)}
      disableElevation
      disableFocusRipple
      disableRipple
      disableTouchRipple
    >
      {menuTitle}
    </NavBarItemLink>
  );
}

function DropdownMenu({ menuTitle, items }: ItemsProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
    const relatedTarget = event.relatedTarget;

    if (!(relatedTarget instanceof Node)) { // For case when relatedTarget is window object
      return;
    }

    // If secondary target for the mouseOver event is not button or menu then close window
    if (!(buttonRef.current?.contains(relatedTarget) || menuRef.current?.contains(relatedTarget))) {
      setIsOpen(false);
    }
  };

  return (
    <React.Fragment>
      <NavbarItemDropdown
        $isOpen={isOpen}
        ref={buttonRef}
        id={`${menuTitle}-menu`}
        aria-controls={isOpen ? `${menuTitle}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        variant="text"
        color="inherit"
        onMouseOver={handleMenuOpen}
        onMouseLeave={handleMenuClose}
        disableElevation
        disableFocusRipple
        disableRipple
        disableTouchRipple
        endIcon={<KeyboardArrowDown />}
      >
        {menuTitle}
      </NavbarItemDropdown>

      <Popper
        open={isOpen}
        anchorEl={buttonRef.current}
        ref={menuRef}
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
            <MenuList autoFocusItem={isOpen} onMouseLeave={handleMenuClose}>
              {items?.map(item => (
                <MenuItem key={item.title} component={Link} to={item.link}>
                  {item.title}
                </MenuItem>
              ))}
            </MenuList>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}

function NavItem({ menuTitle, items, link }: ItemsProps) {
  if (link) {
    return <RedirectMenuItem menuTitle={menuTitle} link={link} />;
  }

  return <DropdownMenu menuTitle={menuTitle} items={items} />;
}

export default NavItem;
