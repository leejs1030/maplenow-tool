import { fullUuidInfo } from 'custom-type';
import Urls from '../../../urls';
import utils from '../../../libs/utils';
import getBaseProbsWithUuid from '../../baseUuidProbs';

const getCubeOptionProbs = async (isMiracle?: boolean, date?: Date | fullUuidInfo) => {
  const { pageUuid, subPageUuid, paragraphs } = utils.isDate(date)
    ? await Urls.Paragraphs.Cube.getOptionParagraphList(isMiracle, date)
    : date;
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getCubeOptionProbs,
};
