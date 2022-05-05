import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import utils from '@libs/utils';
import { fullUuidInfo } from 'custom-type';

const getRoyalFaceProbs = async (isChange: boolean, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Beauty.getRoyalFaceParagraphList(isChange, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getRoyalFaceProbs,
};
