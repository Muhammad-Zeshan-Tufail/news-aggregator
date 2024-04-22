import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorBoundary"; // If you choose to use ErrorBoundary
import Navbar from "./components/Navbar";
import SingleArticle from "./pages/SingleArticle";

const App = () => {
  return (
    <Router>
      <div className="app bg-gray-100 min-h-screen flex justify-center">
        <div className="max-w-6xl w-full p-4">
          {/* Optional ErrorBoundary wrapper */}
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:article" element={<SingleArticle />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </div>
    </Router>
  );
};

export default App;
