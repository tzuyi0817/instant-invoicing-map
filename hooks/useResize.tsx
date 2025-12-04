import { useEffect, useRef } from 'react';
import { debounce } from '@/utils/common';

function useResize(callback: () => void) {
  const previousWidth = useRef(0);

  useEffect(() => {
    const callbackRef = debounce(() => {
      const { innerWidth } = window;

      if (innerWidth === previousWidth.current) return;

      previousWidth.current = innerWidth;
      callback();
    });

    previousWidth.current = window.innerWidth;
    window.addEventListener('resize', callbackRef);

    return () => window.removeEventListener('resize', callbackRef);
  }, []);

  return null;
}

export default useResize;
