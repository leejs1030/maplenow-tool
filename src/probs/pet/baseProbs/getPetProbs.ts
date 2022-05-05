import Urls from '@urls';
import utils from '@libs/utils';
import { AutoTableItem, petPageEnum } from 'custom-type';

const getPetProbs = async (petPage: petPageEnum, date?: Date) => {
  const {
    pageUuid,
    subPageUuid,
    paragraphs,
  } = await Urls.Paragraphs.Pet.getPetParagraphList(petPage, date);
  const promiseArr = await utils.generatePromiseArr(pageUuid, subPageUuid, paragraphs);
  const res = await Promise.all(promiseArr);
  return res.map((arr) => arr.map((value) => value.data.data.probs as AutoTableItem[]));
};

export default {
  getPetProbs,
};
