import { abilPageEnum } from 'custom-type';
import getAbilParagraphList from './getAbilParagraphList';

const getPointParagraphList = async (date?: Date) => getAbilParagraphList(abilPageEnum.point, date);

const getCirculatorParagraphList = async (date?: Date) =>
  getAbilParagraphList(abilPageEnum.circulator, date);

export default {
  getAbilParagraphList,
  getPointParagraphList,
  getCirculatorParagraphList,
};
