import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App
