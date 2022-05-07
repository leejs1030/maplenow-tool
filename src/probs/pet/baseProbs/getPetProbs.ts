import { petPageEnum, fullUuidInfo } from 'mapletype';
import getBaseProbsWithUuid from '../../baseUuidProbs';
import Urls from '../../../urls';
import utils from '../../../libs/utils';

const getPetProbs = async (petPage: petPageEnum, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Pet.getPetParagraphList(petPage, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getPetProbs,
};
