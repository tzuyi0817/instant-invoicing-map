import Image from 'next/image';
import Link from 'next/link';
import PaperPresidential from '@/assets/images/layout/paper-presidential.png';
import PresidentialPalace from '@/assets/images/layout/presidential-palace.png';

const PseudoElement =
  'before:content-[""] before:transition-transform before:h-4 before:border-l-[0.5px] before:absolute before:border-black before:-top-4';

function HomeVoteRatio() {
  return (
    <div className="px-4 border-b-[3px] border-black">
      <div className="pt-7 border-x border-black flex flex-col items-center">
        <div className="w-[260px] h-[130px] bg-black rounded-t-full"></div>
        <div className="relative h-[130px] w-full">
          <div className="absolute w-full -top-[100px]">
            <Image
              src={PaperPresidential}
              alt="paper presidential"
              className="w-full object-cover"
            />
          </div>
          <div className="absolute px-3 w-full bottom-5">
            <Image
              src={PresidentialPalace}
              alt="presidential palace"
              className="w-full object-cover"
              priority
            />
            <ul className="w-full absolute bottom-0 flex text-xs px-1">
              <li className={`w-1/3 ${PseudoElement}`}>蔡英文 0%</li>
              <li className={`w-1/3 ${PseudoElement}`}>韓國瑜 0%</li>
              <li className={`w-1/3 ${PseudoElement}`}>宋楚瑜 0%</li>
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
