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

export default {
  getAddiCubeRankUpProb,
};
