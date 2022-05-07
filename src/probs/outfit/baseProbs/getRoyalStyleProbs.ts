import { fullUuidInfo } from 'mapletype';
import Urls from '../../../urls';
import getBaseProbsWithUuid from '../../baseUuidProbs';

const getRoyalStyleProbs = async (season?: number | fullUuidInfo, date?: Date) => {
  const isNotFullUuidInfo = typeof season === 'number' || season === undefined;
  const { pageUuid, subPageUuid, paragraphs } = isNotFullUuidInfo
    ? await Urls.Paragraphs.Outfit.getRoyalStyleParagraphList(season, date)
    : season;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getRoyalStyleProbs,
};
