
const cases = {
  permutation(n, r) {
    if(r>n){
      return 0;
    }
    per_cal = factorial(n) / factorial(n - r);
    return per_cal;
  },

  combination(n, r) {
    if (r>n){
      return 0;
    }
    com_cal = factorial(n) / (factorial(r) * factorial(n - r));
    return com_cal;
  },

  multiPermutation(n, r) {
    mulper_cal = 1;
    for (i=0;i<r;i++){
      mulper_cal = mulper_cal * n;
    }
    return mulper_cal;
  },

  multiCombination(n, r) {
    mulcom_cal = factorial(n + r - 1) / (factorial(r) * factorial(n - 1));
    return mulcom_cal;
  }
};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  fac_cal = 1;
  for (let i = 2; i <= n; i++) {
    fac_cal = i * fac_cal;
  }
  return fac_cal;
}

module.exports = cases;
