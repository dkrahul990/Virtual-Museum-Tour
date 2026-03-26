import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import ExploredContainer from "./exploredContainer/exploredContainer";

const Explore = () => {
  const images1 = Object.values(
    import.meta.glob("./Assets/mu-01/*.{jpg,webp,jpeg,svg,png}", { eager: true })
  ).map((mod) => mod.default);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images1.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images1.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <NavBar />
      <div style={{ background: "white" }}>
        <ExploredContainer images={[images1[currentIndex]]} />
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;