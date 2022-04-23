import { getRankUpProbs } from '@probs/cube/baseProbs/getRankUpProbs';
import { cubeOrderEnum } from 'custom-type';

const [success, fail] = [0, 1];

const getStrangeCubeRankUpProb = async (date?: Date) => {
  const res = (await getRankUpProbs(date))[cubeOrderEnum.strange];
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
