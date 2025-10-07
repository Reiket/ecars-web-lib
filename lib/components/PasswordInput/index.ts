import {PasswordInputComponent} from '@/components/PasswordInput/PasswordInputComponent';
import {PasswordInputWrapperHOC} from '@/components/PasswordInput/constants';

export const PasswordInput = Object.assign(PasswordInputComponent, {
  Wrapper: PasswordInputWrapperHOC,
});
