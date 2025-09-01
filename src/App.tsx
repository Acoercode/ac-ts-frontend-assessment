import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FrontLandingPage from "./components/FrontLandingPage";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div
        className="App"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navigation />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<FrontLandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
