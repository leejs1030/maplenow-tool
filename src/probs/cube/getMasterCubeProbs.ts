import { getRankUpProbs } from '@probs/cube/baseProbs/getRankUpProbs';
import { cubeOrderEnum } from 'custom-type';

const [success, fail] = [0, 1];

const getMasterCubeRankUpProb = async (date?: Date) => {
  const res = (await getRankUpProbs(date))[cubeOrderEnum.master];
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

export default {
  getMasterCubeRankUpProb,
};
