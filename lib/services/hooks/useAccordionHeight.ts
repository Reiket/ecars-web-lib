import type {RefObject} from 'react';
import {useMemo, useRef} from 'react';

interface UseAccordionHeightResult {
  contentRef: RefObject<HTMLDivElement>;
  style: {height: number | undefined};
}

export const useAccordionHeight = (isOpen: boolean): UseAccordionHeightResult => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const style = useMemo(() => {
    return {
      height: isOpen ? contentRef.current?.scrollHeight : 0,
    };
  }, [isOpen]);

  return {
    contentRef,
    style,
  };
};
