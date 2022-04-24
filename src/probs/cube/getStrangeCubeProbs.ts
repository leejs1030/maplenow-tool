import { cubeOrderEnum, successFailEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const getStrangeCubeRankUpProb = async (isMiracle: boolean, date?: Date) => {
  const res = (await BaseProbs.getRankUpProbs(isMiracle, date))[cubeOrderEnum.strange];
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

const getStrangeCubeOptionProb = async (isMiracle: boolean, date?: Date) => {
  const res = (await BaseProbs.getOptionProbs(isMiracle, date))[cubeOrderEnum.strange];
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
  getStrangeCubeRankUpProb,
  getStrangeCubeOptionProb,
};
