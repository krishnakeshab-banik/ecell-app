import React, { useState } from "react";
import TeamSection from "./TeamSection";
import "./DomainNavigation.css";

const DomainNavigation = () => {
  const domains = ["Technical", "Creative", "PR", "Media", "UI/UX"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % domains.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + domains.length) % domains.length);
  };

  return (
    <div className="domain-navigation">
      <button onClick={handlePrev} className="arrow-button">◀</button>
      <h2>{domains[currentIndex]}</h2>
      <button onClick={handleNext} className="arrow-button">▶</button>
      <TeamSection domain={domains[currentIndex]} />
    </div>
  );
};

export default DomainNavigation;
