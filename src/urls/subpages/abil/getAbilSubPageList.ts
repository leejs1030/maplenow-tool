import { abilPageEnum, pageEnum } from 'custom-type';
import axios from '../../../libs/axios';
import errors from '../../../errors';
import Pages from '../../pages';

const getAbilSubPageList = async (abilPage: abilPageEnum) => {
  const pageList = await Pages.getPageList(pageEnum.abil);
  const pageUuid = pageList[abilPage].uuid;
  const res = await axios.get(`/pages/${pageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return { pageUuid, subPages: res.data.data.subPageSummaryList };
};

export default {
  getAbilSubPageList,
};
