'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import PaperPresidential from '@/assets/images/layout/paper-presidential.png';
import PresidentialPalace from '@/assets/images/layout/presidential-palace.png';
import { INVOICING } from '@/constants/Invoicing';
import '../styles/vote-ratio.css';

function HomeVoteRatio() {
  const { kmt, ddp, pfp } = INVOICING.default;

  return (
    <motion.div
      className="home-vote-ratio"
      initial={{ translateX: '70%' }}
      animate={{
        translateX: '0%',
        transition: { type: 'spring', stiffness: 500 },
      }}
    >
      <div className="flex h-full flex-col items-center border-x border-black pt-7 lg:border-none">
        <div className="h-[31vw] w-[62vw] rounded-t-full bg-black lg:w-3/4"></div>
        <div className="relative h-[31vw] w-full">
          <div className="absolute bottom-[52px] w-full md:bottom-[70px] lg:bottom-[52px]">
            <Image
              src={PaperPresidential}
              alt="paper presidential"
              className="w-full object-cover"
              placeholder="blur"
            />
          </div>
          <div className="absolute bottom-5 w-full px-[3vw] lg:px-3">
            <Image
              src={PresidentialPalace}
              alt="presidential palace"
              className="w-full object-cover"
              priority
              placeholder="blur"
            />
            <div
              className="absolute bottom-0 left-3 h-full w-[calc(100%-24px)] opacity-50"
              style={{
                maskImage: `url(${PresidentialPalace.src})`,
                WebkitMaskImage: `url(${PresidentialPalace.src})`,
                maskSize: 'cover',
                WebkitMaskSize: 'cover',
                background: `linear-gradient(to right,#25a55c 0%,#25a55c ${ddp}%,#4a8fe7 ${ddp}%,#4a8fe7 ${
                  ddp + kmt
                }%,#f88545 ${ddp + kmt}%,#f88545 100%)`,
              }}
            ></div>
            <ul className="absolute bottom-0 left-0 flex w-full px-4 text-xs">
              <li
                className="home-vote-ratio-line"
                style={{ width: `${ddp}%` }}
              >
                蔡英文 {ddp}%
              </li>
              <li
                className="home-vote-ratio-line"
                style={{ width: `${kmt}%` }}
              >
                韓國瑜 {kmt}%
              </li>
              <li
                className="home-vote-ratio-line whitespace-nowrap"
                style={{ width: `${pfp}%` }}
              >
                <p className="-translate-x-[300%]">宋楚瑜 {pfp}%</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <button className="btn-home mt-2">
            <Link href="/invoicing">看開票地圖</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default HomeVoteRatio;
