import { starPageEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const getStarProbs = async (starPage: starPageEnum, date?: Date) => {
  const res = await BaseProbs.getStarProbs(starPage, date);
  return {
    catch: res[0].map((data) => ({
      success: data[0],
      fail: data[1],
      destroy: data[2],
    })),
    noCatch: res[1].map((data) => ({
      success: data[0],
      fail: data[1],
      destroy: data[2],
    })),
  };
};

const getNormalProbs = async (date?: Date) => getStarProbs(starPageEnum.normal, date);
const getDiscountThirtyProbs = async (date?: Date) =>
  getStarProbs(starPageEnum.discountThirty, date);
const getMultipleFiveProbs = async (date?: Date) => getStarProbs(starPageEnum.multipleFive, date);
const getUnderTenProbs = async (date?: Date) => getStarProbs(starPageEnum.underTen, date);
const getShiningProbs = async (date?: Date) => getStarProbs(starPageEnum.shining, date);

export default {
  getDiscountThirtyProbs,
  getMultipleFiveProbs,
  getNormalProbs,
  getUnderTenProbs,
  getShiningProbs,
  getStarProbs,
};
