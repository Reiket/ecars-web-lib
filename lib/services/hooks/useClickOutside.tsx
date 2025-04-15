import type {MutableRefObject} from 'react';
import {useEffect, useRef} from 'react';

type OutsideElementType = HTMLDivElement | null;

export const useClickOutside = (callback: (b: boolean) => void): MutableRefObject<OutsideElementType> => {
  const ref = useRef<OutsideElementType>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (ref.current && target instanceof Node && !ref.current.contains(target)) {
        callback(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);

  return ref;
};
