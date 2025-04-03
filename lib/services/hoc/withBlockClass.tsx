import {cloneElement, ComponentType, FC, ReactElement} from 'react';
import IntrinsicElements = JSX.IntrinsicElements;

interface WithBlockProps {
  block: string;
  children: ReactElement;
}

export const withBlockClass =
  <P extends object>(Tag: ComponentType<P> | keyof IntrinsicElements, className: string): FC<P & WithBlockProps> =>
  ({block, children, ...props}) => {
    return (
      <Tag
        className={className}
        {...(props as P)}
      >
        {cloneElement(children, {block})}
      </Tag>
    );
  };
