'use client';

import { motion, useCycle } from 'framer-motion';
import Logo from '@/components/layout/navigation-logo';
import Navigation from '@/components/layout/navigation';
import MenuToggle from '@/components/common/menu-toggle';

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="fixed w-full bg-white z-10">
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="flex justify-between px-4 py-3"
      >
        <Logo />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <div className="border-b-[3px] border-black"></div>
    </header>
  );
}

export default Header;
