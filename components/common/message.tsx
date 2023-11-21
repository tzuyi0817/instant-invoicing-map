import { useEffect, type PropsWithChildren } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import BlackMessage from '@/assets/images/loading/black-message.svg';
import WhiteMessage from '@/assets/images/loading/white-message.svg';
import { sleep } from '@/utils/common';

interface Props {
  className?: string;
  isWhite?: boolean;
  rotateClass?: string;
  translateX: string;
  translateY: string;
  rotate?: number;
  timeInterval: number;
}

function Message({ children, isWhite, className, rotateClass, timeInterval, ...translate }: PropsWithChildren<Props>) {
  const controls = useAnimationControls();

  function messageEffect() {
    requestAnimationFrame(async () => {
      await controls.start({
        ...translate,
        scale: 1.5,
        transition: { type: 'spring', stiffness: 500 },
      });
      await sleep(timeInterval);
      await controls.start({
        translateX: 0,
        translateY: 0,
        rotate: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 500 },
      });
      controls.stop();
      await sleep(timeInterval);
      messageEffect();
    });
  }

  useEffect(() => {
    messageEffect();
  }, []);
  return (
    <motion.div
      className={className}
      animate={controls}
    >
      <div className="relative text-center">
        {isWhite ? <WhiteMessage className={rotateClass} /> : <BlackMessage className={rotateClass} />}
        <p
          className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-xs 
          ${isWhite ? 'text-black' : 'text-white'}
          ${rotateClass ? 'top-[calc(50%+4px)]' : 'top-[calc(50%-5px)]'}
          `}
        >
          {children}
        </p>
      </div>
    </motion.div>
  );
}

export default Message;
