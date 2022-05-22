import { fullUuidInfo } from 'mapletype';
import BaseProbs from './baseProbs';

const getBeautyAwardHairProbs = async (date?: Date | fullUuidInfo) => {
  const res = await BaseProbs.getBeautyAwardHairProbs(date);
  return {
    male: res[0][0],
    female: res[1][0],
  };
};

const getBeautyAwardFaceProbs = async (date?: Date | fullUuidInfo) => {
  const res = await BaseProbs.getBeautyAwardFaceProbs(date);
  return {
    male: res[0][0],
    female: res[1][0],
  };
};

export default {
  getBeautyAwardHairProbs,
  getBeautyAwardFaceProbs,
};
