import { starPageEnum } from 'custom-type';
import getStarParagraphList from '@urls/paragraphs/star/getStarParagraphList';

const getStarNormalParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.normal, date);
const getStarDiscountThirtyParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.discountThirty, date);
const getStarMultipleFiveParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.multipleFive, date);
const getStarShiningParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.shining, date);
const getStarUnderTenParagraphList = async (date?: Date) =>
  getStarParagraphList(starPageEnum.underTen, date);

export default {
  getStarNormalParagraphList,
  getStarDiscountThirtyParagraphList,
  getStarMultipleFiveParagraphList,
  getStarShiningParagraphList,
  getStarUnderTenParagraphList,
  getStarParagraphList,
};
