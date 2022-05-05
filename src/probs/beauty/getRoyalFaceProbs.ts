import BaseProbs from './baseProbs';

const getRoyalFaceProbs = async (date?: Date) => {
  const res = (await BaseProbs.getRoyalFaceProbs(false, date))[0];
  return {
    male: res[0],
    female: res[1],
  };
};

const getRoyalChangeFaceProbs = async (date?: Date) => {
  const res = (await BaseProbs.getRoyalFaceProbs(true, date))[0];
  return {
    male: res[0],
    female: res[1],
  };
};

export default {
  getRoyalFaceProbs,
  getRoyalChangeFaceProbs,
};
