import getRoyalFaceProbs from '@probs/beauty/baseProbs/getRoyalFaceProbs';
import getRoyalHairProbs from '@probs/beauty/baseProbs/getRoyalHairProbs';

export default {
  ...getRoyalFaceProbs,
  ...getRoyalHairProbs,
};
