import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getRoyalHairProbs = async (isChange: boolean, year?: number, month?: number | string) => {
  const { pageUuid, subPageUuid, paragraphs } =
    await Urls.Paragraphs.Beauty.getRoyalHairParagraphList(isChange, year, month);
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getRoyalHairProbs,
};
