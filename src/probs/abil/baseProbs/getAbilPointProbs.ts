import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getAbilPointProbs = async (date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } = await Urls.Paragraphs.Abil.getPointParagraphList(
    date,
  );
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getAbilPointProbs,
};
