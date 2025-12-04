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
      <div className={`flex h-[18px] w-[60px] items-center justify-between md:h-7 md:w-[100px] ${linearGradient}`}>
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
