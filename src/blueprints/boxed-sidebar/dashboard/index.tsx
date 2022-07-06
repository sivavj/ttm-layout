import React from "react";
import BoxedSidebarLayout from "../../../layouts/BoxedSidebar";
import Dashboard from "../../../pages/Dashboard";

export default function DashboardBoxedLayout() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
DashboardBoxedLayout.getLayout = (
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
  <BoxedSidebarLayout>{page}</BoxedSidebarLayout>;
};
