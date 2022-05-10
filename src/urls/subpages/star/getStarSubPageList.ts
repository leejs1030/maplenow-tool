import { starPageEnum, pageEnum } from 'mapletype';
import myAxios from '../../../libs/myaxios';
import errors from '../../../errors';
import Pages from '../../pages';

const getStarSubPageList = async (starPage: starPageEnum) => {
  const pageList = await Pages.getPageList(pageEnum.star);
  const pageUuid = pageList[starPage].uuid;
  const res = await myAxios.get(`/pages/${pageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return { pageUuid, subPages: res.data.data.subPageSummaryList };
};

export default {
  getStarSubPageList,
};
