import { cubePageEnum } from 'custom-type';
import utils from '@libs/utils';
import errors from '@errors';
import axios from '@libs/axios';
import Subpages from '../../subpages';

const getCubeRankUpParagraphsList = async (
  date?: Date,
): Promise<{
  pageUuid: string,
  subPageUuid: string,
  paragraphs: { uuid: string, autoTable: any }[],
}> => {
  const { pageUuid, subPages } = await Subpages.getCubeSubPageList(cubePageEnum.rankUp);
  let newDate;
  if (!date) newDate = new Date();
  else newDate = new Date(date);
  let i;
  for (i = 0; i < subPages.length; i += 1)
    if (utils.translateDescriptionToDate(subPages[i].description) <= newDate) break;
  if (i >= subPages.length) throw new errors.InvalidDateError();
  const ret = await axios.get(`/pages/${pageUuid}?subPageUuid=${subPages[i].uuid}`);
  if (ret.status !== 200) throw new errors.NexonNowError();
  return {
    pageUuid,
    subPageUuid: subPages[i].uuid,
    paragraphs: ret.data.data.selectedSubPage.paragraphs
      .filter((value: any) => value.autoTable)
      .map((value: any) => ({ uuid: value.uuid, autoTable: value.autoTable })),
  };
};

export default {
  getCubeRankUpParagraphsList,
};
