import { AutoTable, abilPageEnum } from 'custom-type';
import utils from '@libs/utils';
import errors from '@errors';
import axios from '@libs/axios';
import Subpages from '../../subpages';

const getAbilParagraphList = async (selected: abilPageEnum, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Abils.getAbilSubPageList(selected);
  let newDate;
  if (!date) newDate = new Date();
  else newDate = new Date(date);
  let i;
  for (i = 0; i < subPages.length; i += 1)
    if (utils.translateDescriptionToDate(subPages[i].description) <= newDate) break;
  const ret = await axios.get(`/pages/${pageUuid}?subPageUuid=${subPages[i].uuid}`);
  if (ret.status !== 200) throw new errors.NexonNowError();
  return {
    pageUuid,
    subPageUuid: subPages[i].uuid,
    paragraphs: (ret.data.data.selectedSubPage.paragraphs as { uuid: string, autoTable: AutoTable }[])
      .filter((value) => value.autoTable)
      .map((value) => ({ uuid: value.uuid, autoTable: value.autoTable })),
  };
};

const getAbilPointParagraphList = async (
  date?: Date,
) => getAbilParagraphList(abilPageEnum.point, date);

const getAbilCirculatorParagraphList = async (
  date?: Date,
) => getAbilParagraphList(abilPageEnum.circulator, date);

export default {
  getAbilPointParagraphList,
  getAbilCirculatorParagraphList,
};
