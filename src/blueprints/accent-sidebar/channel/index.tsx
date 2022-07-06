import React from "react";
import AccentSidebarLayout from "../../../layouts/AccentSidebar";
import Channel from "../../../pages/Channel";

export default function ChannelAccentSidebarLayout() {
  return (
    <div>
      <Channel />
    </div>
  );
}

ChannelAccentSidebarLayout.getLayout = (
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
