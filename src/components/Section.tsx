import type {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

export const Section: FC<Props> = ({title, children}) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
