import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        className="sample"
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
      <UpdateFollower
      className="sample"
      mouseOptions={{
        backgroundColor: "black",
        zIndex: 999,
        followSpeed: 1.5,
      }}
      >
        <Services />
      </UpdateFollower>
    </main>
  );
};

export default App;
