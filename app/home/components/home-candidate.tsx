'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import HomeBackground from './home-background';
import Kmt from '@/assets/images/candidate/kmt.png';
import KmtBtn from '@/assets/images/candidate/kmt-btn.svg';
import Ddp from '@/assets/images/candidate/ddp.png';
import DdpBtn from '@/assets/images/candidate/ddp-btn.svg';
import Pfp from '@/assets/images/candidate/pfp.png';
import PfpBtn from '@/assets/images/candidate/pfp-btn.svg';
import '../styles/candidate.css';

function HomeCandidate() {
  return (
    <>
      <div className="absolute left-0 top-0 -z-[1] h-full w-full overflow-hidden">
        <div className="relative h-full w-full">
          <HomeBackground className="right-0 border-l-[100vh] border-b-[#F5F2F2] border-l-transparent lg:border-l-[90vw]" />
          <HomeBackground className="left-0 border-r-[100vh] border-b-primary-red border-r-transparent lg:border-r-[90vw]" />
        </div>
      </div>
      <motion.div
        className="relative flex w-full justify-center pt-[18vh] lg:pt-[22vh]"
        initial={{ translateY: '30%' }}
        animate={{
          translateY: '0%',
          transition: { type: 'spring', stiffness: 500 },
        }}
      >
        <Link
          className="home-candidate-kmt"
          href="/poll#kmt"
          scroll={false}
        >
          <Image
            src={Kmt}
            alt="KMT"
            priority
            placeholder="blur"
          />
          <KmtBtn className="absolute -bottom-10 left-7 block w-[122px] md:w-[205px] lg:left-[10%] lg:w-[302px]" />
        </Link>

        <Link
          className="home-candidate-ddp"
          href="/poll#ddp"
          scroll={false}
        >
          <DdpBtn className="relative left-8 block w-[140px] md:w-[238px] lg:left-[10%] lg:w-[350px]" />
          <Image
            src={Ddp}
            alt="DDP"
            priority
            placeholder="blur"
          />
        </Link>
        <Link
          className="home-candidate-pfp"
          href="/poll#pfp"
          scroll={false}
        >
          <Image
            src={Pfp}
            alt="PFP"
            priority
            placeholder="blur"
          />
          <PfpBtn className="absolute bottom-3 right-0 w-[120px] md:bottom-8 md:w-[202px] lg:bottom-0 lg:right-[15%] lg:w-[298px]" />
        </Link>
      </motion.div>
    </>
  );
}

export default HomeCandidate;
