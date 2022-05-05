import Urls from '@urls';
import { petPageEnum, fullUuidInfo } from 'custom-type';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import utils from '@libs/utils';

const getPetProbs = async (petPage: petPageEnum, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Pet.getPetParagraphList(petPage, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getPetProbs,
};
