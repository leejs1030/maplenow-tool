import Urls from '@urls';
import { starPageEnum, fullUuidInfo } from 'custom-type';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import utils from '@libs/utils';

const getStarProbs = async (starPage: starPageEnum, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Star.getStarParagraphList(starPage, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getStarProbs,
};
