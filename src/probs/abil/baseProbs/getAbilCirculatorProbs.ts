import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import { fullUuidInfo } from 'custom-type';
import utils from '@libs/utils';

const getAbilCirculatorProbs = async (date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Abil.getCirculatorParagraphList(date as Date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getAbilCirculatorProbs,
};
