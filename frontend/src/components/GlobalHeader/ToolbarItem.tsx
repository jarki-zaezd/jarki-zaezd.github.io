import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';

import { KeyboardArrowDown } from '@mui/icons-material';
import { SubscriptionLabel, MenuList, Paper, ToolbarItemDropdown, ToolbarItemLink, MenuItem } from './styles';

import {
  LinkMenuItem, DropdownMenuItem, MenuItemProps, DropdownItemProps, filterPremiumAndNormalItems,
} from '../../constants/globalHeader';

const baseToolbarItemProps = {
  variant: 'text',
  color: 'inherit',
  disableElevation: true,
  disableFocusRipple: true,
  disableRipple: true,
  disableTouchRipple: true,
} as const;

const ToolbarLink = ({ menuTitle, link }: LinkMenuItem) => {
  const { pathname } = useLocation();

  return (
    <ToolbarItemLink
      $isActive={pathname === link}
      {...baseToolbarItemProps}
      id={`${menuTitle}-link`}
      component={Link}
      to={link}
    >
      {menuTitle}
    </ToolbarItemLink>
  );
};

interface DropDownMenuProps {
  isOpen: boolean;
  items: DropdownItemProps[],
  toolbarItemRef: React.RefObject<HTMLButtonElement>;
  handleDropdownClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropDownMenuProps>(
  ({ isOpen, toolbarItemRef, handleDropdownClose, items }, ref) => {
    const { pathname } = useLocation();
    const { premiumItems, normalItems } = useMemo(() => filterPremiumAndNormalItems(items), [items]);

    return (
      <Popper
        open={isOpen}
        anchorEl={toolbarItemRef.current}
        ref={ref}
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
                {normalItems.map(item => (
                  <MenuItem key={item.title} $isActive={pathname === item.link} component={Link} to={item.link}>
                    {item.title}
                  </MenuItem>
                ))}

                {premiumItems.length && <SubscriptionLabel>SUBSCRIPTION</SubscriptionLabel>}

                {premiumItems.map(item => (
                  <MenuItem
                    key={item.title}
                    $premium
                    $isActive={pathname === item.link}
                    component={Link}
                    to={item.link}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  },
);

const ToolbarDropdown = ({ menuTitle, items }: DropdownMenuItem) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

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

  return (
    <React.Fragment>
      <ToolbarItemDropdown
        $isActive={!!items.some(item => item.link === pathname)}
        $isOpen={isOpen}
        {...baseToolbarItemProps}
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

      <DropdownMenu
        isOpen={isOpen}
        items={items}
        handleDropdownClose={handleDropdownClose}
        toolbarItemRef={toolbarItemRef}
        ref={dropdownMenuRef}
      />
    </React.Fragment>
  );
};

const NavItem = ({ menuTitle, items, link }: MenuItemProps) => {
  if (link) {
    return <ToolbarLink menuTitle={menuTitle} link={link} />;
  }

  return <ToolbarDropdown menuTitle={menuTitle} items={items} />;
};

export default NavItem;
