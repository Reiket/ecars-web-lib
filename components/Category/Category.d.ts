import { FC } from 'react';
import { CategoriesListType } from './constants';
import { ElementProps } from '../../services/types';
interface Props extends ElementProps {
    category: CategoriesListType;
}
export declare const Category: FC<Props>;
export {};
