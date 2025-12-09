'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

function Footer() {
  const pathname = usePathname();
  const isHomePage = useMemo(() => pathname === '/', [pathname]);

  return (
    <AnimatePresence mode="wait">
      <footer className="flex w-full flex-col gap-7 overflow-hidden bg-black px-6 py-[22px] text-white lg:flex-row lg:items-center lg:justify-between">
        {isHomePage && (
          <Link href="/poll">
            <motion.h2
              className="flex items-center gap-1 px-[10px]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="whitespace-nowrap">看選前民調</p>
              <motion.svg
                viewBox="0 0 280 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[262px] md:w-[350px]"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <g id="btn">
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#DD4D2A"
                    variants={{
                      rest: {
                        d: 'M107.571 0.247803L130.25 17.318H0.256836V15.161H123.923L106.483 2.0336L107.571 0.247803Z',
                        transition: {
                          type: 'spring',
                        },
                      },
                      hover: {
                        d: 'M243.921 0.87915L261.444 12.7501H0.5V11.2501H256.556L243.079 2.12103L243.921 0.87915Z',
                        transition: {
                          type: 'spring',
                        },
                      },
                    }}
                  />
                </g>
              </motion.svg>
            </motion.h2>
          </Link>
        )}
        <div className={`text-xs md:flex md:text-base ${isHomePage ? '' : 'lg:flex-1 lg:justify-center'}`}>
          <p className="mb-[10px] px-[10px] md:mb-0">樹懶設計 shulian@gmail.com</p>
          <p className="px-[10px]">© 2023 樹懶設計 shulian 版權所有</p>
        </div>
      </footer>
    </AnimatePresence>
  );
}

export default Footer;
