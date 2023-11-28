'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HomeBackground from '@/components/home/home-background';
import Kmt from '@/assets/images/candidate/kmt.png';
import KmtBtn from '@/assets/images/candidate/kmt-btn.svg';
import Ddp from '@/assets/images/candidate/ddp.png';
import DdpBtn from '@/assets/images/candidate/ddp-btn.svg';
import Pfp from '@/assets/images/candidate/pfp.png';
import PfpBtn from '@/assets/images/candidate/pfp-btn.svg';
import '@/styles/home/candidate.css';

function HomeCandidate() {
  return (
    <>
      <div className="absolute top-0 w-full h-full left-0 overflow-hidden -z-[1]">
        <div className="relative w-full h-full">
          <HomeBackground className="border-b-[#F5F2F2] right-0 border-l-transparent border-l-[100vh] lg:border-l-[90vw]" />
          <HomeBackground className="border-b-primary-red left-0 border-r-transparent border-r-[100vh] lg:border-r-[90vw]" />
        </div>
      </div>
      <motion.div
        className="pt-[18vh] flex justify-center w-full relative lg:pt-[22vh]"
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
          />
          <KmtBtn className="block absolute -bottom-10 left-7 w-[122px] md:w-[205px] lg:w-[302px] lg:left-[10%]" />
        </Link>

        <Link
          className="home-candidate-ddp"
          href="/poll#ddp"
          scroll={false}
        >
          <DdpBtn className="block relative left-8 w-[140px] md:w-[238px] lg:w-[350px] lg:left-[10%]" />
          <Image
            src={Ddp}
            alt="DDP"
            priority
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
          />
          <PfpBtn className="absolute bottom-3 right-0 w-[120px] md:w-[202px] md:bottom-8 lg:w-[298px] lg:right-[15%] lg:bottom-0" />
        </Link>
      </motion.div>
    </>
  );
}

export default HomeCandidate;
