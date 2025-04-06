import React, { useState } from "react";
import "./App.css";
import HomePage from "./Home";
import { Router, Route, Routes } from "react-router-dom";
import PricingPlans from "./components/Feature";
import { Well } from "./components/Well";
import { Auth } from "./components/Auth";
import { SetUp } from "./components/SetUp";
import Contact from "./components/Contact";
import About from "./components/About";
import { Yearly } from "./components/Yearly";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Well />} />
          <Route path="feature" element={<PricingPlans />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="auth" element={<Auth />} />
          <Route path="setup" element={<SetUp />} />
          <Route path="yearly" element={<Yearly/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
