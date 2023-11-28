import { useEffect, useRef } from 'react';
import { debounce } from '@/utils/common';

function useResize(callback: () => void) {
  const previousWidth = useRef(0);
  const callbackRef = useRef(
    debounce(() => {
      const { innerWidth } = window;

      if (innerWidth === previousWidth.current) return;
      previousWidth.current = innerWidth;
      callback();
    }),
  );

  useEffect(() => {
    previousWidth.current = window.innerWidth;
    window.addEventListener('resize', callbackRef.current);

    return () => window.removeEventListener('resize', callbackRef.current);
  }, []);

  return null;
}

export default useResize;
