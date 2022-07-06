import React from "react";
import BoxedSidebarLayout from "../../../layouts/BoxedSidebar";
import Channel from "../../../pages/Channel";

export default function ChannelBoxedLayout() {
  return (
    <div>
      <Channel />
    </div>
  );
}

ChannelBoxedLayout.getLayout = (
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
