import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SuccessPage from "./pages/SuccessPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
