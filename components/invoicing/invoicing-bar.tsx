import type { MapTopologyProperties } from '@/types/map';

interface Props {
  className: string;
  proportion: MapTopologyProperties;
  showProportion?: boolean;
}

const barStyle = 'h-full transition-all duration-300 text-xs text-white flex items-center';

function InvoicingBar({ className, proportion, showProportion }: Props) {
  const { kmt, pfp, ddp } = proportion;

  return (
    <div className={`w-full overflow-hidden rounded-lg flex gap-[1px] ${className}`}>
      <div
        className={`bg-deep-green pl-2 ${barStyle}`}
        style={{ width: `${ddp}%` }}
      >
        {showProportion ? `${ddp}%` : ''}
      </div>
      <div
        className={`bg-deep-blue pl-1 ${barStyle}`}
        style={{ width: `${kmt}%` }}
      >
        {showProportion ? `${kmt}%` : ''}
      </div>
      <div
        className={`bg-deep-orange pl-1 ${barStyle}`}
        style={{ width: `${pfp}%` }}
      >
        {showProportion ? `${pfp}%` : ''}
      </div>
    </div>
  );
}

export default InvoicingBar;
