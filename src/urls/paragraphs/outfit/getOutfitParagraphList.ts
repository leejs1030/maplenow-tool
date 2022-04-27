import Subpages from '@src/urls/subpages';
import { masterPieceNameEnum, outfitPageEnum } from 'custom-type';
import errors from '@errors';
import baseParagraphs from '@src/urls/paragraphs/baseParagraphs';
import utils from '@libs/utils';

const getRoyalStyleParagraphList = async (season?: number, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Outfits.getOutfitSubPageList(outfitPageEnum.royal);
  let i = 0;
  if (season) {
    for (i = 0; i < subPages.length; i += 1) {
      if (subPages[i].description === `로얄스타일 ${season}기`) break;
    }
  }
  if (i >= subPages.length) throw new errors.InvalidRoyalSeasonError();
  return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[i].uuid);
};

const getMasterPieceParagraphList = async (pieceName: masterPieceNameEnum, date?: Date) => {
  let selected: outfitPageEnum;
  if (pieceName === masterPieceNameEnum.red) selected = outfitPageEnum.red;
  else selected = outfitPageEnum.black;
  const { pageUuid, subPages } = await Subpages.Outfits.getOutfitSubPageList(selected);
  let newDate;
  if (!date) newDate = new Date();
  else newDate = new Date(date);
  let i;
  for (i = 0; i < subPages.length; i += 1)
    if (utils.translateDescriptionToDate(subPages[i].description) <= newDate) break;
  if (i >= subPages.length) throw new errors.InvalidDateError();
  return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[i].uuid);
};

const getRedPieceParagraphList = async (date?: Date) =>
  getMasterPieceParagraphList(masterPieceNameEnum.red, date);
const getBlackPieceParagraphList = async (date?: Date) =>
  getMasterPieceParagraphList(masterPieceNameEnum.black, date);

export default {
  getRoyalParagraphList: getRoyalStyleParagraphList,
  getMasterPieceParagraphList,
  getRedPieceParagraphList,
  getBlackPieceParagraphList,
};
