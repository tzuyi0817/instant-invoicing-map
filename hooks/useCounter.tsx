import { animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
  to: number;
  className?: string;
}

function useCounter({ to, className }: Props) {
  const [current, setCurrent] = useState(to);
  const from = useRef(0);

  useEffect(() => {
    const controls = animate(from.current, to, {
      duration: 0.3,
      onUpdate(value) {
        setCurrent(parseFloat(value.toFixed(2)));
      },
    });
    from.current = to;
    return () => controls.stop();
  }, [to]);

  return <p className={className}>{current}%</p>;
}

export default useCounter;
