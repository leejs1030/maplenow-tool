import { petPageEnum } from 'custom-type';
import Subpages from '../../subpages';
import baseParagraphs from '../baseParagraphs';

const getStarParagraphList = async (petPage: petPageEnum, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Pet.getPetSubPageList(petPage);
  if (subPages.length <= 1) return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[0].uuid);
  return baseParagraphs.compareWithDateAndGetParagraphs(pageUuid, subPages, date);
};

export default getStarParagraphList;
