import type {FC} from 'react';

export interface Props {
  errorText: string;
}

export const FieldError: FC<Props> = ({errorText}) => {
  return <p className="field__error">{errorText}</p>;
};
