import { cubeOrderEnum, fullUuidInfo, successFailEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const getStrangeCubeRankUpProbs = async (isMiracle: boolean, date?: Date | fullUuidInfo) => {
  const res = (await BaseProbs.getCubeRankUpProbs(isMiracle, date))[cubeOrderEnum.strange];
  const [toEpic] = [0];
  return {
    to: {
      epic: {
        success: res[toEpic][successFailEnum.success],
        fail: res[toEpic][successFailEnum.fail],
      },
    },
  };
};

const getStrangeCubeOptionProbs = async (isMiracle: boolean, date?: Date | fullUuidInfo) => {
  const res = (await BaseProbs.getCubeOptionProbs(isMiracle, date))[cubeOrderEnum.strange];
  return {
    second: {
      rare: {
        success: res[0][successFailEnum.success],
        fail: res[0][successFailEnum.fail],
      },
      epic: {
        success: res[1][successFailEnum.success],
        fail: res[1][successFailEnum.fail],
      },
    },
    third: {
      rare: {
        success: res[2][successFailEnum.success],
        fail: res[2][successFailEnum.fail],
      },
      epic: {
        success: res[3][successFailEnum.success],
        fail: res[3][successFailEnum.fail],
      },
    },
  };
};

export default {
  getStrangeCubeRankUpProbs,
  getStrangeCubeOptionProbs,
};
