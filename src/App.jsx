import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.jsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import MetricCard from './components/MetricCard.jsx';

function Home() {
  return (
    <main>
      <h3>Dashboard</h3>
      <div className='metric-grid'>
        <MetricCard title="Active Users" value={239} />
        <MetricCard title="Active Contracts" value={46} />
        <MetricCard title="Monthly Revenue" value={new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP',}).format(456078)} />
        <MetricCard title="Gross Profit" value={new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP',}).format(249801)} />
      </div>
    </main>
  );
}
function Settings() {
  return <h2>Settings</h2>;
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;