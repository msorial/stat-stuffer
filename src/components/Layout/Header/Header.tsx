import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addPlayer, selectPlayers } from "../../../app/reducers/playerSlice";

import StyledHeader from "./HeaderStyles";
import Affix from "antd/es/affix";
import DatePicker from "antd/es/date-picker";
import Input from "antd/es/input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
const { Search } = Input;

const StyledDatePick = styled(DatePicker)`
  width: 200px;
  margin-left: 10px;
  vertical-align: middle;
`;

const StyledInput = styled(Search)`
  width: 200px;
  vertical-align: middle;
`;

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState<string>("");

  const onSearch = (value: string) => {
    if (value !== "") {
      setPlayerName(value);
    }
  };

  useEffect(() => {
    if (playerName !== "") {
      fetch(`https://www.balldontlie.io/api/v1/players/?search=${playerName}`)
        .then((res) => res.json())
        .then((e) =>
          dispatch(
            addPlayer({
              id: e.data[0].id,
              firstName: e.data[0].first_name,
              lastName: e.data[0].last_name,
            })
          )
        );
    }
  }, [dispatch, playerName]);

  return (
    <Affix offsetTop={0}>
      <StyledHeader className="site-layout-background">
        <StyledInput
          placeholder="Search Player"
          allowClear
          onSearch={onSearch}
        />
        <StyledDatePick picker="year" />
      </StyledHeader>
    </Affix>
  );
};

export default Header;
