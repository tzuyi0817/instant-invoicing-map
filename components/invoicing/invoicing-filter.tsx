import type { Dispatch, SetStateAction } from 'react';
import Image, { type StaticImageData } from 'next/image';
import ddpAvatar from '@/assets/images/avatar/ddp-avatar.png';
import kmtAvatar from '@/assets/images/avatar/kmt-avatar.png';
import pfpAvatar from '@/assets/images/avatar/pfp-avatar.png';

interface Props {
  filter: {
    ddp: boolean;
    kmt: boolean;
    pfp: boolean;
  };
  setFilter: Dispatch<
    SetStateAction<{
      ddp: boolean;
      kmt: boolean;
      pfp: boolean;
    }>
  >;
}

interface FilterContentProps {
  filter: boolean;
  avatar: StaticImageData;
  candidate: string;
}

const filterStyle = 'h-6 rounded-[24px] transition-all border border-white flex items-center overflow-hidden';
const filterText = 'text-white text-xs pl-5 flex-1 whitespace-nowrap';

function InvoicingFilter({ filter, setFilter }: Props) {
  return (
    <div className="border border-black py-3 px-7 flex items-center gap-2 mr-3">
      <p>最支持</p>
      <div className="flex">
        <div
          className={`bg-deep-green ${filterStyle} ${filter.ddp ? 'w-[104px] duration-300' : 'w-6 duration-0'} z-[2]`}
          onClick={() => setFilter({ ddp: true, kmt: false, pfp: false })}
        >
          <FilterContent
            filter={filter.ddp}
            avatar={ddpAvatar}
            candidate="蔡英文"
          />
        </div>
        <div
          className={`bg-deep-blue ${filterStyle} ${
            filter.kmt ? 'w-[104px] duration-300' : 'w-6 duration-0'
          } -translate-x-3 z-[1]`}
          onClick={() => setFilter({ ddp: false, kmt: true, pfp: false })}
        >
          <FilterContent
            filter={filter.kmt}
            avatar={kmtAvatar}
            candidate="韓國瑜"
          />
        </div>
        <div
          className={`bg-deep-orange ${filterStyle} ${
            filter.pfp ? 'w-[104px] duration-300' : 'w-6 duration-0'
          } -translate-x-6`}
          onClick={() => setFilter({ ddp: false, kmt: false, pfp: true })}
        >
          <FilterContent
            filter={filter.pfp}
            avatar={pfpAvatar}
            candidate="宋楚瑜"
          />
        </div>
      </div>
    </div>
  );
}

function FilterContent({ filter, avatar, candidate }: FilterContentProps) {
  return filter ? (
    <>
      <p className={filterText}>{candidate}</p>
      <Image
        src={avatar}
        alt="avatar"
        className="w-6"
      />
    </>
  ) : null;
}

export default InvoicingFilter;
