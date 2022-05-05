import { petPageEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const getPetProbs = async (petPage: petPageEnum, date?: Date) => {
  const res = await BaseProbs.getPetProbs(petPage, date);
  return res[0][0];
};

const getWonderBerryProbs = async (date?: Date) => getPetProbs(petPageEnum.wonderBerry, date);
const getCrystalSweetProbs = async (date?: Date) => getPetProbs(petPageEnum.crystalSweet, date);
const getCrystalDreamProbs = async (date?: Date) => getPetProbs(petPageEnum.crystalDream, date);

export default {
  getWonderBerryProbs,
  getCrystalSweetProbs,
  getCrystalDreamProbs,
  getPetProbs,
};
