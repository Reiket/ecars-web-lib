import {Meta, StoryObj} from '@storybook/react';

import type {ComponentProps} from 'react';
import {Select} from '@/components/Select/constants';
import {selectOptionsMock} from '../lib/services/mocks';
import {useSelect} from '../src/services/hooks/useSelect';

type StoryProps = ComponentProps<typeof Select>;

const meta: Meta<StoryProps> = {
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' },
    onChange: { action: 'onChange' },
    handleSelect: { action: 'handleSelect' },
    onClickToOptions: { action: 'onClickToOptions' },
  },
  args: {
    options: selectOptionsMock,
    placeholder: "Select",
    hasSearch: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: (args: StoryProps) => {
    const {isOpen, selectedValue, onClickToOptions, toggleOpen, handleOutside, handleChange} = useSelect();
    return <Select
      {...args}
      onChange={handleChange}
      value={selectedValue}
      onClickToOptions={onClickToOptions}
      handleSelect={handleOutside}
      onClick={toggleOpen}
      isOpen={isOpen}
    />
  },
};
