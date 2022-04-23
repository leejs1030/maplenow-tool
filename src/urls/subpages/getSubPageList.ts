import { cubePageEnum, pageEnum } from 'custom-type';
import axios from '@libs/axios';
import errors from '@errors';
import Pages from '../pages';

const getCubeSubPageList = async (
  cubePage: cubePageEnum,
): Promise<{
  pageUuid: string,
  subPages: { uuid: string, description: string }[],
}> => {
  const ret = await Pages.getPageList(pageEnum.cube);
  const pageUuid = ret[cubePage - cubePageEnum.base].uuid;
  const res = await axios.get(`/pages/${pageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return { pageUuid, subPages: res.data.data.subPageSummaryList };
};

export default {
  getCubeSubPageList,
};
