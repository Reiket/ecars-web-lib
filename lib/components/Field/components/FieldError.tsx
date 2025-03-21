import type {FC} from 'react';

interface Props {
  errorText: string;
}

export const FieldError: FC<Props> = ({errorText}) => {
  return <p className="field__error">{errorText}</p>;
};
