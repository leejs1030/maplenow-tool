import { fullUuidInfo } from 'mapletype';
import Urls from '../../../urls';
import utils from '../../../libs/utils';
import getBaseProbsWithUuid from '../../baseUuidProbs';

const getAbilCirculatorProbs = async (date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Abil.getCirculatorParagraphList(date as Date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs, date);
};

export default {
  getAbilCirculatorProbs,
};
