import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';
import utils from '@libs/utils';
import { fullUuidInfo } from 'custom-type';

const getCubeRankUpProbs = async (isMiracle: boolean, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Cube.getRankUpParagraphList(isMiracle, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getCubeRankUpProbs,
};
