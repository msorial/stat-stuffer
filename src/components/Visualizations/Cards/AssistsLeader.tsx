import React, { useState, useEffect, useMemo } from "react";
import { Statistic } from "antd";
import { useSelector } from "react-redux";
import { selectPlayers } from "../../../app/reducers/playerSlice";
import MetricCard from "../../Dashboard/MetricCard/MetricCard";

const AssistsLeader: React.FC = () => {
  const playerArray = useSelector(selectPlayers);
  const [astLeader, setAstLeader] = useState<string>("Search for Player");
  const [maxAst, setMaxAst] = useState<number>(0);

  const sortedPlayerArray = useMemo(
    () => playerArray.slice().sort((a, b) => b.ast - a.ast),
    [playerArray]
  );

  useEffect(() => {
    if (sortedPlayerArray.length > 0) {
      setAstLeader(
        `${sortedPlayerArray[0].firstName} ${sortedPlayerArray[0].lastName}`
      );
      setMaxAst(sortedPlayerArray[0].ast);
    }
  }, [sortedPlayerArray]);

  return (
    <MetricCard title="Assists Leader" player={astLeader}>
      <Statistic value={maxAst} />
    </MetricCard>
  );
};

export default AssistsLeader;
