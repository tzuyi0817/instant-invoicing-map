import type { PropsWithChildren } from 'react';
import Image, { type StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  Symbol: any;
  number: string;
  border: string;
  bg: string;
}

function PollPoliticsHeader({ image, Symbol, number, border, bg, children }: PropsWithChildren<Props>) {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="candidate"
        className="h-[93px] w-24 md:h-[177px] md:w-[182px] lg:h-[189px] lg:w-[194px]"
        placeholder="blur"
      />
      <div
        className={`absolute bottom-1 left-12 -z-[1] flex w-[calc(100%-96px)] items-center gap-4 pb-[10px] pl-16 pr-[1px] pt-[14px] ${bg} md:left-[72px] md:w-[calc(100%-144px)] md:pl-32 lg:w-[650px] lg:pb-[22px] lg:pl-36 lg:pt-7`}
      >
        <div className="flex flex-1 items-center gap-1 md:gap-3">
          <Symbol className="w-5 md:w-10" />
          <h1 className="text-white">{children}</h1>
        </div>
        <div className="h-5 w-5 rounded-full border-2 border-white text-center text-xs text-white md:h-10 md:w-10 md:text-2xl">
          {number}
        </div>
      </div>
      <div
        className={`absolute bottom-1 right-[1px] ${border} border-b-[48px] border-r-[48px] border-r-transparent md:border-b-[72px] md:border-r-[72px] lg:left-[722px] lg:right-auto lg:border-b-[96px] lg:border-r-[96px]`}
      ></div>
    </div>
  );
}

export default PollPoliticsHeader;
