import { AutoTableItem, paragraphsType } from 'mapletype';
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

// const hasCache = (pageUuid: string, subPageUuid: string): boolean => {
//   if (!cache[pageUuid] || !cache[pageUuid][subPageUuid]) return false;
//   const now = new Date();
//   const before = cache[pageUuid][subPageUuid].updatedAt;
//   console.log(now.getTime());
//   console.log(before.getTime());
//   console.log(now.getTime() - before.getTime());
//   console.log(hour - minute - 30 * second);
//   if (now.getTime() - before.getTime() >= hour - minute - 30 * second) return false;
//   return true;
// };

const getBaseProbsWithUuid = async (
  pageUuid: string,
  subPageUuid: string,
  paragraphs: paragraphsType,
) => {
  if (hasCache(pageUuid, subPageUuid)) return cache[pageUuid][subPageUuid].data;
  const promiseArr = await utils.generatePromiseArr(pageUuid, subPageUuid, paragraphs);
  const res = await Promise.all(promiseArr);
  const ret = res.map((arr) => arr.map((value) => value.data.data.probs as AutoTableItem[]));
  cache[pageUuid] = {
    [subPageUuid]: {
      updatedAt: new Date(`${ret.slice(-1)[0].slice(-1)[0].slice(-1)[0].updateDt}.000Z`),
      data: ret,
    },
  };
  console.log('yes!!!');
  return ret;
};

export default getBaseProbsWithUuid;
