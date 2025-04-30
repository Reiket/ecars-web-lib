import type {FC} from 'react';
import {ButtonWithIcon} from '@/components/ButtonWithIcon/ButtonWithIcon';
import {Icons} from '@/services/icons';

interface Props {
  children: string;
  onClick?: () => void;
}

export const FilterButton: FC<Props> = ({children, onClick}) => {
  return (
    <ButtonWithIcon
      type="button"
      onClick={onClick}
      className="button__close"
      RightIcon={Icons.Close}
      size="small"
      color="gray"
    >
      {children}
    </ButtonWithIcon>
  );
};
