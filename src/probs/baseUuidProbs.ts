import { AutoTableItem, paragraphsType } from 'mapletype';
import utils from '../libs/utils';

const getBaseProbsWithUuid = async (
  pageUuid: string,
  subPageUuid: string,
  paragraphs: paragraphsType,
) => {
  const promiseArr = await utils.generatePromiseArr(pageUuid, subPageUuid, paragraphs);
  const res = await Promise.all(promiseArr);
  return res.map((arr) => arr.map((value) => value.data.data.probs as AutoTableItem[]));
};

export default getBaseProbsWithUuid;
