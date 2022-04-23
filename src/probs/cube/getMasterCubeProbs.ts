import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getMasterCubeRankUpProb = async (date?: Date) => {
  const res = (await BaseProbs.getRankUpProbs(date))[cubeOrderEnum.master];
  const [toEpic, toUnique] = [0, 1];
  const toEpicSuccess = res[toEpic][success];
  const toEpicFail = res[toEpic][fail];
  const toUniqueSuccess = res[toUnique][success];
  const toUniqueFail = res[toUnique][fail];
  return {
    toEpicSuccess,
    toEpicFail,
    toUniqueSuccess,
    toUniqueFail,
  };
};

const getMasterCubeOptionProb = async (date?: Date) => {
  const ret = (await BaseProbs.getOptionProbs(date))[cubeOrderEnum.master];
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
      unique: {
        success: ret[2][success],
        fail: ret[2][fail],
      },
    },
    third: {
      rare: {
        success: ret[3][success],
        fail: ret[3][fail],
      },
      epic: {
        success: ret[4][success],
        fail: ret[4][fail],
      },
      unique: {
        success: ret[5][success],
        fail: ret[5][fail],
      },
    },
  };
  return res;
};

export default {
  getMasterCubeRankUpProb,
  getMasterCubeOptionProb,
};
