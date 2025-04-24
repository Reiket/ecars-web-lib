import type {FC, ReactNode} from 'react';

export interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const SelectBlock: FC<Props> = ({children, onClick}) => (
  <div
    onClick={onClick}
    className={'select__block'}
  >
    {children}
  </div>
);
