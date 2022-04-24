import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getStrangeCubeRankUpProb = async (isMiracle: boolean, date?: Date) => {
  const res = (await BaseProbs.getRankUpProbs(isMiracle, date))[cubeOrderEnum.strange];
  const [toEpic] = [0];
  return {
    to: {
      epic: {
        success: res[toEpic][success],
        fail: res[toEpic][fail],
      },
    },
  };
};

const getStrangeCubeOptionProb = async (isMiracle: boolean, date?: Date) => {
  const res = (await BaseProbs.getOptionProbs(isMiracle, date))[cubeOrderEnum.strange];
  return {
    second: {
      rare: {
        success: res[0][success],
        fail: res[0][fail],
      },
      epic: {
        success: res[1][success],
        fail: res[1][fail],
      },
    },
    third: {
      rare: {
        success: res[2][success],
        fail: res[2][fail],
      },
      epic: {
        success: res[3][success],
        fail: res[3][fail],
      },
    },
  };
};

export default {
  getStrangeCubeRankUpProb,
  getStrangeCubeOptionProb,
};
