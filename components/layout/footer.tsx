'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="w-full px-6 py-[22px] bg-black text-white overflow-hidden">
      <h2 className="px-[10px] flex gap-1 items-center">
        <p className="whitespace-nowrap">看選前民調</p>
        <Link href="/">
          <motion.svg
            viewBox="0 0 280 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[262px]"
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
        </Link>
      </h2>
      <p className="text-xs px-[10px] mt-7 mb-[10px]">樹懶設計 shulian@gmail.com</p>
      <p className="text-xs px-[10px]">© 2023 樹懶設計 shulian 版權所有</p>
    </footer>
  );
}

export default Footer;
