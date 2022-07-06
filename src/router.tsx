import { Navigate, RouteObject } from "react-router-dom";
import AccentSidebarLayout from "./layouts/AccentSidebar";
import BaseLayout from "./layouts/BaseLayout";
import BoxedSidebarLayout from "./layouts/BoxedSidebar";
import CollapsedSidebarLayout from "./layouts/CollapsedSidebar";
import ExtendedSidebarLayout from "./layouts/ExtendedSidebar";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Status404 from "./pages/Status/404";
import TestApp from "./TestApp";
import AddChannel from "./pages/Channel/AddChannel";
import Channel from "./pages/Channel";
import EditProfile from "./pages/Users/EditProfile";
import Register from "./pages/Users/Register";
import ForgotPassword from "./pages/Users/ForgotPassword";
import ResetPassword from "./pages/Users/ResetPassword";
import Logout from "./pages/Users/Logout";
import Login from "./pages/Users/Login";
import CollapsedDrawerLayout from "./layouts/CollapsedDrawer";
import MiniDrawerLayout from "./layouts/MiniDrawer";
import { Icon } from "@mui/material";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <Status404 />,
          },
        ],
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  // Default Layout
  {
    path: "/overview",
    element: <MiniDrawerLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/overview/main" replace />,
      },
      {
        path: "main",
        element: <Overview />,
      },
    ],
  },
  {
    path: "/console",
    element: <MiniDrawerLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/console/channels" replace />,
      },
      {
        path: "channels",
        element: <Channel />,
      },
      {
        path: "addChannel",
        element: <AddChannel />,
      },
      {
        path: "gateways",
        element: <TestApp />,
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "/applications",
    element: <MiniDrawerLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/applications/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/user-profile",
    element: <MiniDrawerLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/user-profile/edit-profile" replace />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },

      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  // Accent Sidebar Layouts
  {
    path: "/blueprints/accent-sidebar",
    element: <AccentSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/accent-sidebar/overview" replace />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
  {
    path: "/blueprints/accent-sidebar",
    element: <AccentSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/accent-sidebar/channels" replace />,
      },
      {
        path: "channels",
        element: <Channel />,
      },
      {
        path: "addChannel",
        element: <AddChannel />,
      },
      {
        path: "gateways",
        element: <TestApp />,
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "/blueprints/accent-sidebar",
    element: <AccentSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/accent-sidebar/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/blueprints/accent-sidebar",
    element: <AccentSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/accent-sidebar/edit-profile" replace />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },

      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  // Boxed Layouts
  {
    path: "/blueprints/boxed-sidebar",
    element: <BoxedSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/boxed-sidebar/overview" replace />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
  {
    path: "/blueprints/boxed-sidebar",
    element: <BoxedSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/boxed-sidebar/channels" replace />,
      },
      {
        path: "channels",
        element: <Channel />,
      },
      {
        path: "addChannel",
        element: <AddChannel />,
      },
      {
        path: "gateways",
        element: <TestApp />,
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "/blueprints/boxed-sidebar",
    element: <BoxedSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/boxed-sidebar/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/blueprints/boxed-sidebar",
    element: <BoxedSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/boxed-sidebar/edit-profile" replace />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },

      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  // Collapsed Sidebar
  {
    path: "/blueprints/collapsed-sidebar",
    element: <CollapsedSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/collapsed-sidebar/overview" replace />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
  {
    path: "/blueprints/collapsed-sidebar",
    element: <CollapsedSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/collapsed-sidebar/channels" replace />,
      },
      {
        path: "channels",
        element: <Channel />,
      },
      {
        path: "addChannel",
        element: <AddChannel />,
      },
      {
        path: "gateways",
        element: <TestApp />,
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "/blueprints/collapsed-sidebar",
    element: <CollapsedSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/collapsed-sidebar/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/blueprints/collapsed-sidebar",
    element: <CollapsedSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/blueprints/collapsed-sidebar/edit-profile" replace />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },

      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  
];
export default routes;

