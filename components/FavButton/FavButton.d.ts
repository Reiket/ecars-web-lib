import { FC, MouseEvent } from 'react';
import { FavButtonType } from './constants';
import { ElementProps } from '../../services/types';
interface Props extends ElementProps {
    type: FavButtonType;
    isFavorite?: boolean;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export declare const FavButton: FC<Props>;
export {};
