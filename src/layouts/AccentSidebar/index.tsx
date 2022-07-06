import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import PropTypes from "prop-types";

import Sidebar from './Sidebar';
import Header from './Header';

interface AccentSidebarLayoutProps {
  children?: ReactNode;
}

const MainWrapper = styled(Box)(
  ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            padding-left: ${theme.sidebar.width};
        }
`
);

const MainContent = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`
);

const AccentSidebarLayout: FC<AccentSidebarLayoutProps> = ({children}) => {
  console.log("accent children: ", children)
  return (
    <>
      <Sidebar />
      <MainWrapper>
        <Header />
        <MainContent>
          {children}
          <Outlet />
        </MainContent>
      </MainWrapper>
    </>
  );
};
AccentSidebarLayout.propTypes = {
  children: PropTypes.node
}
export default AccentSidebarLayout;
