import BaseProbs from './baseProbs';

const getRoyalHairProbs = async (year?: number, month?: number | string) => {
  const res = (await BaseProbs.getRoyalHairProbs(false, year, month))[0];
  return {
    male: res[0],
    female: res[1],
  };
};

const getRoyalChangeHairProbs = async (year?: number, month?: number | string) => {
  const res = (await BaseProbs.getRoyalHairProbs(true, year, month))[0];
  return {
    male: res[0],
    female: res[1],
  };
};

export default {
  getRoyalHairProbs,
  getRoyalChangeHairProbs,
};
