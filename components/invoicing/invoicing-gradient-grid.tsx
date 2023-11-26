import type { PropsWithChildren } from 'react';

interface Props {
  linearGradient: string;
  showProportion?: boolean;
}

const proportionText = 'text-xs text-white scale-[0.83] md:text-xs md:scale-100';

function InvoicingGradientGrid({ children, linearGradient, showProportion }: PropsWithChildren<Props>) {
  return (
    <div>
      <p className="text-right text-xs md:text-sm">{children}</p>
      <div className={`w-[60px] h-[18px] flex justify-between items-center md:w-[100px] md:h-7 ${linearGradient}`}>
        {showProportion && (
          <>
            <p className={`${proportionText} origin-left md:pl-1`}>40%</p>
            <p className={`${proportionText} origin-right md:pr-1`}>70%</p>
          </>
        )}
      </div>
    </div>
  );
}

export default InvoicingGradientGrid;
