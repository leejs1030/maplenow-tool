import Urls from '@urls';
import utils from '@libs/utils';
import { AutoTableItem, starPageEnum } from 'custom-type';

const getStarProbs = async (starPage: starPageEnum, date?: Date) => {
  const {
    pageUuid,
    subPageUuid,
    paragraphs,
  } = await Urls.Paragraphs.Star.getStarParagraphList(starPage, date);
  const promiseArr = await utils.generatePromiseArr(pageUuid, subPageUuid, paragraphs);
  const res = await Promise.all(promiseArr);
  return res.map((arr) => arr.map((value) => value.data.data.probs as AutoTableItem[]));
};

export default {
  getStarProbs,
};
