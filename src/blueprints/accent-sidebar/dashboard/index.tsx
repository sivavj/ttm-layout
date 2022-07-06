import React from "react";
import AccentSidebarLayout from "../../../layouts/AccentSidebar";
import Dashboard from "../../../pages/Dashboard";

export default function DashboardAccentSidebarLayout() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
DashboardAccentSidebarLayout.getLayout = (
  page:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) => {
  <AccentSidebarLayout>{page}</AccentSidebarLayout>;
};
