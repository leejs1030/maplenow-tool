import getCubeOptionProbs from './getRoyalProbs';
import getCubeRankUpProbs from './getMasterPieceProbs';

export default {
  ...getCubeRankUpProbs,
  ...getCubeOptionProbs,
};
