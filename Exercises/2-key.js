'use strict';

const generateKey = (length, possible) => {
  const strLen = possible.length;
  let string = '';
  
  for (let i = 0; i < length; i++) {
    string += possible[Math.floor((Math.random() * (strLen)) - 0, 5)];
  }
  return string;
};

module.exports = { generateKey };
