import type {FC, MouseEvent} from 'react';
import {cn} from '@/services/helpers';
import type {FavButtonType} from '@/components/FavButton/constants';
import {FAV_BUTTON_TEST_ID} from '@/components/FavButton/constants';
import type {ElementProps} from '@/services/types';
import {Icons} from '@/services/icons';

interface Props extends ElementProps {
  type: FavButtonType;
  isFavorite?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const FavButton: FC<Props> = ({disabled, block, isFavorite, type, onClick}) => {
  const classNames = cn(block, 'favorite-button', `favorite-button--${type}`, {
    'active': isFavorite,
  });
  return (
    <button
      data-testid={FAV_BUTTON_TEST_ID}
      disabled={disabled}
      className={classNames}
      onClick={onClick}
      type="button"
    >
      {isFavorite ? <Icons.Favorite /> : <Icons.FavoriteSolid />}
    </button>
  );
};
