'use strict';

const countTypesInArray = (arr) => {
  const res = {};
  for (const el of arr) {
    const type = typeof el;
    const count = res[type] || 0;
    res[type] = count + 1;
  }
  return res;
};

module.exports = { countTypesInArray };
