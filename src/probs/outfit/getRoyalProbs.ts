import BaseProbs from './baseProbs';

const getRoyalProbs = async (season?: number, date?: Date) => {
  const res = await BaseProbs.getRoyalProbs(season, date);
  return {
    male: res[0],
    female: res[1],
  };
};

export default {
  getRoyalProbs,
};
