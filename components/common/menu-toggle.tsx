import { motion, type Variants, type Transition } from 'framer-motion';

interface Props {
  toggle: () => void;
}

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: Transition;
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

function MenuToggle({ toggle }: Props) {
  return (
    <button onClick={toggle}>
      <svg
        width="33"
        height="32"
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}

export default MenuToggle;
