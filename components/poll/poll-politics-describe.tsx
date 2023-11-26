'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { POLL_POLITICS } from '@/configs/poll';

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
              className={`btn-rounded text-xs mr-1 mb-1 ${type === key ? 'active' : ''}`}
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
                className={`text-xs border rounded-[20px] mb-3 overflow-hidden ${border}`}
                key={`${type}-${index}`}
              >
                <p className={`p-2 px-6 text-white ${bg}`}>{question}</p>
                <p className="py-3 px-6">{answer}</p>
              </motion.li>
            );
          })}
        </ul>
      </AnimatePresence>
    </>
  );
}

export default PollPoliticsDescribe;
