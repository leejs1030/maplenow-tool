import { cubePageEnum, pageEnum } from 'mapletype';
import myAxios from '../../../libs/myaxios';
import errors from '../../../errors';
import Pages from '../../pages';

const getCubeSubPageList = async (cubePage: cubePageEnum) => {
  const pageList = await Pages.getPageList(pageEnum.cube);
  const pageUuid = pageList[cubePage].uuid;
  const res = await myAxios.get(`/pages/${pageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return { pageUuid, subPages: res.data.data.subPageSummaryList };
};

export default {
  getCubeSubPageList,
};
