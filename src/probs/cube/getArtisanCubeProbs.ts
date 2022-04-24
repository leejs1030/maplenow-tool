import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getArtisanCubeRankUpProb = async (isMiracle: boolean, date?: Date) => {
  const res = (await BaseProbs.getRankUpProbs(isMiracle, date))[cubeOrderEnum.artisan];
  const [toEpic, toUnique, toLegendary] = [0, 1, 2];
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
      legendary: {
        success: res[toLegendary][success],
        fail: res[toUnique][fail],
      },
    },
  };
};

const getArtisanCubeOptionProb = async (isMiracle: boolean, date?: Date) => {
  const res = (await BaseProbs.getOptionProbs(isMiracle, date))[cubeOrderEnum.artisan];
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
      legendary: {
        success: res[3][success],
        fail: res[3][fail],
      },
    },
    third: {
      rare: {
        success: res[4][success],
        fail: res[4][fail],
      },
      epic: {
        success: res[5][success],
        fail: res[5][fail],
      },
      unique: {
        success: res[6][success],
        fail: res[6][fail],
      },
      legendary: {
        success: res[7][success],
        fail: res[7][fail],
      },
    },
  };
};

export default {
  getArtisanCubeRankUpProb,
  getArtisanCubeOptionProb,
};
