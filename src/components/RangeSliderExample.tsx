import type {FC} from 'react';
import {useState} from 'react';
import {RangeSlider} from '@/components/RangeSlider/RangeSlider';
import {rangeSliderArrayMock} from '@/services/mocks';

export const RangeSliderExample: FC = () => {
  const [range, setRange] = useState<number | number[]>(rangeSliderArrayMock);

  const handleChange = (value: number[] | number) => {
    setRange(value);
  };
  return (
    <RangeSlider
      value={range}
      onChange={handleChange}
    />
  );
};
