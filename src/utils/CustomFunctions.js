import { lazy } from 'react';

const lazyDelayed = function async (module, delay = 300) {
  return lazy(() => Promise.all([
    module,
    new Promise((resolve) => setTimeout(resolve, delay)) // ensures minimal delay
  ]).then(([module]) => module));
}

const currencyFormat = (num) => {
  return `$ ${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}

const processToParagraphs = (string, classes) => {
  const stringArray = string.split('\\n');

  if(stringArray.length > 1) {
    let processed = [];
    stringArray.map((paragraph, i) => (paragraph ? processed.push(<p key={i} className={classes}>{paragraph}</p>) : ''));
    return processed;
  } else {
    return <p>{string}</p>;
  }
}

export { lazyDelayed, currencyFormat, processToParagraphs };