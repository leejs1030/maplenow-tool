import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getMasterCubeRankUpProb = async (date?: Date) => {
  const res = (await BaseProbs.getRankUpProbs(date))[cubeOrderEnum.master];
  const [toEpic, toUnique] = [0, 1];
  return {
    to: {
      epic: {
        success: res[toEpic][success],
        fail: res[toEpic][fail],
      },
      unique: {
        success: res[toUnique][success],
        fail: res[toUnique][fail],
      },
    },
  };
};

const getMasterCubeOptionProb = async (date?: Date) => {
  const res = (await BaseProbs.getOptionProbs(date))[cubeOrderEnum.master];
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
      unique: {
        success: res[2][success],
        fail: res[2][fail],
      },
    },
    third: {
      rare: {
        success: res[3][success],
        fail: res[3][fail],
      },
      epic: {
        success: res[4][success],
        fail: res[4][fail],
      },
      unique: {
        success: res[5][success],
        fail: res[5][fail],
      },
    },
  };
};

export default {
  getMasterCubeRankUpProb,
  getMasterCubeOptionProb,
};
