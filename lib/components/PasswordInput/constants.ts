import {withBlockClass} from '@/services/hoc/withBlockClass';
import {PasswordInputWrapper} from '@/components/PasswordInput/components/PasswordInputWrapper';

export const PasswordInputWrapperHOC = withBlockClass(PasswordInputWrapper, 'password');

export const PASSWORD_INPUT_TEST_ID = 'passwordInputTestId';
