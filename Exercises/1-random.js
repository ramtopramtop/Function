'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return (min + Math.floor((Math.random() * (max - min + 1)) - 0,5));
};

module.exports = { random };
