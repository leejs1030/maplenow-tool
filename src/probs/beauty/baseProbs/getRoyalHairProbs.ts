import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import { fullUuidInfo } from 'custom-type';

const getRoyalHairProbs = async (
  isChange: boolean,
  year?: number | fullUuidInfo,
  month?: number | string,
) => {
  const isNotFullUuidInfo = typeof year === 'number' || year === undefined;
  const { pageUuid, subPageUuid, paragraphs } = isNotFullUuidInfo
    ? await Urls.Paragraphs.Beauty.getRoyalHairParagraphList(isChange, year, month)
    : year;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getRoyalHairProbs,
};
