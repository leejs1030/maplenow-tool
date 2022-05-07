import { fullUuidInfo, petPageEnum } from 'mapletype';
import BaseProbs from './baseProbs';

const getPetProbs = async (petPage: petPageEnum, date?: Date | fullUuidInfo) => {
  const res = await BaseProbs.getPetProbs(petPage, date);
  return res[0][0];
};

const getWonderBerryProbs = async (date?: Date | fullUuidInfo) =>
  getPetProbs(petPageEnum.wonderBerry, date);
const getCrystalSweetProbs = async (date?: Date | fullUuidInfo) =>
  getPetProbs(petPageEnum.crystalSweet, date);
const getCrystalDreamProbs = async (date?: Date | fullUuidInfo) =>
  getPetProbs(petPageEnum.crystalDream, date);

export default {
  getWonderBerryProbs,
  getCrystalSweetProbs,
  getCrystalDreamProbs,
  getPetProbs,
};
