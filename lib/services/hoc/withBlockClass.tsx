import type {ComponentType, FC, ReactNode} from 'react';
import React, {cloneElement, isValidElement} from 'react';
import IntrinsicElements = React.JSX.IntrinsicElements;

export interface WithBlockProps {
  block: string;
  children: ReactNode;
}

const injectBlockProp = (node: ReactNode | ReactNode[], currentBlock: string): ReactNode => {
  if (!node) {
    return node;
  }

  if (Array.isArray(node)) {
    return node.map((child) => injectBlockProp(child, currentBlock));
  }

  if (!isValidElement(node)) {
    return node;
  }

  if (!isValidElement<{block?: string; children?: ReactNode}>(node)) {
    return node;
  }
  const childBlock = node.props.block ?? currentBlock;
  const propsToInject = node.props.block ? {} : {block: currentBlock};
  const childrenWithBlock = node.props.children
    ? injectBlockProp(node.props.children, childBlock)
    : node.props.children;

  return cloneElement(node, propsToInject, childrenWithBlock);
};

export const withBlockClass =
  <P extends object>(Tag: ComponentType<P> | keyof IntrinsicElements, className: string): FC<P & WithBlockProps> =>
  ({block, children, ...props}) => {
    const childrenWithBlock = injectBlockProp(children, block);

    return (
      <Tag
        className={className}
        {...(props as P)}
      >
        {childrenWithBlock}
      </Tag>
    );
  };
