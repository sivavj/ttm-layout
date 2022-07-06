import React from "react";
import CollapsedSidebarLayout from "../../../layouts/CollapsedSidebar";
import Overview from "../../../pages/Overview";


export default function OverviewCollapsedLayout() {
  return (
    <div>
      <Overview />
    </div>
  );
}

OverviewCollapsedLayout.getLayout = (
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

