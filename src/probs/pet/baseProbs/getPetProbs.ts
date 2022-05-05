import Urls from '@urls';
import { petPageEnum } from 'custom-type';
import getBaseProbsWithUuid from '@probs/baseUuidProbs';

const getPetProbs = async (petPage: petPageEnum, date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } = await Urls.Paragraphs.Pet.getPetParagraphList(
    petPage,
    date,
  );
  return getBaseProbsWithUuid(pageUuid, subPageUuid, paragraphs);
};

export default {
  getPetProbs,
};
