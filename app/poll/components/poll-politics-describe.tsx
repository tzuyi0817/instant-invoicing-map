'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { POLL_POLITICS } from '@/constants/poll';

type PollPolitics = (typeof POLL_POLITICS)[number]['key'];

interface Props {
  describe: Record<PollPolitics, Record<string, string>[]>;
  border: string;
  bg: string;
}

function PollPoliticsDescribe({ describe, border, bg }: Props) {
  const [type, setType] = useState<PollPolitics>(POLL_POLITICS[0].key);

  return (
    <>
      <div className="py-3">
        {POLL_POLITICS.map(({ key, value }) => {
          return (
            <button
              className={`btn-rounded mb-1 mr-1 text-xs md:mb-2 md:mr-2 md:text-lg ${type === key ? 'active' : ''}`}
              key={key}
              onClick={() => setType(key)}
            >
              {value}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <ul>
          {describe[type].map(({ question, answer }, index) => {
            return (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`mb-3 overflow-hidden rounded-[20px] border text-xs ${border} md:mb-6 md:rounded-[40px] md:text-2xl`}
                key={`${type}-${index}`}
              >
                <p className={`px-6 py-2 text-white ${bg} md:px-11 md:py-4`}>{question}</p>
                <p className="px-6 py-3 md:px-11 md:py-7">{answer}</p>
              </motion.li>
            );
          })}
        </ul>
      </AnimatePresence>
    </>
  );
}

export default PollPoliticsDescribe;
