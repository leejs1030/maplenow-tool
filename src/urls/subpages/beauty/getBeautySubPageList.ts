import { beautyPageEnum, pageEnum } from 'custom-type';
import Pages from '@src/urls/pages';
import axios from '@libs/axios';
import errors from '@errors';

const getBeautySubPageList = async (
  beautyPage: beautyPageEnum,
): Promise<{
  pageUuid: string,
  subPages: { uuid: string, description: string }[],
}> => {
  const pageList = await Pages.getPageList(pageEnum.beauty);
  const pageUuid = pageList[beautyPage].uuid;
  const res = await axios.get(`/pages/${pageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return { pageUuid, subPages: res.data.data.subPageSummaryList };
};

export default {
  getBeautySubPageList,
};
