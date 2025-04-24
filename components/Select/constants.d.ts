export declare const SELECT_TEST_ID = "selectTestId";
export declare const Select: import('react').FC<import('./SelectComponent').Props> & {
    List: import('react').FC<import('./components/SelectList').Props>;
    Option: import('react').FC<import('./components/SelectOption').Props>;
    Input: import('react').FC<import('./components/SelectInput').Props>;
    Arrow: import('react').FC;
    Wrapper: import('react').FC<import('./components/SelectWrapper').Props>;
    Block: import('react').FC<import('./components/SelectBlock').Props & import('../../services/hoc/withBlockClass').WithBlockProps>;
};
