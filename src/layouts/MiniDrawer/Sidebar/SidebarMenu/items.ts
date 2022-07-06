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
        link: "/overview/main",
      },
    ],
  },
  {
    heading: "",
    items: [
      {
        name: "Channels",
        icon: DeviceHubTwoToneIcon,
        link: "/console/channels",
      },
      {
        name: "Add Channel",
        icon: AodTwoToneIcon,
        link: "/console/addChannel",
      },
      {
        name: "Gateways",
        icon: CellWifiTwoToneIcon,
        link: "/console/gateways",
      },
    ],
  },
  {
    heading: "",
    items: [
      {
        name: "Dashboards",
        icon: DashboardTwoToneIcon,
        link: "/applications/dashboard",
      },
      {
        name: "Queries",
        icon: CodeOffTwoToneIcon,
        link: "/applications/queries",
      },
      {
        name: "Alerts",
        icon: CampaignTwoToneIcon,
        link: "/applications/alerts",
      },
      {
        name: "Commands",
        icon: FontDownloadOffTwoToneIcon,
        link: "/applications/commands",
      },
    ],
  },
  {
    heading: "",
    items: [
      {
        name: "User Settings",
        icon: EngineeringTwoToneIcon,
        link: "/user-profile/edit-profile",
      },
      {
        name: "Profile Details",
        icon: ContactMailTwoToneIcon,
        link: "/user-profile/details",
      },
    ],
  },
];

export default menuItems;
