import { outfitPageEnum, pageEnum } from 'custom-type';
import axios from '@libs/axios';
import errors from '@errors';
import Pages from '../../pages';

const getOutfitSubPageList = async (
  outfitPage: outfitPageEnum,
): Promise<{
  pageUuid: string,
  subPages: { uuid: string, description: string }[],
}> => {
  const pageList = await Pages.getPageList(pageEnum.outfit);
  const pageUuid = pageList[outfitPage].uuid;
  const res = await axios.get(`/pages/${pageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return { pageUuid, subPages: res.data.data.subPageSummaryList };
};

export default {
  getOutfitSubPageList,
};
