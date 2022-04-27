import Urls from '@urls';
import { AutoTableItem, masterPieceNameEnum } from 'custom-type';
import utils from '@libs/utils';

const getMasterPieceProbs = async (pieceName: masterPieceNameEnum, date?: Date) => {
  const {
    pageUuid,
    subPageUuid,
    paragraphs,
  } = await Urls.Paragraphs.Outfits.getMasterPieceParagraphList(pieceName, date);
  const promiseArr = await utils.generatePromiseArr(pageUuid, subPageUuid, paragraphs);
  const res = await Promise.all(promiseArr);
  return res.map((arr) => arr.map((value) => value.data.data.probs as AutoTableItem[]));
};

export default {
  getMasterPieceProbs,
};
