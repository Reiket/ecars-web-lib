import {useState} from 'react';

interface UseSelectResult {
  isOpen: boolean;
  selectedValue: string;
  toggleOpen: () => void;
  handleOutside: (isOpen: boolean) => void;
  handleChange: (value: string) => void;
  onClickToOptions: (value: string) => void;
}

export const useSelect = (): UseSelectResult => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('');

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleOutside = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };
  const handleChange = (value: string) => {
    setSelectedValue(value);
  };
  const onClickToOptions = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false)
  }

  return {isOpen, selectedValue, toggleOpen, handleOutside, handleChange, onClickToOptions};
};
