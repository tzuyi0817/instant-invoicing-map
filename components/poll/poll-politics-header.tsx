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
        className="w-24 md:w-[182px]"
      />
      <div
        className={`absolute bottom-1 flex items-center gap-4 w-[calc(100%-96px)] pl-16 pt-[14px] pb-[10px] -z-[1] left-12 ${bg} md:w-[calc(100%-144px)] md:pl-32 md:left-[72px]`}
      >
        <div className="flex items-center flex-1 gap-1 md:gap-3">
          <Symbol className="w-5 md:w-10" />
          <h1 className="text-white">{children}</h1>
        </div>
        <div className="w-5 h-5 border-2 border-white rounded-full text-white text-xs text-center md:w-10 md:h-10 md:text-2xl">
          {number}
        </div>
      </div>
      <div
        className={`absolute right-0 bottom-1 ${border} border-r-transparent border-b-[48px] border-r-[48px] md:border-b-[72px] md:border-r-[72px]`}
      ></div>
    </div>
  );
}

export default PollPoliticsHeader;
