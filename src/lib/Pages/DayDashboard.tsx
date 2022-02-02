import React, { useState, useEffect } from "react";

import { Layout, Col, Row } from "antd";
const { Content } = Layout;

import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageFooter from "../../components/PageFooter/PageFooter";
import MetricCard from "../../components/MetricCard/MetricCard";
import axios from "axios";

const DayDashboard: React.FC = () => {
  const [stats, setStats] = useState<any>();

  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  const prevDay = day - 1;
  const currentMonth = month + 1;

  useEffect(() => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/stats?start_date=${year}-${
          month + 1
        }-${day - 1}&end_date=${year}-${currentMonth}-${prevDay}&per_page=100`
      )
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(stats);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <PageHeader />
        <Content style={{ margin: "0 16px" }}>
          <Row gutter={[32, 16]}>
            <Col span={6}>
              <MetricCard title="Points Leader" bordered={false}>
                test
              </MetricCard>
            </Col>
          </Row>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
};

export default DayDashboard;
