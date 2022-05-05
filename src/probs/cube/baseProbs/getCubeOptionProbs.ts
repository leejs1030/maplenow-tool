import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import utils from '@libs/utils';
import { fullUuidInfo } from 'custom-type';

const getCubeOptionProbs = async (isMiracle: boolean, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Cube.getOptionParagraphList(isMiracle, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getCubeOptionProbs,
};
