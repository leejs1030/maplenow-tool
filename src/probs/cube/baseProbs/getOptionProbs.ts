import Paragraphs from '@urls/paragraphs';
import axios from '@libs/axios';
import generateUrl from '@libs/utils/generateUrl';

const getOptionProbs = async (date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } = await Paragraphs.getCubeOptionParagraphsList(date);
  const promiseArr = paragraphs.map((value) =>
    Promise.all(
      value.autoTable.usedProbtables.map((row: any) =>
        axios.get(generateUrl.generateProbUrl(pageUuid, subPageUuid, value.uuid, row)),
      ),
    ),
  );
  const res = await Promise.all(promiseArr);
  return res.map((arr) => arr.map((value) => value.data.data.probs));
};

export default {
  getOptionProbs,
};
