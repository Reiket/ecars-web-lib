import {Meta, StoryObj} from '@storybook/react';

import type {ComponentProps} from 'react';

import {selectOptionsMock} from '../lib/services/mocks';
import {useSelect} from '../src/services/hooks/useSelect';
import {Select} from '../lib/components/Select';

type StoryProps = ComponentProps<typeof Select>;

const meta: Meta<StoryProps> = {
  component: Select,
  tags: ['autodocs'],
  args: {
    options: selectOptionsMock,
    placeholder: 'Select',
    hasSearch: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => {
    const {isOpen, selectedValue, onClickToOptions, toggleOpen, handleOutside, handleChange} = useSelect();
    return (
      <Select
        {...args}
        onChange={handleChange}
        value={selectedValue}
        onClickToOptions={onClickToOptions}
        handleSelect={handleOutside}
        onClick={toggleOpen}
        isOpen={isOpen}
      />
    );
  },
};
