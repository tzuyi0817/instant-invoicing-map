import Image from 'next/image';
import Kmt from '@/assets/images/candidate/kmt.png';
import KmtBtn from '@/assets/images/candidate/kmt-btn.svg';
import Ddp from '@/assets/images/candidate/ddp.png';
import DdpBtn from '@/assets/images/candidate/ddp-btn.svg';
import Pfp from '@/assets/images/candidate/pfp.png';
import PfpBtn from '@/assets/images/candidate/pfp-btn.svg';
import '@/styles/home/candidate.css';

function HomeCandidate() {
  return (
    <div className="pt-14 flex justify-center w-full relative">
      <div className="home-candidate-kmt">
        <Image
          src={Kmt}
          alt="KMT"
        />
        <KmtBtn className="block absolute -bottom-10 left-7 w-[122px]" />
      </div>

      <div className="home-candidate-ddp">
        <DdpBtn className="block relative left-8 w-[140px]" />
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
        <PfpBtn className="absolute bottom-3 right-7 w-[90px]" />
      </div>
    </div>
  );
}

export default HomeCandidate;
