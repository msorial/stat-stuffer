import React, { useState, useEffect, useMemo } from "react";
import { Statistic } from "antd";
import { useSelector } from "react-redux";
import { selectPlayers } from "../../../app/reducers/playerSlice";
import MetricCard from "../../Dashboard/MetricCard/MetricCard";

const PointsLeader: React.FC = () => {
  const playerArray = useSelector(selectPlayers);
  const [ptsLeader, setPtsLeader] = useState<string>("Search for Player");
  const [maxPts, setMaxPts] = useState<number>(0);

  const sortedPlayerArray = useMemo(
    () => playerArray.slice().sort((a, b) => b.pts - a.pts),
    [playerArray]
  );

  useEffect(() => {
    if (sortedPlayerArray.length > 0) {
      setPtsLeader(
        `${sortedPlayerArray[0].firstName} ${sortedPlayerArray[0].lastName}`
      );
      setMaxPts(sortedPlayerArray[0].pts);
    }
  }, [sortedPlayerArray]);

  return (
    <MetricCard title="Points Leader" player={ptsLeader}>
      <Statistic value={maxPts} />
    </MetricCard>
  );
};

export default PointsLeader;
