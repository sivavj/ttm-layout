import React from "react";
import BoxedSidebarLayout from "../../../layouts/BoxedSidebar";
import Overview from "../../../pages/Overview";


export default function OverviewBoxedLayout() {
  return (
    <div>
      <Overview />
    </div>
  );
}

OverviewBoxedLayout.getLayout = (
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

