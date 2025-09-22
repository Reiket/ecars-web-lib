import type {ComponentType, FC, ReactNode} from 'react';
import {cloneElement, Fragment, isValidElement, JSX} from 'react';
import IntrinsicElements = JSX.IntrinsicElements;

export interface WithBlockProps {
  block?: string;
  children?: ReactNode;
}

const injectBlockProp = (node: ReactNode, currentBlock: string): ReactNode => {
  if (!node) {
    return node;
  }

  if (Array.isArray(node)) {
    return node.map((child: ReactNode, index) => (
      <Fragment key={index}>{injectBlockProp(child, currentBlock)}</Fragment>
    ));
  }

  if (isValidElement<WithBlockProps>(node)) {
    const {block: childOwnBlock, children} = node.props;
    const isDomElement = typeof node.type === 'string';

    let nextBlock = currentBlock;
    const propsToInject: Partial<WithBlockProps> = {};

    if (!isDomElement) {
      if (childOwnBlock) {
        nextBlock = childOwnBlock;
        propsToInject.block = childOwnBlock;
      } else {
        propsToInject.block = currentBlock;
      }
    }

    const childrenWithBlock = injectBlockProp(children, nextBlock);

    return cloneElement(node, propsToInject, childrenWithBlock);
  }

  return node;
};

export const withBlockClass =
  <P extends object>(
    Tag: ComponentType<P> | keyof IntrinsicElements,
    blockName: string,
    className?: string,
  ): FC<P & WithBlockProps> =>
  ({children, block, ...props}) => {
    const effectiveBlock = blockName;

    const childrenWithBlock = injectBlockProp(children, effectiveBlock);
    const isDomElement = typeof Tag === 'string';

    const classes = [className, effectiveBlock].filter(Boolean).join(' ');

    return (
      <Tag
        {...(props as P)}
        {...(!isDomElement ? {block: block ?? effectiveBlock} : {})}
        className={classes}
      >
        {childrenWithBlock}
      </Tag>
    );
  };
