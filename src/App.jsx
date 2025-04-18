import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
