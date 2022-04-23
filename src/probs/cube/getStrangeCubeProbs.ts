import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getStrangeCubeRankUpProb = async (date?: Date) => {
  const res = (await BaseProbs.getRankUpProbs(date))[cubeOrderEnum.strange];
  const [toEpic] = [0];
  const toEpicSuccess = res[toEpic][success];
  const toEpicFail = res[toEpic][fail];
  return {
    toEpicSuccess,
    toEpicFail,
  };
};

const getStrangeCubeOptionProb = async (date?: Date) => {
  const ret = (await BaseProbs.getOptionProbs(date))[cubeOrderEnum.strange];
  const res = {
    second: {
      rare: {
        success: ret[0][success],
        fail: ret[0][fail],
      },
      epic: {
        success: ret[1][success],
        fail: ret[1][fail],
      },
    },
    third: {
      rare: {
        success: ret[2][success],
        fail: ret[2][fail],
      },
      epic: {
        success: ret[3][success],
        fail: ret[3][fail],
      },
    },
  };
  return res;
};

export default {
  getStrangeCubeRankUpProb,
  getStrangeCubeOptionProb,
};
