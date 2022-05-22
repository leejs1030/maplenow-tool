import { starPageEnum, fullUuidInfo } from 'mapletype';
import Urls from '../../../urls';
import getBaseProbsWithUuid from '../../baseUuidProbs';
import utils from '../../../libs/utils';

const getStarProbs = async (starPage: starPageEnum, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Star.getStarParagraphList(starPage, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs, date);
};

export default {
  getStarProbs,
};
