'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import VoteStamp from '@/assets/images/loading/vote-stamp.png';
import Message from './message';
import { sleep } from '@/utils/common';

const TIME_INTERVAL = 1500;

function Loading() {
  const controls = useAnimationControls();

  function rotateSpring(rotate: number) {
    return controls.start({
      rotate,
      transition: { type: 'spring', stiffness: 500 },
    });
  }

  function rotateStamp() {
    requestAnimationFrame(async () => {
      await rotateSpring(-90);
      await sleep(TIME_INTERVAL);
      await rotateSpring(-180);
      await sleep(TIME_INTERVAL);
      await rotateSpring(-270);
      await sleep(TIME_INTERVAL);
      await rotateSpring(-360);
      controls.stop();
      controls.set({ rotate: 0 });
      await sleep(TIME_INTERVAL);
      rotateStamp();
    });
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
        <Message
          className="absolute -top-8 -right-28 w-[163px]"
          translateX="30%"
          translateY="-50%"
          timeInterval={TIME_INTERVAL}
        >
          逮灣發大財
        </Message>
        <Message
          isWhite
          className="absolute top-0 -left-24 w-[122px]"
          translateX="-30%"
          translateY="-50%"
          timeInterval={TIME_INTERVAL}
        >
          凍蒜!凍蒜!
        </Message>
        <Message
          isWhite
          className="absolute top-10 -right-28 w-[122px]"
          translateX="30%"
          translateY="30%"
          timeInterval={TIME_INTERVAL}
        >
          2020台灣要贏
        </Message>
        <Message
          className="absolute top-20 -left-20 w-[100px]"
          rotateClass="rotate-180"
          translateX="-30%"
          translateY="30%"
          timeInterval={TIME_INTERVAL}
        >
          點亮台灣
        </Message>
        <Message
          isWhite
          className="absolute top-32 -left-32 w-[164px]"
          translateX="-30%"
          translateY="50%"
          timeInterval={TIME_INTERVAL}
        >
          Taiwan No.1
        </Message>
        <Message
          className="absolute top-28 -right-12 w-[122px]"
          rotateClass="rotate-180"
          translateX="30%"
          translateY="50%"
          rotate={360}
          timeInterval={TIME_INTERVAL}
        >
          結束藍綠對峙
        </Message>
      </div>
    </div>
  );
}

export default Loading;