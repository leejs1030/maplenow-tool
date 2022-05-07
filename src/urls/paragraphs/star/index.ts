import { starPageEnum } from 'mapletype';
import getStarParagraphList from './getStarParagraphList';

const getNormalParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.normal, date);
const getDiscountThirtyParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.discountThirty, date);
const getMultipleFiveParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.multipleFive, date);
const getShiningParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.shining, date);
const getUnderTenParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.underTen, date);

export default {
  getNormalParagraphList,
  getDiscountThirtyParagraphList,
  getMultipleFiveParagraphList,
  getShiningParagraphList,
  getUnderTenParagraphList,
  getStarParagraphList,
};
