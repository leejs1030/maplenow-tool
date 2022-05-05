import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import utils from '@libs/utils';
import { fullUuidInfo } from 'custom-type';

const getAbilPointProbs = async (date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Abil.getPointParagraphList(date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getAbilPointProbs,
};
