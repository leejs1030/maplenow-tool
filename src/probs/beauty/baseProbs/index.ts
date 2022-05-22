import getRoyalFaceProbs from './getRoyalFaceProbs';
import getRoyalHairProbs from './getRoyalHairProbs';
import getBeautyAwardProbs from './getBeautyAwardProbs';

export default {
  ...getRoyalFaceProbs,
  ...getRoyalHairProbs,
  ...getBeautyAwardProbs,
};
