import type { Dispatch, SetStateAction, MouseEvent } from 'react';
import Image, { type StaticImageData } from 'next/image';
import ddpAvatar from '@/assets/images/avatar/ddp-avatar.png';
import kmtAvatar from '@/assets/images/avatar/kmt-avatar.png';
import pfpAvatar from '@/assets/images/avatar/pfp-avatar.png';

interface Filter {
  ddp: boolean;
  kmt: boolean;
  pfp: boolean;
}

interface Props {
  filter: {
    ddp: boolean;
    kmt: boolean;
    pfp: boolean;
  };
  setFilter: Dispatch<SetStateAction<Filter>>;
}

interface FilterContentProps {
  filter: boolean;
  avatar: StaticImageData;
  candidate: string;
}

const filterStyle =
  'h-6 rounded-[24px] transition-all border border-white flex items-center overflow-hidden cursor-pointer hover:opacity-90';

function InvoicingFilter({ filter, setFilter }: Props) {
  function resetFilter(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, target: Filter) {
    event.stopPropagation();
    setFilter(target);
  }

  return (
    <div
      className="border border-black py-3 px-7 flex items-center gap-2 mr-3 cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={event => resetFilter(event, { ddp: false, kmt: false, pfp: false })}
    >
      <p>最支持</p>
      <div className="flex">
        <div
          className={`bg-deep-green ${filterStyle} ${filter.ddp ? 'w-[104px] duration-300' : 'w-6 duration-0'} z-[2]`}
          onClick={event => resetFilter(event, { ddp: true, kmt: false, pfp: false })}
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
          onClick={event => resetFilter(event, { ddp: false, kmt: true, pfp: false })}
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
          onClick={event => resetFilter(event, { ddp: false, kmt: false, pfp: true })}
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
      <p className="text-white text-xs pl-5 flex-1 whitespace-nowrap md:text-base">{candidate}</p>
      <Image
        src={avatar}
        alt="avatar"
        className="w-6"
      />
    </>
  ) : null;
}

export default InvoicingFilter;
