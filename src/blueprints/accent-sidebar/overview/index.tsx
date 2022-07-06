import React from "react";
import AccentSidebarLayout from "../../../layouts/AccentSidebar";
import Overview from "../../../pages/Overview";


export default function OverviewAccentSidebarLayout() {
  return (
    <div>
      <Overview />
    </div>
  );
}

OverviewAccentSidebarLayout.getLayout = (
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

