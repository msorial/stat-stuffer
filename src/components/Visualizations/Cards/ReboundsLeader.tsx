import React, { useState, useEffect, useMemo } from "react";
import { Statistic } from "antd";
import { useSelector } from "react-redux";
import { selectPlayers } from "../../../app/reducers/playerSlice";
import MetricCard from "../../Dashboard/MetricCard/MetricCard";

const ReboundsLeader: React.FC = () => {
  const playerArray = useSelector(selectPlayers);
  const [rebLeader, setRebLeader] = useState<string>("Search for Player");
  const [maxReb, setMaxReb] = useState<number>(0);

  const sortedPlayerArray = useMemo(
    () => playerArray.slice().sort((a, b) => b.reb - a.reb),
    [playerArray]
  );

  useEffect(() => {
    if (sortedPlayerArray.length > 0) {
      setRebLeader(
        `${sortedPlayerArray[0].firstName} ${sortedPlayerArray[0].lastName}`
      );
      setMaxReb(sortedPlayerArray[0].reb);
    }
  }, [sortedPlayerArray]);

  return (
    <MetricCard title="Rebounds Leader" player={rebLeader}>
      <Statistic value={maxReb} />
    </MetricCard>
  );
};

export default ReboundsLeader;
