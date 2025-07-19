import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.jsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import MetricCard from './components/MetricCard.jsx';
import LiveBitcoinChart from './components/LiveBitcoinChart.jsx';

function Home() {
  return (
    <main>
      <h3>Dashboard</h3>
      <div className="dashboard-grid">
        <div className='metric-grid'>
          <MetricCard title="Active Users" value={239} />
          <MetricCard title="Active Contracts" value={46} />
          <MetricCard title="Monthly Revenue" value={new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(456078)} />
          <MetricCard title="Gross Profit" value={new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(249801)} />
        </div>
        <div className='chart-grid'>
          <LiveBitcoinChart />
        </div>
      </div>
    </main>
  );
}

function Settings() {
  return (
    <main>
      <h3>Settings</h3>
    </main>
  );
}

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='app-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;