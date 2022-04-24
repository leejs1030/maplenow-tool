import { cubeNameEnum } from 'custom-type';
import errors from '@errors';
import getRedCubeProbs from './getRedCubeProbs';
import getBlackCubeProbs from './getBlackCubeProbs';
import getAddiCubeProbs from './getAddiCubeProbs';
import getStrangeCubeProbs from './getStrangeCubeProbs';
import getMasterCubeProbs from './getMasterCubeProbs';
import getArtisanCubeProbs from './getArtisanCubeProbs';
import getStrangeaddiCubeProbs from './getStrangeaddiCubeProbs';

const getCubeRankUpProb = async (cubeName: cubeNameEnum, isMiracle?: boolean, date?: Date) => {
  isMiracle = !!isMiracle; // eslint-disable-line no-param-reassign
  switch (cubeName) {
    case cubeNameEnum.RED:
      return getRedCubeProbs.getRedCubeRankUpProb(isMiracle, date);
    case cubeNameEnum.BLACK:
      return getBlackCubeProbs.getBlackCubeRankUpProb(isMiracle, date);
    case cubeNameEnum.ADDI:
      return getAddiCubeProbs.getAddiCubeRankUpProb(isMiracle, date);
    case cubeNameEnum.STRANGE:
      return getStrangeCubeProbs.getStrangeCubeRankUpProb(isMiracle, date);
    case cubeNameEnum.MASTER:
      return getMasterCubeProbs.getMasterCubeRankUpProb(isMiracle, date);
    case cubeNameEnum.ARTISAN:
      return getArtisanCubeProbs.getArtisanCubeRankUpProb(isMiracle, date);
    default:
      throw new errors.InvalidCubeNameError();
  }
};

const getCubeOptionProb = async (cubeName: cubeNameEnum, isMiracle?: boolean, date?: Date) => {
  isMiracle = !!isMiracle; // eslint-disable-line no-param-reassign
  switch (cubeName) {
    case cubeNameEnum.RED:
      return getRedCubeProbs.getRedCubeOptionProb(isMiracle, date);
    case cubeNameEnum.BLACK:
      return getBlackCubeProbs.getBlackCubeOptionProb(isMiracle, date);
    case cubeNameEnum.ADDI:
      return getAddiCubeProbs.getAddiCubeOptionProb(isMiracle, date);
    case cubeNameEnum.STRANGE:
      return getStrangeCubeProbs.getStrangeCubeOptionProb(isMiracle, date);
    case cubeNameEnum.MASTER:
      return getMasterCubeProbs.getMasterCubeOptionProb(isMiracle, date);
    case cubeNameEnum.ARTISAN:
      return getArtisanCubeProbs.getArtisanCubeOptionProb(isMiracle, date);
    case cubeNameEnum.STRANGEADDI:
      return getStrangeaddiCubeProbs.getStrangeaddiCubeOptionProb(isMiracle, date);
    default:
      throw new errors.InvalidCubeNameError();
  }
};

export default {
  ...getRedCubeProbs,
  ...getBlackCubeProbs,
  ...getAddiCubeProbs,
  ...getStrangeCubeProbs,
  ...getMasterCubeProbs,
  ...getArtisanCubeProbs,
  ...getStrangeaddiCubeProbs,
  getCubeOptionProb,
  getCubeRankUpProb,
};
