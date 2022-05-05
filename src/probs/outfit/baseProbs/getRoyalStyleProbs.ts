import Urls from '@urls';
import utils from '@libs/utils';
import { AutoTableItem } from 'custom-type';

const getRoyalStyleProbs = async (season?: number, date?: Date) => {
  const {
    pageUuid,
    subPageUuid,
    paragraphs,
  } = await Urls.Paragraphs.Outfit.getRoyalStyleParagraphList(season, date);
  const promiseArr = await utils.generatePromiseArr(pageUuid, subPageUuid, paragraphs);
  const res = await Promise.all(promiseArr);
  return res.map((arr) => arr.map((value) => value.data.data.probs as AutoTableItem[]));
};

export default {
  getRoyalStyleProbs,
};
