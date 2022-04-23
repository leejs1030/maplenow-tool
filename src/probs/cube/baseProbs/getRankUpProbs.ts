import Paragraphs from '@urls/paragraphs';
import axios from '@libs/axios';
import generateUrl from '@libs/utils/generateUrl';
import { AutoTableItem, probInfo } from 'custom-type';

const getRankUpProbs = async (date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } = await Paragraphs.getCubeRankUpParagraphsList(date);
  const promiseArr = paragraphs.map((value) =>
    Promise.all(
      value.autoTable.usedProbtables.map((row: probInfo) =>
        axios.get(generateUrl.generateProbUrl(pageUuid, subPageUuid, value.uuid, row)),
      ),
    ),
  );
  const res = await Promise.all(promiseArr);
  return res.map((arr) => arr.map((value) => value.data.data.probs as AutoTableItem[]));
};

export default {
  getRankUpProbs,
};
