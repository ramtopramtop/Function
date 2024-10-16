'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  return ip.split('.').reduce((sum, x) => sum = (sum << 8) + parseInt(x), 0);
};

module.exports = { ipToInt };
