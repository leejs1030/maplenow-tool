import { fullUuidInfo } from 'mapletype';
import BaseProbs from './baseProbs';

const getRoyalFaceProbs = async (date?: Date | fullUuidInfo) => {
  const res = await BaseProbs.getRoyalFaceProbs(false, date);
  return {
    male: res[0][0],
    female: res[1][0],
  };
};

const getRoyalChangeFaceProbs = async (date?: Date | fullUuidInfo) => {
  const res = await BaseProbs.getRoyalFaceProbs(true, date);
  return {
    male: res[0][0],
    female: res[1][0],
  };
};

export default {
  getRoyalFaceProbs,
  getRoyalChangeFaceProbs,
};
