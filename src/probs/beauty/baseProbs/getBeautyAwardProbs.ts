import { fullUuidInfo } from 'mapletype';
import Urls from '../../../urls';
import utils from '../../../libs/utils';
import getBaseProbsWithUuid from '../../baseUuidProbs';

const getBeautyAwardFaceProbs = async (date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Beauty.getBeautyAwardFaceParagraphList(date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs, date);
};

const getBeautyAwardHairProbs = async (date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Beauty.getBeautyAwardHairParagraphList(date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs, date);
};

export default {
  getBeautyAwardFaceProbs,
  getBeautyAwardHairProbs,
};
