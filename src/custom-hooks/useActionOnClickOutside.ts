import React, { useEffect } from 'react';

export const useActionOnClickOutside = (
  ref: React.MutableRefObject<any>,
  action: () => void,
) => {
  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) action();
    };

    document.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
    };
  }, [ref, action]);
};
