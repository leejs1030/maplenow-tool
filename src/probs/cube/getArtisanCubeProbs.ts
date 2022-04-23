import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getArtisanCubeRankUpProb = async (date?: Date) => {
  const res = (await BaseProbs.getRankUpProbs(date))[cubeOrderEnum.artisan];
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

export default {
  getArtisanCubeRankUpProb,
};
