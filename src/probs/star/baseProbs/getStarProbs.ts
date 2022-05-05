import Urls from '@urls';
import { starPageEnum } from 'custom-type';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getStarProbs = async (starPage: starPageEnum, date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } = await Urls.Paragraphs.Star.getStarParagraphList(
    starPage,
    date,
  );
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getStarProbs,
};
