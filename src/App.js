import React from "react";
import Card from "./Components/Card";
import Cardcarousel from "./Components/Cardcarousel";
import Carousel from "./Components/carousal";
import Header from "./Components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Cardcarousel />
      {/* <Card /> */}
      </div>
  );
}
