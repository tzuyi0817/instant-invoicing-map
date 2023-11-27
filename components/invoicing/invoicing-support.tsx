import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InvoicingFilter from '@/components/invoicing/invoicing-filter';
import InvoicingBar from '@/components/invoicing/invoicing-bar';
import { INVOICING } from '@/configs/Invoicing';
import type { MapTopologyProperties } from '@/types/map';

interface Props {
  neighborhoods: Array<MapTopologyProperties | null>;
}

function InvoicingSupport({ neighborhoods }: Props) {
  const [filter, setFilter] = useState({
    ddp: false,
    kmt: false,
    pfp: false,
  });
  const filterNeighborhoods = useMemo(() => {
    const { ddp, kmt, pfp } = filter;

    if (!ddp && !kmt && !pfp) return neighborhoods;
    return neighborhoods.filter(properties => {
      if (!properties?.winner) return true;
      const { winner } = properties;
      if (ddp) return winner === 'ddp';
      if (kmt) return winner === 'kmt';
      return winner === 'pfp';
    });
  }, [filter, neighborhoods]);

  return (
    <div className="pl-6 pr-3 py-8 border-black border-x-2 border-b-2">
      <InvoicingFilter
        filter={filter}
        setFilter={setFilter}
      />
      <div className="mt-4">
        <div className="flex pr-3">
          <p className="text-xs text-black/50 w-14 md:text-base md:w-20">地區</p>
          <p className="text-xs text-black/50 md:text-base">得票占比</p>
        </div>
        <AnimatePresence mode="wait">
          <ul className="mt-4 flex flex-col gap-5 max-h-[280px] overflow-y-scroll">
            {filterNeighborhoods.length ? (
              filterNeighborhoods.map((proportion, index) => {
                const { countyId, townId, villageId, countyName, townName, villageName } = proportion ?? {};

                return (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex pr-1 items-center"
                    key={`${countyId}-${townId}-${villageId}-${index}`}
                  >
                    <p className="text-xs w-14 md:text-base md:w-20">{villageName ?? townName ?? countyName}</p>
                    <InvoicingBar
                      className="h-[14px] flex-1 md:h-4"
                      proportion={proportion ?? INVOICING.default}
                    />
                  </motion.li>
                );
              })
            ) : (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-center md:text-base"
              >
                無最支持的縣市或鄉鎮
              </motion.li>
            )}
          </ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default InvoicingSupport;
