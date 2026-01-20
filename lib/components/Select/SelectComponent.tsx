import type {FC} from 'react';
import {useMemo} from 'react';
import type {InputProps} from '@/components/Input/Input';
import {Select} from '@/components/Select';

export interface Props extends InputProps {
  isOpen: boolean;
  options: string[];
  onClick: () => void;
  onChange: (value: string) => void;
  value: string;
  handleSelect: (isOpen: boolean) => void;
  onClickToOptions: (value: string) => void;
  hasSearch?: boolean;
}

const getFilteredOptions = (options: string[], value: string, hasSearch: boolean): string[] | null => {
  if (!hasSearch || !value.trim()) {
    return options;
  }
  const filtered = options.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
  return filtered.length > 0 ? filtered : null;
};

export const SelectComponent: FC<Props> = ({
  options,
  onClick,
  handleSelect,
  onClickToOptions,
  isOpen,
  value,
  onChange,
  block,
  disabled,
  hasError,
  id = 'select',
  name = 'select',
  hasSearch = false,
  ...props
}) => {
  const filteredOptions = useMemo(() => getFilteredOptions(options, value, hasSearch), [options, value, hasSearch]);
  const handleSelectChange = (value: string) => {
    onChange(value);
    handleSelect(hasSearch);
  };
  return (
    <Select.Wrapper
      onClickOutside={handleSelect}
      isOpen={isOpen}
      block={block}
      disabled={disabled}
      hasError={hasError}
    >
      <Select.Block
        onClick={onClick}
        block="select"
      >
        <Select.Input
          hasError={hasError}
          disabled={disabled}
          id={id}
          name={name}
          value={value}
          onChange={handleSelectChange}
          hasSearch={hasSearch}
          {...props}
        />
        <Select.Arrow />
      </Select.Block>
      <Select.List
        options={filteredOptions}
        onClick={onClickToOptions}
        value={value}
      />
    </Select.Wrapper>
  );
};
