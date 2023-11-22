import type { PropsWithChildren } from 'react';

interface Props {
  linearGradient: string;
  showProportion?: boolean;
}

const proportionText = 'text-xs text-white scale-[0.83]';

function InvoicingGradientGrid({ children, linearGradient, showProportion }: PropsWithChildren<Props>) {
  return (
    <div>
      <p className="text-right text-xs">{children}</p>
      <div className={`w-[60px] h-[18px] flex justify-between items-center ${linearGradient}`}>
        {showProportion && (
          <>
            <p className={`${proportionText} origin-left`}>40%</p>
            <p className={`${proportionText} origin-right`}>70%</p>
          </>
        )}
      </div>
    </div>
  );
}

export default InvoicingGradientGrid;
