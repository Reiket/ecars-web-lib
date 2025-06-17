import type {FC} from 'react';
import {ButtonWithIcon} from '@/components/ButtonWithIcon/ButtonWithIcon';
import {Icons} from '@/services/icons';
import type {ElementProps} from '@/services/types';

interface Props extends ElementProps {
  children: string;
  onClick?: () => void;
}

export const FilterButton: FC<Props> = ({children, onClick, block}) => (
  <ButtonWithIcon
    type="button"
    block={block}
    onClick={onClick}
    className="button__close"
    RightIcon={Icons.Close}
    size="small"
    color="gray"
  >
    {children}
  </ButtonWithIcon>
);
