import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getRoyalStyleProbs = async (season?: number, date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } =
    await Urls.Paragraphs.Outfit.getRoyalStyleParagraphList(season, date);
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getRoyalStyleProbs,
};
