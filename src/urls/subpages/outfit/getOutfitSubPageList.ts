import { outfitPageEnum, pageEnum } from 'mapletype';
import myAxios from '../../../libs/myaxios';
import errors from '../../../errors';
import Pages from '../../pages';

const getOutfitSubPageList = async (outfitPage: outfitPageEnum) => {
  const pageList = await Pages.getPageList(pageEnum.outfit);
  const pageUuid = pageList[outfitPage].uuid;
  const res = await myAxios.get(`/pages/${pageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return { pageUuid, subPages: res.data.data.subPageSummaryList };
};

export default {
  getOutfitSubPageList,
};
