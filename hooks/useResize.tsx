import { useEffect, useRef } from 'react';
import { debounce } from '@/utils/common';

function useResize(callback: () => void) {
  const callbackRef = useRef(debounce(callback));

  useEffect(() => {
    window.addEventListener('resize', callbackRef.current);

    return () => window.removeEventListener('resize', callbackRef.current);
  }, []);

  return null;
}

export default useResize;
