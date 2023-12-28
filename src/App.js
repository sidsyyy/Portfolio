import React from "react";
import {
  About,
  Header,
  Footer,
  Skills,
  Work,
  Certificates,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Certificates />
      <Footer />
    </div>
  );
};


export default App;
