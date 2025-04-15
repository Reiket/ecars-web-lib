import type {ComponentType, FC, ReactElement} from 'react';
import React, {cloneElement} from 'react';
import IntrinsicElements = React.JSX.IntrinsicElements;

interface WithBlockProps {
  block: string;
  children: ReactElement | ReactElement[];
}

export const withBlockClass =
  <P extends object>(Tag: ComponentType<P> | keyof IntrinsicElements, className: string): FC<P & WithBlockProps> =>
  ({block, children, ...props}) => {
    const clonedChildren = Array.isArray(children)
      ? children.map((child, index) =>
          cloneElement(child, {
            block,
            key: `${block} - ${index.toString()}`,
          }),
        )
      : cloneElement(children, {block});

    return (
      <Tag
        className={className}
        {...(props as P)}
      >
        {clonedChildren}
      </Tag>
    );
  };
