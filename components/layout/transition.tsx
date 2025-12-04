'use client';

import { useMemo, useContext, type PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { motion, AnimatePresence } from 'framer-motion';

function FrozenRouter({ children }: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useMemo(() => context, []);

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>;
}

function Transition({ children }: PropsWithChildren<{}>) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}

export default Transition;
