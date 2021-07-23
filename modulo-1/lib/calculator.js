module.exports.sum = (sum1, sum2) => {
  const int1 = parseInt(sum1, 10);
  const int2 = parseInt(sum2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Please check your input');
  }

  return int1 + int2;
};
