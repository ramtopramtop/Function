'use strict';

const methods = (iface) => {
  const intro = [];
  for (const field in iface) {
    if (typeof iface[field] === 'function') {
      intro.push([iface[field].name, iface[field].length]);
    }
  }
  return intro;
};

module.exports = { methods };
