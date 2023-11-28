import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { motion } from 'framer-motion';
import MenuPresidential from '@/assets/images/layout/menu-presidential.png';
import MenuBackground from '@/assets/images/layout/menu-background.svg';

interface Props {
  toggle: () => void;
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 0px 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const ulVariants = {
  open: {
    visibility: 'visible',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    visibility: 'hidden',
    transition: { staggerChildren: 0.05, staggerDirection: -1, when: 'afterChildren' },
  },
} as const;

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function Navigation({ toggle }: Props) {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <ul className="hidden lg:text-lg lg:flex lg:gap-10 lg:px-20">
        <li className={`${segment === 'invoicing' ? 'text-primary-red' : 'hover:text-primary-red'} transition-colors`}>
          <Link href="/invoicing">開票地圖</Link>
        </li>
        <li className={`${segment === 'poll' ? 'text-primary-red' : 'hover:text-primary-red'} transition-colors`}>
          <Link href="/poll">候選人政見</Link>
        </li>
      </ul>

      <motion.div
        className="bg-primary-red fixed top-0 left-0 right-0 bottom-0 -z-[1]"
        variants={sidebar}
      />

      <motion.div
        className="fixed bottom-0 left-0 w-full"
        variants={sidebar}
      >
        <MenuBackground className="absolute bottom-0 -z-[1] w-[120%]" />
        <Image
          src={MenuPresidential}
          alt="menu background"
          className="object-cover w-full"
        />
      </motion.div>

      <motion.ul
        className="fixed top-1/3 right-5 text-right text-white text-2xl font-bold flex flex-col gap-4 md:text-[32px] md:gap-8"
        variants={ulVariants}
      >
        <motion.li
          variants={liVariants}
          onClick={toggle}
        >
          <Link href="/">首頁</Link>
        </motion.li>
        <motion.li
          variants={liVariants}
          onClick={toggle}
        >
          <Link href="/invoicing">開票地圖</Link>
        </motion.li>
        <motion.li
          variants={liVariants}
          onClick={toggle}
        >
          <Link href="/poll">候選人政見</Link>
        </motion.li>
      </motion.ul>
    </>
  );
}

export default Navigation;
