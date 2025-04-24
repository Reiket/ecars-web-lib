import type {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const AccordionButton: FC<Props> = ({onClick, children}) => (
  <button
    onClick={onClick}
    type="button"
    className="accordion__button"
  >
    {children}
  </button>
);
