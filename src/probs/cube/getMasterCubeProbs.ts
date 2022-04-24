import { cubeOrderEnum, successFailEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const getMasterCubeRankUpProbs = async (isMiracle: boolean, date?: Date) => {
  const res = (await BaseProbs.getCubeRankUpProbs(isMiracle, date))[cubeOrderEnum.master];
  const [toEpic, toUnique] = [0, 1];
  return {
    to: {
      epic: {
        success: res[toEpic][successFailEnum.success],
        fail: res[toEpic][successFailEnum.fail],
      },
      unique: {
        success: res[toUnique][successFailEnum.success],
        fail: res[toUnique][successFailEnum.fail],
      },
    },
  };
};

const getMasterCubeOptionProbs = async (isMiracle: boolean, date?: Date) => {
  const res = (await BaseProbs.getCubeOptionProbs(isMiracle, date))[cubeOrderEnum.master];
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
      unique: {
        success: res[2][successFailEnum.success],
        fail: res[2][successFailEnum.fail],
      },
    },
    third: {
      rare: {
        success: res[3][successFailEnum.success],
        fail: res[3][successFailEnum.fail],
      },
      epic: {
        success: res[4][successFailEnum.success],
        fail: res[4][successFailEnum.fail],
      },
      unique: {
        success: res[5][successFailEnum.success],
        fail: res[5][successFailEnum.fail],
      },
    },
  };
};

export default {
  getMasterCubeRankUpProbs,
  getMasterCubeOptionProbs,
};
