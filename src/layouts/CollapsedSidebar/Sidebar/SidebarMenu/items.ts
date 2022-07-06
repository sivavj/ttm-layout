import { ReactNode } from "react";

import DesignServicesTwoToneIcon from "@mui/icons-material/DesignServicesTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import DevicesOtherTwoToneIcon from "@mui/icons-material/DevicesOtherTwoTone";
import CellWifiTwoToneIcon from "@mui/icons-material/CellWifiTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import CodeOffTwoToneIcon from "@mui/icons-material/CodeOffTwoTone";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";
import FontDownloadOffTwoToneIcon from "@mui/icons-material/FontDownloadOffTwoTone";
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
import EngineeringTwoToneIcon from "@mui/icons-material/EngineeringTwoTone";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";
import DeviceHubTwoToneIcon from "@mui/icons-material/DeviceHubTwoTone";
import AodTwoToneIcon from "@mui/icons-material/AodTwoTone";
import AppShortcutTwoToneIcon from "@mui/icons-material/AppShortcutTwoTone";
import LineStyleTwoToneIcon from "@mui/icons-material/LineStyleTwoTone";

export interface MenuItem {
  link?: string;
  icon?: ReactNode | any;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: "",
    items: [
      {
        name: "Overview",
        icon: DesignServicesTwoToneIcon,
        link: "/blueprints/collapsed-sidebar/overview",
        items: [
          {
            name: "Overview",
            icon: LineStyleTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/overview",
          },
        ],
      },
    ],
  },
  {
    heading: "Console",
    items: [
      {
        name: "Channels",
        icon: DevicesOtherTwoToneIcon,
        link: "/blueprints/collapsed-sidebar/channels",
        items: [
          {
            name: "Channels",
            icon: DeviceHubTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/channels",
          },
          {
            name: "Add Channel",
            icon: AodTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/addChannel",
          },
          {
            name: "Gateways",
            icon: CellWifiTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/gateways",
          },
        ],
      },
    ],
  },
  {
    heading: "Applications",
    items: [
      {
        name: "Applications",
        icon: AppShortcutTwoToneIcon,
        link: "/blueprints/collapsed-sidebar/dashboard",
        items: [
          {
            name: "Dashboards",
            icon: DashboardTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/dashboard",
          },
          {
            name: "Queries",
            icon: CodeOffTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/queries",
          },
          {
            name: "Alerts",
            icon: CampaignTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/alerts",
          },
          {
            name: "Commands",
            icon: FontDownloadOffTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/commands",
          },
        ],
      },
    ],
  },
  {
    heading: "User Details",
    items: [
      {
        name: "User Profile",
        icon: AccountCircleTwoToneIcon,
        link: "/blueprints/collapsed-sidebar/edit-profile",
        items: [
          {
            name: "User Settings",
            icon: EngineeringTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/edit-profile",
          },
          {
            name: "Profile Details",
            icon: ContactMailTwoToneIcon,
            link: "/blueprints/collapsed-sidebar/details",
          },
        ],
      },
    ],
  },
];

export default menuItems;
