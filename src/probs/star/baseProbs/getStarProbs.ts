import { starPageEnum, fullUuidInfo } from 'custom-type';
import Urls from '../../../urls';
import getBaseProbsWithUuid from '../../baseUuidProbs';
import utils from '../../../libs/utils';

const getStarProbs = async (starPage: starPageEnum, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Star.getStarParagraphList(starPage, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getStarProbs,
};
