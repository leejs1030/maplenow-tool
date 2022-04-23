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

export default {
  getStrangeCubeRankUpProb,
};
