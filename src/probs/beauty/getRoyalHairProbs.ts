import { fullUuidInfo } from 'custom-type';
import BaseProbs from './baseProbs';

const getRoyalHairProbs = async (year?: number | fullUuidInfo, month?: number | string) => {
  const res = await BaseProbs.getRoyalHairProbs(false, year, month);
  return {
    male: res[0][0],
    female: res[1][0],
  };
};

const getRoyalChangeHairProbs = async (year?: number | fullUuidInfo, month?: number | string) => {
  const res = await BaseProbs.getRoyalHairProbs(true, year, month);
  return {
    male: res[0][0],
    female: res[1][0],
  };
};

export default {
  getRoyalHairProbs,
  getRoyalChangeHairProbs,
};
