import {useState} from 'react';

interface UseAccordionResult {
  activeIndexes: number[];
  handleToggle: (index: number) => void;
}

export const useFilterAccordion = (): UseAccordionResult => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setActiveIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return {
    activeIndexes,
    handleToggle,
  };
};
