import { PropsWithChildren } from 'react';
import PollPoliticsHeader from '@/components/poll/poll-politics-header';
import PollPoliticsDescribe from '@/components/poll/poll-politics-describe';
import { POLL_POLITICS_MAP } from '@/configs/poll';
import Pfp from '@/assets/images/candidate/pfp-dark.png';
import PfpSymbol from '@/assets/images/icon/pfp-symbol.svg';
import Kmt from '@/assets/images/candidate/kmt-dark.png';
import KmtSymbol from '@/assets/images/icon/kmt-symbol.svg';
import Ddp from '@/assets/images/candidate/ddp-dark.png';
import DdpSymbol from '@/assets/images/icon/ddp-symbol.svg';

function PollPolitics() {
  return (
    <div className="flex overflow-x-scroll snap-x snap-mandatory">
      <PollPoliticsContainer>
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
      </PollPoliticsContainer>
      <PollPoliticsContainer>
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
      </PollPoliticsContainer>
      <PollPoliticsContainer>
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
      </PollPoliticsContainer>
    </div>
  );
}

function PollPoliticsContainer({ children }: PropsWithChildren) {
  return <div className="px-4 min-w-full snap-center">{children}</div>;
}

export default PollPolitics;
