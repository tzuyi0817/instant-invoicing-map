import Image from 'next/image';
import Link from 'next/link';
import PaperPresidential from '@/assets/images/layout/paper-presidential.png';
import PresidentialPalace from '@/assets/images/layout/presidential-palace.png';
import { INVOICING } from '@/configs/Invoicing';

const PseudoElement =
  'before:content-[""] before:transition-transform before:h-4 before:border-l-[0.5px] before:absolute before:border-black before:-top-4';

function HomeVoteRatio() {
  const { kmt, ddp, pfp } = INVOICING.default;

  return (
    <div className="px-[4vw] border-b-[3px] border-black">
      <div className="pt-7 border-x border-black flex flex-col items-center">
        <div className="w-[62vw] h-[31vw] bg-black rounded-t-full"></div>
        <div className="relative h-[31vw] w-full">
          <div className="absolute w-full bottom-[52px]">
            <Image
              src={PaperPresidential}
              alt="paper presidential"
              className="w-full object-cover"
            />
          </div>
          <div className="absolute px-[3vw] w-full bottom-5">
            <Image
              src={PresidentialPalace}
              alt="presidential palace"
              className="w-full object-cover"
              priority
            />
            <div
              className="absolute bottom-0 left-3 w-[calc(100%-24px)] h-full opacity-50"
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
            <ul className="w-full absolute bottom-0 left-0 flex text-xs px-4">
              <li
                className={`${PseudoElement}`}
                style={{ width: `${ddp}%` }}
              >
                蔡英文 {ddp}%
              </li>
              <li
                className={`${PseudoElement}`}
                style={{ width: `${kmt}%` }}
              >
                韓國瑜 {kmt}%
              </li>
              <li
                className={`whitespace-nowrap ${PseudoElement}`}
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
    </div>
  );
}

export default HomeVoteRatio;
