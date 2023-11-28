'use client';

import { useRef, forwardRef, type PropsWithChildren, type RefObject, type LegacyRef } from 'react';
import PollPoliticsHeader from '@/components/poll/poll-politics-header';
import PollPoliticsDescribe from '@/components/poll/poll-politics-describe';
import { POLL_POLITICS_MAP } from '@/configs/poll';
import Pfp from '@/assets/images/candidate/pfp-dark.png';
import PfpSymbol from '@/assets/images/icon/pfp-symbol.svg';
import Kmt from '@/assets/images/candidate/kmt-dark.png';
import KmtSymbol from '@/assets/images/icon/kmt-symbol.svg';
import Ddp from '@/assets/images/candidate/ddp-dark.png';
import DdpSymbol from '@/assets/images/icon/ddp-symbol.svg';
import Arrow from '@/assets/images/svg/arrow.svg';

const PollPoliticsContainer = forwardRef(PollPoliticsDom);

function PollPolitics() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pfpRef = useRef<HTMLDivElement>(null);
  const kmtRef = useRef<HTMLDivElement>(null);
  const ddpRef = useRef<HTMLDivElement>(null);

  function scrollNext(to: RefObject<HTMLDivElement>) {
    requestAnimationFrame(() => {
      if (!to.current) return;
      scrollRef.current?.scrollTo({
        left: to.current.offsetLeft,
        behavior: 'smooth',
      });
    });
  }

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-scroll snap-x snap-mandatory px-4 gap-4 no-scrollbar md:px-[30px] md:gap-[30px] lg:px-[100px] lg:gap-[100px]"
    >
      <PollPoliticsContainer ref={pfpRef}>
        <section id="pfp"></section>
        <PollPoliticsHeader
          image={Pfp}
          Symbol={PfpSymbol}
          number="1"
          border="border-b-deep-orange"
          bg="bg-deep-orange"
        >
          宋楚瑜政見
        </PollPoliticsHeader>
        <PollPoliticsDescribe
          describe={POLL_POLITICS_MAP.pfp}
          border="border-deep-orange"
          bg="bg-deep-orange"
        />
        <ArrowIcon scrollNext={() => scrollNext(kmtRef)} />
      </PollPoliticsContainer>
      <PollPoliticsContainer ref={kmtRef}>
        <section id="kmt"></section>
        <PollPoliticsHeader
          image={Kmt}
          Symbol={KmtSymbol}
          number="2"
          border="border-b-deep-blue"
          bg="bg-deep-blue"
        >
          韓國瑜政見
        </PollPoliticsHeader>
        <PollPoliticsDescribe
          describe={POLL_POLITICS_MAP.kmt}
          border="border-deep-blue"
          bg="bg-deep-blue"
        />
        <ArrowIcon scrollNext={() => scrollNext(ddpRef)} />
      </PollPoliticsContainer>
      <PollPoliticsContainer ref={ddpRef}>
        <section id="ddp"></section>
        <PollPoliticsHeader
          image={Ddp}
          Symbol={DdpSymbol}
          number="3"
          border="border-b-deep-green"
          bg="bg-deep-green"
        >
          蔡英文政見
        </PollPoliticsHeader>
        <PollPoliticsDescribe
          describe={POLL_POLITICS_MAP.ddp}
          border="border-deep-green"
          bg="bg-deep-green"
        />
        <ArrowIcon scrollNext={() => scrollNext(pfpRef)} />
      </PollPoliticsContainer>
    </div>
  );
}

function PollPoliticsDom({ children }: PropsWithChildren, ref: LegacyRef<HTMLDivElement>) {
  return (
    <div
      className="min-w-full snap-center lg:min-w-[1200px]"
      ref={ref}
    >
      {children}
    </div>
  );
}

function ArrowIcon({ scrollNext }: { scrollNext: () => void }) {
  return (
    <Arrow
      className="icon w-4 fill-black rotate-180 md:w-9"
      onClick={scrollNext}
    />
  );
}

export default PollPolitics;
