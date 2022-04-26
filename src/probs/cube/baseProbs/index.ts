import getCubeOptionProbs from './getCubeOptionProbs';
import getCubeRankUpProbs from './getCubeRankUpProbs';

export default {
  ...getCubeRankUpProbs,
  ...getCubeOptionProbs,
};
