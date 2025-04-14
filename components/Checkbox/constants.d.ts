import { ElementProps } from '../../services/types';
export declare const Checkbox: import('react').FC<CheckboxProps> & {
    Block: import('react').FC<import('./components/CheckboxBlock').Props>;
    Indicator: import('react').FC;
    Input: import('react').FC<CheckboxProps>;
};
export interface CheckboxProps extends ElementProps {
    name?: string;
    id?: string;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    checked?: boolean;
    hasError?: boolean;
}
export declare const CHECKBOX_TEST_ID = "checkboxTestId";
export declare const CHECKBOX_TEST_INPUT_ID = "checkboxTestInputId";
