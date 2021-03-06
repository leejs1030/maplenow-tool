import { cubeOrderEnum, fullUuidInfo, successFailEnum } from 'mapletype';
import BaseProbs from './baseProbs';

const getStrangeaddiCubeOptionProbs = async (isMiracle?: boolean, date?: Date | fullUuidInfo) => {
  const res = (await BaseProbs.getCubeOptionProbs(isMiracle, date))[cubeOrderEnum.strangeaddi];
  return {
    second: {
      rare: {
        success: res[0][successFailEnum.success],
        fail: res[0][successFailEnum.fail],
      },
    },
    third: {
      rare: {
        success: res[1][successFailEnum.success],
        fail: res[1][successFailEnum.fail],
      },
    },
  };
};

export default {
  getStrangeaddiCubeOptionProbs,
};
