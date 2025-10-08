import {withBlockClass} from '@/services/hoc/withBlockClass';
import {PasswordInputWrapper} from '@/components/PasswordInput/components/PasswordInputWrapper';

export const PasswordInputWrapperHOC = withBlockClass(PasswordInputWrapper, 'password');
