import { lazy } from 'react';

const lazyDelayed = function async (module, delay = 1000) {
  return lazy(() => Promise.all([
    module,
    new Promise((resolve) => setTimeout(resolve, delay)) // ensures minimal delay
  ]).then(([module]) => module));
}

export { lazyDelayed };