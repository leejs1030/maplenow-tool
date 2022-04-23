import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getRedCubeRankUpProb = async (date?: Date) => {
  const res = (await BaseProbs.getRankUpProbs(date))[cubeOrderEnum.red];
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

const getRedCubeOptionProb = async (date?: Date) => {
  const res = (await BaseProbs.getOptionProbs(date))[cubeOrderEnum.red];
  console.log(res);
  return res;
};

export default {
  getRedCubeRankUpProb,
};
