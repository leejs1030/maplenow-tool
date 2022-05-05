import getCubeOptionProbs from './getRoyalStyleProbs';
import getCubeRankUpProbs from './getMasterPieceProbs';

export default {
  ...getCubeRankUpProbs,
  ...getCubeOptionProbs,
};
