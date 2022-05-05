import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import utils from '@libs/utils';
import { fullUuidInfo } from 'custom-type';

const getRoyalStyleProbs = async (season?: number, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Outfit.getRoyalStyleParagraphList(season, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getRoyalStyleProbs,
};
