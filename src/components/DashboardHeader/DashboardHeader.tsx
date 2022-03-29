import React from "react";

import StyledDashboardHeader from "./DashboardHeaderStyles";
import Affix from "antd/es/affix";
import Input from "../Input/Input";

const DashboardHeader: React.FC = () => {
  return (
    <Affix offsetTop={0}>
      <StyledDashboardHeader className="site-layout-background">
        <Input placeholder="Search Player" />
      </StyledDashboardHeader>
    </Affix>
  );
};

export default DashboardHeader;
