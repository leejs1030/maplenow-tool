import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getAddiCubeRankUpProb = async (date?: Date) => {
  const res = (await BaseProbs.getRankUpProbs(date))[cubeOrderEnum.addi];
  const [toEpic, toUnique, toLegendary] = [0, 1, 2];
  const toEpicSuccess = res[toEpic][success];
  const toEpicFail = res[toEpic][fail];
  const toUniqueSuccess = res[toUnique][success];
  const toUniqueFail = res[toUnique][fail];
  const toLegendarySuccess = res[toLegendary][success];
  const toLegendaryFail = res[toLegendary][fail];
  return {
    toEpicSuccess,
    toEpicFail,
    toUniqueSuccess,
    toUniqueFail,
    toLegendarySuccess,
    toLegendaryFail,
  };
};

const getAddiCubeOptionProb = async (date?: Date) => {
  const ret = (await BaseProbs.getOptionProbs(date))[cubeOrderEnum.addi];
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
      legendary: {
        success: ret[3][success],
        fail: ret[3][fail],
      },
    },
    third: {
      rare: {
        success: ret[4][success],
        fail: ret[4][fail],
      },
      epic: {
        success: ret[5][success],
        fail: ret[5][fail],
      },
      unique: {
        success: ret[6][success],
        fail: ret[6][fail],
      },
      legendary: {
        success: ret[7][success],
        fail: ret[7][fail],
      },
    },
  };
  return res;
};

export default {
  getAddiCubeRankUpProb,
  getAddiCubeOptionProb,
};
