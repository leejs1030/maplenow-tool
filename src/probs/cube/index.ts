import { cubeNameEnum, fullUuidInfo } from 'mapletype';
import errors from '../../errors';
import getRedCubeProbs from './getRedCubeProbs';
import getBlackCubeProbs from './getBlackCubeProbs';
import getAddiCubeProbs from './getAddiCubeProbs';
import getStrangeCubeProbs from './getStrangeCubeProbs';
import getMasterCubeProbs from './getMasterCubeProbs';
import getArtisanCubeProbs from './getArtisanCubeProbs';
import getStrangeaddiCubeProbs from './getStrangeaddiCubeProbs';

const getCubeRankUpProbs = async (
  cubeName: cubeNameEnum,
  isMiracle?: boolean,
  date?: Date | fullUuidInfo,
) => {
  isMiracle = !!isMiracle; // eslint-disable-line no-param-reassign
  switch (cubeName) {
    case cubeNameEnum.RED:
      return getRedCubeProbs.getRedCubeRankUpProbs(isMiracle, date);
    case cubeNameEnum.BLACK:
      return getBlackCubeProbs.getBlackCubeRankUpProbs(isMiracle, date);
    case cubeNameEnum.ADDI:
      return getAddiCubeProbs.getAddiCubeRankUpProbs(isMiracle, date);
    case cubeNameEnum.STRANGE:
      return getStrangeCubeProbs.getStrangeCubeRankUpProbs(isMiracle, date);
    case cubeNameEnum.MASTER:
      return getMasterCubeProbs.getMasterCubeRankUpProbs(isMiracle, date);
    case cubeNameEnum.ARTISAN:
      return getArtisanCubeProbs.getArtisanCubeRankUpProbs(isMiracle, date);
    default:
      throw new errors.InvalidCubeNameError();
  }
};

const getCubeOptionProbs = async (
  cubeName: cubeNameEnum,
  isMiracle?: boolean,
  date?: Date | fullUuidInfo,
) => {
  isMiracle = !!isMiracle; // eslint-disable-line no-param-reassign
  switch (cubeName) {
    case cubeNameEnum.RED:
      return getRedCubeProbs.getRedCubeOptionProbs(isMiracle, date);
    case cubeNameEnum.BLACK:
      return getBlackCubeProbs.getBlackCubeOptionProbs(isMiracle, date);
    case cubeNameEnum.ADDI:
      return getAddiCubeProbs.getAddiCubeOptionProbs(isMiracle, date);
    case cubeNameEnum.STRANGE:
      return getStrangeCubeProbs.getStrangeCubeOptionProbs(isMiracle, date);
    case cubeNameEnum.MASTER:
      return getMasterCubeProbs.getMasterCubeOptionProbs(isMiracle, date);
    case cubeNameEnum.ARTISAN:
      return getArtisanCubeProbs.getArtisanCubeOptionProbs(isMiracle, date);
    case cubeNameEnum.STRANGEADDI:
      return getStrangeaddiCubeProbs.getStrangeaddiCubeOptionProbs(isMiracle, date);
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
  getCubeOptionProbs,
  getCubeRankUpProbs,
};
