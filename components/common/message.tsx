import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import BlackMessage from '@/assets/images/loading/black-message.svg';
import WhiteMessage from '@/assets/images/loading/white-message.svg';

interface Props {
  className?: string;
  isWhite?: boolean;
  rotateClass?: string;
  translateX: string;
  translateY: string;
  rotate?: number;
}

function Message({ children, isWhite, className, rotateClass, ...translate }: PropsWithChildren<Props>) {
  return (
    <motion.div
      className={className}
      animate={{
        ...translate,
        scale: 1.5,
        transition: { type: 'spring', stiffness: 500, repeat: Infinity, repeatType: 'mirror' },
      }}
    >
      <div className="relative text-center">
        {isWhite ? <WhiteMessage className={rotateClass} /> : <BlackMessage className={rotateClass} />}
        <p
          className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-xs md:text-base lg:text-lg
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
