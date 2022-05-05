import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getAbilCirculatorProbs = async (date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } =
    await Urls.Paragraphs.Abil.getCirculatorParagraphList(date);
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getAbilCirculatorProbs,
};
