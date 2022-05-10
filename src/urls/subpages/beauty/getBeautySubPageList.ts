import { beautyPageEnum, pageEnum } from 'mapletype';
import Pages from '../../pages';
import myAxios from '../../../libs/myaxios';
import errors from '../../../errors';

const getBeautySubPageList = async (beautyPage: beautyPageEnum) => {
  const pageList = await Pages.getPageList(pageEnum.beauty);
  const pageUuid = pageList[beautyPage].uuid;
  const res = await myAxios.get(`/pages/${pageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return { pageUuid, subPages: res.data.data.subPageSummaryList };
};

export default {
  getBeautySubPageList,
};
