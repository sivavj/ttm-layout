import React from "react";
import CollapsedSidebarLayout from "../../../layouts/CollapsedSidebar";
import Channel from "../../../pages/Channel";

export default function ChannelCollaspedLayout() {
  return (
    <div>
      <Channel />
    </div>
  );
}

ChannelCollaspedLayout.getLayout = (
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
