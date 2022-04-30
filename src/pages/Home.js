import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="container text-center">
      <h1>Este es el Home</h1>
    </div>
  );
};

export default Home;
