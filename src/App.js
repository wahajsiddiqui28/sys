import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import ProfileForm from "./components/ProfileForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
