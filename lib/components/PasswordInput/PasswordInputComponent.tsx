import type {FC} from 'react';
import {useState} from 'react';
import type {InputProps} from '@/components/Input/Input';
import {Input} from '@/components/Input/Input';
import {ButtonWithIcon} from '@/components/ButtonWithIcon/ButtonWithIcon';
import {PasswordInput} from '@/components/PasswordInput';
import {getPasswordFieldProps} from '@/services/helpers';

export const PasswordInputComponent: FC<InputProps> = ({hasError, disabled, block, ...props}) => {
  const [visible, setVisible] = useState(false);
  const {inputType, ButtonIcon} = getPasswordFieldProps(visible);
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <PasswordInput.Wrapper
      disabled={disabled}
      hasError={hasError}
      block={block}
    >
      <Input
        disabled={disabled}
        type={inputType}
        hasError={hasError}
        isTransparent
        {...props}
      />
      <ButtonWithIcon
        onClick={handleVisible}
        isTransparent
        size="small"
        color="gray"
      >
        <ButtonIcon />
      </ButtonWithIcon>
    </PasswordInput.Wrapper>
  );
};
