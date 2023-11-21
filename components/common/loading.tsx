'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import VoteStamp from '@/assets/images/loading/vote-stamp.png';
import Message from './message';
import { sleep } from '@/utils/common';

const TIME_INTERVAL = 1.5;
const messages = [
  { className: 'absolute -top-8 -right-28 w-[163px]', translateX: '30%', translateY: '-50%', message: '逮灣發大財' },
  {
    className: 'absolute top-0 -left-24 w-[122px]',
    translateX: '-30%',
    translateY: '-50%',
    message: '凍蒜!凍蒜!',
    isWhite: true,
  },
  {
    className: 'absolute top-10 -right-28 w-[122px]',
    translateX: '30%',
    translateY: '30%',
    message: '2020台灣要贏',
    isWhite: true,
  },
  {
    className: 'absolute top-20 -left-20 w-[100px]',
    translateX: '-30%',
    translateY: '30%',
    message: '點亮台灣',
    rotateClass: 'rotate-180',
  },
  {
    className: 'absolute top-32 -left-32 w-[164px]',
    translateX: '-30%',
    translateY: '50%',
    message: 'Taiwan No.1',
    isWhite: true,
  },
  {
    className: 'absolute top-28 -right-12 w-[122px]',
    translateX: '30%',
    translateY: '50%',
    message: '結束藍綠對峙',
    rotateClass: 'rotate-180',
    rotate: 360,
  },
];

function Loading() {
  const controls = useAnimationControls();

  function rotateSpring(rotate: number) {
    return controls.start({
      rotate,
      transition: { type: 'spring', stiffness: 500, delay: TIME_INTERVAL },
    });
  }

  async function rotateStamp() {
    await rotateSpring(-90);
    await rotateSpring(-180);
    await rotateSpring(-270);
    await rotateSpring(-360);
    controls.stop();
    controls.set({ rotate: 0 });
    await sleep();
    rotateStamp();
  }

  useEffect(() => {
    rotateStamp();
  }, []);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center z-20">
      <div className="relative">
        <motion.div animate={controls}>
          <Image
            src={VoteStamp}
            alt="vote stamp"
            className="w-[153px]"
          />
        </motion.div>
        {messages.map(({ message, ...item }) => {
          return (
            <Message
              key={message}
              timeInterval={TIME_INTERVAL}
              {...item}
            >
              {message}
            </Message>
          );
        })}
      </div>
    </div>
  );
}

export default Loading;
