import { starPageEnum } from 'mapletype';
import Subpages from '../../../urls/subpages';
import baseParagraphs from '../baseParagraphs';

const getStarParagraphList = async (starPage: starPageEnum, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Star.getStarSubPageList(starPage);
  if (subPages.length <= 1) return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[0].uuid);
  return baseParagraphs.compareWithDateAndGetParagraphs(pageUuid, subPages, date);
};

export default getStarParagraphList;
