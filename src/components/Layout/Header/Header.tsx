import React from "react";
import Affix from "antd/es/affix";
import PlayerSearch from "../../Dashboard/PlayerSearch/PlayerSearch";
import StyledHeader from "./HeaderStyles";

const Header: React.FC = () => {
  return (
    <Affix offsetTop={0}>
      <StyledHeader className="site-layout-background">
        <PlayerSearch />
      </StyledHeader>
    </Affix>
  );
};

export default React.memo(Header);
