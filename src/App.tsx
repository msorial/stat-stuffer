import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "antd/es/layout";

import StatDasboard from "./lib/pages/StatDashboard/StatDashboard";
import PrizePicksDashboard from "./lib/pages/PrizePicksDashboard/PrizePicksDashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import PageFooter from "./components/PageFooter/PageFooter";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <DashboardHeader />
          <Content style={{ margin: "0 16px" }}>
            <Routes>
              <Route path="/" element={<StatDasboard />} />
              <Route
                path="/PrizePicksPredictor"
                element={<PrizePicksDashboard />}
              />
            </Routes>
          </Content>
          <PageFooter />
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
