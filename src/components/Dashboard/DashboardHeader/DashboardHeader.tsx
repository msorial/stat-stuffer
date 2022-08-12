import React from "react";
import { PageHeader, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deletePlayer, selectPlayers } from "../../../app/reducers/playerSlice";

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  const dispatch = useDispatch();
  const playerArray = useSelector(selectPlayers);

  const handleDeletePlayer = (id: number) => {
    dispatch(deletePlayer(id));
  };

  return (
    <PageHeader
      className="site-page-header"
      title={title}
      subTitle={playerArray.map((player) => {
        return (
          <Tag
            key={player.id}
            closable
            onClose={() => handleDeletePlayer(player.id)}
          >
            {player.firstName} {player.lastName}
          </Tag>
        );
      })}
    />
  );
};

export default DashboardHeader;
