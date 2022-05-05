import Urls from '@urls';
import { masterPieceNameEnum, fullUuidInfo } from 'custom-type';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import utils from '@libs/utils';

const getMasterPieceProbs = async (pieceName: masterPieceNameEnum, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Outfit.getMasterPieceParagraphList(pieceName, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getMasterPieceProbs,
};
