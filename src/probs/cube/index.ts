import getRedCubeProbs from './getRedCubeProbs';
import getBlackCubeProbs from './getBlackCubeProbs';
import getAddiCubeProbs from './getAddiCubeProbs';
import getStrangeCubeProbs from './getStrangeCubeProbs';
import getMasterCubeProbs from './getMasterCubeProbs';
import getArtisanCubeProbs from './getArtisanCubeProbs';
import getStrangeaddiCubeProbs from './getStrangeaddiCubeProbs';

export default {
  ...getRedCubeProbs,
  ...getBlackCubeProbs,
  ...getAddiCubeProbs,
  ...getStrangeCubeProbs,
  ...getMasterCubeProbs,
  ...getArtisanCubeProbs,
  ...getStrangeaddiCubeProbs,
};
