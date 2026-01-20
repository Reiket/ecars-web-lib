import type {ComponentType, FC, ReactNode} from 'react';
import {cloneElement, Fragment, isValidElement} from 'react';
import {JSX} from 'react/jsx-runtime';
import IntrinsicElements = JSX.IntrinsicElements;

export interface WithBlockProps {
  block?: string;
  children?: ReactNode;
  className?: string;
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
  <P extends object>(Tag: ComponentType<P> | keyof IntrinsicElements, blockName: string): FC<P & WithBlockProps> =>
  ({children, block: parentBlock, ...props}) => {
    const effectiveBlock = blockName;
    const childrenWithBlock = injectBlockProp(children, effectiveBlock);
    const isDomElement = typeof Tag === 'string';

    const finalClasses = [parentBlock].filter(Boolean).join(' ');

    return (
      <Tag
        {...(props as P)}
        {...(!isDomElement ? {block: effectiveBlock} : {})}
        className={finalClasses}
      >
        {childrenWithBlock}
      </Tag>
    );
  };
