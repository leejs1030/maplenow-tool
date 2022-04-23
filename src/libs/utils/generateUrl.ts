const generateProbUrl = (
  pageUuid: string,
  subPageUuid: string,
  paragraphUuid: string,
  { contentid, trialid, probtableid }: { contentid: string, trialid: string, probtableid: string },
) =>
  `/pages/${pageUuid}/sub-pages/${subPageUuid}/paragraphs/${paragraphUuid}/probs?contentid=${contentid}&trialid=${trialid}&probtableid=${probtableid}`;

export default {
  generateProbUrl,
};
