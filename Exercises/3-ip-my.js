'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  let ipArr = ip.split('.').map(Number);
  let shift = 3;
  let shiftedIpArr = [];
  for (let value of ipArr) {
    shiftedIpArr.push(value << shift);
    shift = shift--;
  }
  return shiftedIpArr.reduce((sum, x) => sum = sum + x, 0);
};
//console.log(ipToInt());
module.exports = { ipToInt };
