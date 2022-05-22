import { fullUuidInfo } from 'mapletype';
import Urls from '../../../urls';
import utils from '../../../libs/utils';
import getBaseProbsWithUuid from '../../baseUuidProbs';

const getRoyalFaceProbs = async (isChange: boolean, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Beauty.getRoyalFaceParagraphList(isChange, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs, date);
};

export default {
  getRoyalFaceProbs,
};
