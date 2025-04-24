import {useState} from 'react';

interface UseAccordionResult {
  activeIndex: number | null;
  handleToggle: (index: number) => void;
}

export const useAccordion = (): UseAccordionResult => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return {
    activeIndex,
    handleToggle,
  };
};
