export const MAP_AREA_COLOR = {
  ddp: {
    shallow: '#8AF1B6',
    normal: '#30CB73',
    deep: '#25A55C',
  },
  kmt: {
    shallow: '#BBD9FF',
    normal: '#7EB2F4',
    deep: '#4A8FE7',
  },
  pfp: {
    shallow: '#FFB58C',
    normal: '#F79E6D',
    deep: '#F88545',
  },
} as const;

export const MAP_CONFIG = {
  350: {
    scale: 4500,
    x: -110,
    y: -100,
  },
  660: {
    scale: 9000,
    x: 200,
    y: 20,
  },
};

export type MapConfigKey = keyof typeof MAP_CONFIG;
