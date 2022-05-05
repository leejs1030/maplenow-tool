import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getCubeRankUpProbs = async (isMiracle: boolean, date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } = await Urls.Paragraphs.Cube.getRankUpParagraphList(
    isMiracle,
    date,
  );
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getCubeRankUpProbs,
};
