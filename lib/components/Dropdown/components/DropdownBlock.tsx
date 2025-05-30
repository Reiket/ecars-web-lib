import type {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export const DropdownBlock: FC<Props> = ({children}) => <div className="dropdown-menu__block">{children}</div>;
