import BaseProbs from './baseProbs';

const getRoyalStyleProbs = async (season?: number, date?: Date) => {
  const res = await BaseProbs.getRoyalStyleProbs(season, date);
  return {
    male: res[0],
    female: res[1],
  };
};

export default {
  getRoyalStyleProbs,
};
