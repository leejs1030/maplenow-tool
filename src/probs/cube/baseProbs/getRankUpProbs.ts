import Paragraphs from '@urls/paragraphs';
import axios from '@libs/axios';

export const getRankUpProbs = async (date?: Date) => {
  const { pageUuid, subPageUuid, paragraphs } = await Paragraphs.getCubeRankUpParagraphsList(date);
  const baseUrl = `/pages/${pageUuid}/sub-pages/${subPageUuid}`;
  const promiseArr = paragraphs.map((value) => {
    const rowUrl = `${baseUrl}/paragraphs/${value.uuid}`;
    return Promise.all(
      value.autoTable.usedProbtables.map((row: any) => {
        const { contentid, trialid, probtableid } = row;
        return axios.get(`${rowUrl}/probs?contentid=${contentid}&trialid=${trialid}&probtableid=${probtableid}`);
      }),
    );
  });
  const res = await Promise.all(promiseArr);
  return res.map((arr) => arr.map((value) => value.data.data.probs));
};
