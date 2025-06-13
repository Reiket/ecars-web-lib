import React from 'react';
import {render, screen} from '@testing-library/react';
import {RangeSlider} from './RangeSlider';
import {rangeSliderArrayMock} from '@/services/mocks';

describe('RangeSlider Component', () => {
  test('renders Range Slider component correctly', () => {
    const {container} = render(<RangeSlider defaultValue={rangeSliderArrayMock} />);
    const sliderContainer = container.querySelector('.rc-slider');
    expect(sliderContainer).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('renders with correct default range', () => {
    render(<RangeSlider defaultValue={rangeSliderArrayMock} />);
    const thumbs = screen.getAllByRole('slider', {hidden: true});
    expect(thumbs).toHaveLength(2);
  });
});
