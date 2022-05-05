import { petPageEnum } from 'custom-type';
import getPetParagraphList from './getPetParagraphList';

const getWonderBerryParagraphList = async (date?: Date) =>
  getPetParagraphList(petPageEnum.wonderBerry, date);
const getCrystalSweetParagraphList = async (date?: Date) =>
  getPetParagraphList(petPageEnum.crystalSweet, date);
const getCrystalDreamParagraphList = async (date?: Date) =>
  getPetParagraphList(petPageEnum.crystalDream, date);

export default {
  getWonderBerryParagraphList,
  getCrystalSweetParagraphList,
  getCrystalDreamParagraphList,
  getPetParagraphList,
};
