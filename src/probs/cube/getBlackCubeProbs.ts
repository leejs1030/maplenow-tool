import { cubeOrderEnum, fullUuidInfo, successFailEnum } from 'mapletype';
import BaseProbs from './baseProbs';

const getBlackCubeRankUpProbs = async (isMiracle?: boolean, date?: Date | fullUuidInfo) => {
  const res = (await BaseProbs.getCubeRankUpProbs(isMiracle, date))[cubeOrderEnum.black];
  const [toEpic, toUnique, toLegendary] = [0, 1, 2];
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
      legendary: {
        success: res[toLegendary][successFailEnum.success],
        fail: res[toUnique][successFailEnum.fail],
      },
    },
  };
};

const getBlackCubeOptionProbs = async (isMiracle?: boolean, date?: Date | fullUuidInfo) => {
  const res = (await BaseProbs.getCubeOptionProbs(isMiracle, date))[cubeOrderEnum.black];
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
      legendary: {
        success: res[3][successFailEnum.success],
        fail: res[3][successFailEnum.fail],
      },
    },
    third: {
      rare: {
        success: res[4][successFailEnum.success],
        fail: res[4][successFailEnum.fail],
      },
      epic: {
        success: res[5][successFailEnum.success],
        fail: res[5][successFailEnum.fail],
      },
      unique: {
        success: res[6][successFailEnum.success],
        fail: res[6][successFailEnum.fail],
      },
      legendary: {
        success: res[7][successFailEnum.success],
        fail: res[7][successFailEnum.fail],
      },
    },
  };
};

export default {
  getBlackCubeRankUpProbs,
  getBlackCubeOptionProbs,
};
