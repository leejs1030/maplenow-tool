import Urls from '@urls';
import { masterPieceNameEnum } from 'custom-type';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getMasterPieceProbs = async (pieceName: masterPieceNameEnum, date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } =
    await Urls.Paragraphs.Outfit.getMasterPieceParagraphList(pieceName, date);
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getMasterPieceProbs,
};
