import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getStrangeaddiCubeOptionProb = async (date?: Date) => {
  const ret = (await BaseProbs.getOptionProbs(date))[cubeOrderEnum.strangeaddi];
  const res = {
    second: {
      rare: {
        success: ret[0][success],
        fail: ret[0][fail],
      },
    },
    third: {
      rare: {
        success: ret[1][success],
        fail: ret[1][fail],
      },
    },
  };
  return res;
};

export default {
  getStrangeaddiCubeOptionProb,
};
