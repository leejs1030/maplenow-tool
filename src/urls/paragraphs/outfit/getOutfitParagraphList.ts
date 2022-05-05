import Subpages from '@urls/subpages';
import { masterPieceNameEnum, outfitPageEnum } from 'custom-type';
import errors from '@errors';
import baseParagraphs from '../baseParagraphs';

const getRoyalStyleParagraphList = async (season?: number, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Outfits.getOutfitSubPageList(
    outfitPageEnum.royalStyle,
  );
  let i = 0;
  if (season) {
    for (i = 0; i < subPages.length; i += 1) {
      if (subPages[i].description === `로얄스타일 ${season}기`) break;
    }
  }
  if (i >= subPages.length) throw new errors.InvalidRoyalStyleSeasonError();
  return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[i].uuid);
};

const getMasterPieceParagraphList = async (pieceName: masterPieceNameEnum, date?: Date) => {
  let selected: outfitPageEnum;
  if (pieceName === masterPieceNameEnum.red) selected = outfitPageEnum.red;
  else selected = outfitPageEnum.black;
  const { pageUuid, subPages } = await Subpages.Outfits.getOutfitSubPageList(selected);
  return baseParagraphs.compareWithDateAndGetParagraphs(pageUuid, subPages, date);
};

const getRedPieceParagraphList = async (date?: Date) =>
  getMasterPieceParagraphList(masterPieceNameEnum.red, date);
const getBlackPieceParagraphList = async (date?: Date) =>
  getMasterPieceParagraphList(masterPieceNameEnum.black, date);

export default {
  getRoyalStyleParagraphList,
  getMasterPieceParagraphList,
  getRedPieceParagraphList,
  getBlackPieceParagraphList,
};
