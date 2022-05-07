import { abilPageEnum } from 'mapletype';
import utils from '../../../libs/utils';
import baseParagraphs from '../baseParagraphs';
import Subpages from '../../subpages';

const getAbilParagraphList = async (selected: abilPageEnum, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Abil.getAbilSubPageList(selected);
  let newDate;
  if (!date) newDate = new Date();
  else newDate = new Date(date);
  let i;
  for (i = 0; i < subPages.length; i += 1)
    if (utils.translateDescriptionToDate(subPages[i].description) <= newDate) break;
  return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[i].uuid);
};

export default getAbilParagraphList;
