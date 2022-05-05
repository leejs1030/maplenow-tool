import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getCubeOptionProbs = async (isMiracle: boolean, date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } = await Urls.Paragraphs.Cube.getOptionParagraphList(
    isMiracle,
    date,
  );
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getCubeOptionProbs,
};
