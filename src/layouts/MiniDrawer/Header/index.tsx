import { useContext, useState } from "react";

import { Box, Hidden, IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { SidebarContext, useSideBarContext } from "../../../contexts/SidebarContext";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMenu from "./Menu";
import HeaderButtons from "./Buttons";
import HeaderUserbox from "./Userbox";
import Logo from "../../../components/Logo";

interface HeaderWrapperProps {
  sidebarWidth: number,
}

const HeaderWrapper = styled(Box,{
  shouldForwardProp: ()=> true
})<HeaderWrapperProps>(
  ({ theme, sidebarWidth}) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 5;
        background-color: ${theme.header.background};
        box-shadow: ${theme.header.boxShadow};
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${sidebarWidth}px;
            width: auto;
        }
`
);
interface DrawerOpenProps {
}

function Header(Props: DrawerOpenProps) {
  const {sidebarToggle, toggleSidebar} = useSideBarContext();
  return (
    <HeaderWrapper display="flex" alignItems="center" sidebarWidth={sidebarToggle ? 240: 73 }>
      <Box display="flex" alignItems="center">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebar}
          edge="start"
          sx={{
            marginRight: 5,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Hidden lgUp>
          <Logo />
        </Hidden>
        <Hidden mdDown>
          <HeaderMenu />
        </Hidden>
      </Box>
      <Box display="flex" alignItems="center">
        <HeaderButtons />
        <HeaderUserbox />
        <Hidden lgUp>
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoToneIcon /> : <CloseTwoToneIcon />}
            </IconButton>
          </Tooltip>
        </Hidden>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
