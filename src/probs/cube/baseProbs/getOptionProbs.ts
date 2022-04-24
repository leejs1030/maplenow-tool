import Urls from '@urls';
import utils from '@libs/utils';
import { AutoTableItem } from 'custom-type';

const getOptionProbs = async (isMiracle: boolean, date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } = await Urls.Paragraphs.Cubes.getCubeOptionParagraphList(isMiracle, date);
  const promiseArr = await utils.generatePromiseArr(pageUuid, subPageUuid, paragraphs);
  const res = await Promise.all(promiseArr);
  return res.map((arr) => arr.map((value) => value.data.data.probs as AutoTableItem[]));
};

export default {
  getOptionProbs,
};
