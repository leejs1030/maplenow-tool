import { cubeOrderEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const [success, fail] = [0, 1];

const getStrangeaddiCubeOptionProb = async (date?: Date) => {
  const res = (await BaseProbs.getOptionProbs(date))[cubeOrderEnum.strangeaddi];
  return {
    second: {
      rare: {
        success: res[0][success],
        fail: res[0][fail],
      },
    },
    third: {
      rare: {
        success: res[1][success],
        fail: res[1][fail],
      },
    },
  };
};

export default {
  getStrangeaddiCubeOptionProb,
};
