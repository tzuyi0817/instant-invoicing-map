'use client';

import { motion, useCycle } from 'framer-motion';
import Logo from './navigation-logo';
import Navigation from './navigation';
import MenuToggle from '@/components/common/menu-toggle';

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="fixed z-20 w-full bg-white">
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="flex items-center justify-between px-4 py-3 lg:px-6"
      >
        <Logo />
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <div className="border-b-[3px] border-black"></div>
    </header>
  );
}

export default Header;
