import React from "react";
import "./App.css";
import Layout from "antd/es/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import PrizePicksDashboard from "./lib/pages/PrizePicksDashboard/PrizePicksDashboard";
import StatDasboard from "./lib/pages/StatDashboard/StatDashboard";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <Routes>
              <Route path="/" element={<StatDasboard />} />
              <Route
                path="/PrizePicksPredictor"
                element={<PrizePicksDashboard />}
              />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
