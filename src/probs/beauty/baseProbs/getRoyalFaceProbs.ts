import Urls from '@urls';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getRoyalFaceProbs = async (isChange: boolean, date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } =
    await Urls.Paragraphs.Beauty.getRoyalFaceParagraphList(isChange, date);
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getRoyalFaceProbs,
};
