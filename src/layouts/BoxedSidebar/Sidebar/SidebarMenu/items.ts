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
import DeviceHubTwoToneIcon from '@mui/icons-material/DeviceHubTwoTone';
import AodTwoToneIcon from '@mui/icons-material/AodTwoTone';

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
        link: "/blueprints/boxed-sidebar/overview",
      },
    ],
  },
  {
    heading: "Console",
    items: [
      {
        name: "Channels",
        icon: DevicesOtherTwoToneIcon,
        link: "/blueprints/boxed-sidebar/channels",
        items: [
          {
            name: "Channels",
            icon: DeviceHubTwoToneIcon,
            link: "/blueprints/boxed-sidebar/channels",
          },
          {
            name: "Add Channel",
            icon: AodTwoToneIcon,
            link: "/blueprints/boxed-sidebar/addChannel"
          }
        ]
      },
      {
        name: "Gateways",
        icon: CellWifiTwoToneIcon,
        link: "/blueprints/boxed-sidebar/gatways",
      },
    ],
  },
  {
    heading: "Applications",
    items: [
      {
        name: "Dashboards",
        icon: DashboardTwoToneIcon,
        link: "/blueprints/boxed-sidebar/dashboard",
      },
      {
        name: "Queries",
        icon: CodeOffTwoToneIcon,
        link: "/blueprints/boxed-sidebar/queries",
      },
      {
        name: "Alerts",
        icon: CampaignTwoToneIcon,
        link: "/blueprints/boxed-sidebar/alerts",
      },
      {
        name: "Commands",
        icon: FontDownloadOffTwoToneIcon,
        link: "/blueprints/boxed-sidebar/commands",
      },
    ],
  },
  {
    heading: "User Details",
    items: [
      {
        name: "User Profile",
        icon: AccountCircleTwoToneIcon,
        link: "/blueprints/boxed-sidebar/edit-profile",
        items: [
          {
            name: "User Settings",
            icon: EngineeringTwoToneIcon,
            link: "/blueprints/boxed-sidebar/edit-profile",
          },
          {
            name: "Profile Details",
            icon: ContactMailTwoToneIcon,
            link: "/blueprints/boxed-sidebar/details",
          },
        ],
      },
    ],
  },
];

export default menuItems;
