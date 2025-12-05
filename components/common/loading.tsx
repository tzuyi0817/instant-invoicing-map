'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import VoteStamp from '@/assets/images/loading/vote-stamp.png';
import Message from './message';
import { sleep } from '@/utils/common';

const messages = [
  {
    className: 'absolute -top-[30%] -right-[75%] w-[163px] md:w-[266px] lg:w-[315px]',
    translateX: '30%',
    translateY: '-50%',
    message: '逮灣發大財',
  },
  {
    className: 'absolute top-0 -left-[65%] w-[122px] md:w-[198px] lg:w-[234px]',
    translateX: '-30%',
    translateY: '-50%',
    message: '凍蒜!凍蒜!',
    isWhite: true,
  },
  {
    className: 'absolute top-[30%] -right-[75%] w-[122px] md:w-[198px] lg:w-[234px]',
    translateX: '30%',
    translateY: '30%',
    message: '2020台灣要贏',
    isWhite: true,
  },
  {
    className: 'absolute top-[55%] -left-[55%] w-[100px] md:w-[120px] lg:w-[142px]',
    translateX: '-30%',
    translateY: '30%',
    message: '點亮台灣',
    rotateClass: 'rotate-180',
  },
  {
    className: 'absolute top-[95%] -left-[85%] w-[164px] md:w-[266px] lg:w-[315px]',
    translateX: '-30%',
    translateY: '50%',
    message: 'Taiwan No.1',
    isWhite: true,
  },
  {
    className: 'absolute top-[85%] -right-[30%] w-[122px] md:w-[198px] lg:w-[234px]',
    translateX: '30%',
    translateY: '50%',
    message: '結束藍綠對峙',
    rotateClass: 'rotate-180',
    rotate: 360,
  },
];

function Loading() {
  const [isShow, setShow] = useState(true);
  const controls = useAnimationControls();

  function rotateSpring(rotate: number) {
    return controls.start({
      rotate,
      transition: { type: 'spring', stiffness: 500 },
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

  function onAnimationComplete() {
    controls.stop();
    setShow(false);
  }

  useEffect(() => {
    rotateStamp();
  }, []);
  return (
    isShow && (
      <motion.div
        className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-white"
        onAnimationComplete={onAnimationComplete}
        animate={{
          opacity: 0,
          transition: { delay: 1.2 },
        }}
      >
        <div className="relative">
          <motion.div animate={controls}>
            <Image
              src={VoteStamp}
              width={VoteStamp.width}
              height={VoteStamp.height}
              alt="vote stamp"
              className="w-[153px] md:w-[250px] lg:w-[296px]"
              priority
            />
          </motion.div>
          {messages.map(({ message, ...item }) => {
            return (
              <Message
                key={message}
                {...item}
              >
                {message}
              </Message>
            );
          })}
        </div>
      </motion.div>
    )
  );
}

export default Loading;
