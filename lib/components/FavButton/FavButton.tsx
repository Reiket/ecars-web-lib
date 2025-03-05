import type {FC, MouseEvent} from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {cn} from '@/services/helpers';
import {FAV_BUTTON_TEST_ID, FavButtonType} from '@/components/FavButton/constants';

interface Props {
  type: FavButtonType;
  isFavorite?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const FavButton: FC<Props> = ({disabled, isFavorite, type, onClick}) => {
  const classNames = cn('favorite-button', `favorite-button-${type}`, {
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
      {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
};
