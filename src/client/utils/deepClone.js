const deepClone = (target) => {
  if (typeof target !== 'object') {
    return target;
  }
  if (target === null) {
    return target;
  }
  if (target instanceof Array) {
    const copy = [];
    for (const item of target) {
      copy.push(deepClone(item));
    }
    return copy;
  }
  const copy = {};
  for (const item in target) {
    copy[item] = deepClone(target[item]);
  }
  return copy;
};

export default deepClone;
