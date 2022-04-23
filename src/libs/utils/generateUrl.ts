import { probInfo } from 'custom-type';

const generateProbUrl = (
  pageUuid: string,
  subPageUuid: string,
  paragraphUuid: string,
  { contentid, trialid, probtableid }: probInfo,
) =>
  `/pages/${pageUuid}/sub-pages/${subPageUuid}/paragraphs/${paragraphUuid}/probs?contentid=${contentid}&trialid=${trialid}&probtableid=${probtableid}`;

export default {
  generateProbUrl,
};
