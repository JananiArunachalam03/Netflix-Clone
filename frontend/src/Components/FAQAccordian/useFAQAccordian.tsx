import { useState } from "react";

const useFAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleButtonClick = (index: number) => {
    toggleIndex(index); 
  };

  return { activeIndex, handleButtonClick };
};

export default useFAQAccordion;
