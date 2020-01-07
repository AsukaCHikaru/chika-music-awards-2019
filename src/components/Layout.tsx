import React from "react";

type Props = {
  children: any;
};

const Layout = (props: Props) => {
  return <>{props.children}</>;
};

export default Layout;
