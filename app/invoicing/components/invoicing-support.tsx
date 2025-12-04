import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InvoicingFilter from './invoicing-filter';
import InvoicingBar from './invoicing-bar';
import { INVOICING } from '@/constants/Invoicing';
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
    <div className="border-x-2 border-b-2 border-black pb-3 pl-6 pr-3 pt-8">
      <InvoicingFilter
        filter={filter}
        setFilter={setFilter}
      />
      <div className="mt-3">
        <div className="flex pr-3">
          <p className="w-14 text-xs text-black/50 md:w-20 md:text-base">地區</p>
          <p className="text-xs text-black/50 md:text-base">得票占比</p>
        </div>
        <AnimatePresence mode="wait">
          <ul className="mt-3 flex h-[260px] flex-col gap-4 overflow-y-scroll">
            {filterNeighborhoods.length ? (
              filterNeighborhoods.map((proportion, index) => {
                const { countyId, townId, villageId, countyName, townName, villageName } = proportion ?? {};

                return (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center pr-1"
                    key={`${countyId}-${townId}-${villageId}-${index}`}
                  >
                    <p className="w-14 text-xs md:w-20 md:text-base">{villageName ?? townName ?? countyName}</p>
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
                className="text-center text-xs md:text-base"
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
