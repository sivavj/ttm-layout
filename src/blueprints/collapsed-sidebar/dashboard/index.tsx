import React from "react";
import CollapsedSidebarLayout from "../../../layouts/CollapsedSidebar";
import Dashboard from "../../../pages/Dashboard";

export default function DashboardCollapsedLayout() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
DashboardCollapsedLayout.getLayout = (
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
  <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>;
};
