import { AutoTableItem, paragraphsType, fullUuidInfo } from 'mapletype';
import utils from '../libs/utils';

const cache: {
  [pageUuid: string]: {
    [subPageUuid: string]: {
      updatedAt: Date;
      data: AutoTableItem[][][];
    };
  };
} = {};

const millisecond = 1;
const second = 1000 * millisecond;
const minute = 60 * second;
const hour = 60 * minute;

const hasCache = (pageUuid: string, subPageUuid: string, now: Date): boolean => {
  if (!cache[pageUuid] || !cache[pageUuid][subPageUuid]) return false;
  const before = cache[pageUuid][subPageUuid].updatedAt;
  return !(
    now.getTime() - before.getTime() >= hour - minute - 30 * second ||
    now.getTime() - before.getTime() < 0
  );
};

const getBaseProbsWithUuid = async (
  pageUuid: string,
  subPageUuid: string,
  paragraphs: paragraphsType,
  date?: Date | fullUuidInfo,
) => {
  if (hasCache(pageUuid, subPageUuid, date && utils.isDate(date) ? date : new Date()))
    return cache[pageUuid][subPageUuid].data;
  const promiseArr = await utils.generatePromiseArr(pageUuid, subPageUuid, paragraphs);
  const res = await Promise.all(promiseArr);
  const ret = res.map((arr) => arr.map((value) => value.data.data.probs as AutoTableItem[]));
  cache[pageUuid] = {
    [subPageUuid]: {
      updatedAt:
        date && utils.isDate(date)
          ? date
          : new Date(`${ret.slice(-1)[0].slice(-1)[0].slice(-1)[0].updateDt}.000Z`),
      data: ret,
    },
  };
  return ret;
};

export default getBaseProbsWithUuid;
