import Image from 'next/image';
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
      <div className="absolute bottom-0 w-full h-full left-0 overflow-hidden">
        <div className="relative w-full h-full">
          <HomeBackground className="border-b-[#F5F2F2] right-0 border-l-transparent border-l-[100vh] lg:border-l-[90vw]" />
          <HomeBackground className="border-b-primary-red left-0 border-r-transparent border-r-[100vh] lg:border-r-[90vw]" />
        </div>
      </div>
      <div className="pt-[18vh] flex justify-center w-full relative">
        <div className="home-candidate-kmt">
          <Image
            src={Kmt}
            alt="KMT"
          />
          <KmtBtn className="block absolute -bottom-10 left-7 w-[122px] md:w-[205px] lg:w-[302px] lg:left-[10%]" />
        </div>

        <div className="home-candidate-ddp">
          <DdpBtn className="block relative left-8 w-[140px] md:w-[238px] lg:w-[350px] lg:left-[10%]" />
          <Image
            src={Ddp}
            alt="DDP"
          />
        </div>
        <div className="home-candidate-pfp">
          <Image
            src={Pfp}
            alt="PFP"
          />
          <PfpBtn className="absolute bottom-3 right-0 w-[120px] md:w-[202px] md:bottom-8 lg:w-[298px] lg:right-[15%] lg:bottom-0" />
        </div>
      </div>
    </>
  );
}

export default HomeCandidate;
