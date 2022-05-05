import { petPageEnum, pageEnum } from 'custom-type';
import axios from '@libs/axios';
import errors from '@errors';
import Pages from '../../pages';

const getPetSubPageList = async (petPage: petPageEnum) => {
  const pageList = await Pages.getPageList(pageEnum.pet);
  const pageUuid = pageList[petPage].uuid;
  const res = await axios.get(`/pages/${pageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return { pageUuid, subPages: res.data.data.subPageSummaryList };
};

export default {
  getPetSubPageList,
};
