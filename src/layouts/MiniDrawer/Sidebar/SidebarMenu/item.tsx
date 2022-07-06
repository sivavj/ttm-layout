import { FC, ReactNode, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { SidebarContext } from "../../../../contexts/SidebarContext";

import PropTypes from "prop-types";
import {
  Button,
  Badge,
  Collapse,
  ListItem,
  MenuItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import ExpandLessTwoToneIcon from "@mui/icons-material/ExpandLessTwoTone";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

interface SidebarMenuItemProps {
  children?: ReactNode;
  link?: any;
  icon?: any;
  badge?: string;
  open?: boolean;
  active?: boolean;
  name: string;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  children,
  link,
  icon: Icon,
  badge,
  open: openParent,
  active,
  name,
  ...rest
}) => {
  const [menuToggle, setMenuToggle] = useState<boolean | undefined>(openParent);

  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  const toggleMenu = (): void => {
    setMenuToggle((Open) => !Open);
  };

  if (children) {
    return (
      <ListItem component="div" className="Mui-children" key={name} {...rest}>
        <Button
          className={clsx({ "Mui-active": menuToggle })}
          startIcon={Icon && <Icon />}
          endIcon={
            menuToggle ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />
          }
          onClick={toggleMenu}
        >
          {name}
        </Button>
        <Collapse in={menuToggle}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <List>
      <ListItem component="div" key={name} {...rest}>
        <ListItemButton
          className={clsx({ "Mui-active": active })}
          component={NavLink}
          onClick={toggleSidebar}
          to={link}
          sx={{
            minHeight: 48,
            justifyContent: "initial",
            px: 0,
          }}
        >
          <ListItemIcon>
            {Icon && <Icon />}
          </ListItemIcon>
          <ListItemText primary={name} sx={{display: sidebarToggle ? 'block' : 'none' }}/>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

SidebarMenuItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  link: PropTypes.string,
  icon: PropTypes.elementType,
  badge: PropTypes.string,
  open: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

SidebarMenuItem.defaultProps = {
  open: false,
  active: false,
};

export default SidebarMenuItem;
