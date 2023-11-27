export function sleep(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function debounce<T>(fun: T, ms = 300) {
  if (typeof fun !== 'function') throw new TypeError('The first argument is not a function.');
  let timer: NodeJS.Timeout | null = null;

  return function closure(this: unknown, ...args: unknown[]) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);
      timer = null;
    }, ms);
  };
}
