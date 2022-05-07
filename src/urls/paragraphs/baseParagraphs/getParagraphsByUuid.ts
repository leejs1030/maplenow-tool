import { paragraphsType } from 'mapletype';
import axios from '../../../libs/axios';
import errors from '../../../errors';

const getParagraphsByUuid = async (pageUuid: string, subPageUuid: string) => {
  const res = await axios.get(`/pages/${pageUuid}?subPageUuid=${subPageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  const paragraphs = res.data.data.selectedSubPage.paragraphs as paragraphsType;
  const description = Array.isArray(paragraphs) && paragraphs.length ? paragraphs[0] : undefined;
  return {
    pageUuid,
    subPageUuid,
    paragraphs: paragraphs
      .filter((value) => value.autoTable)
      .map((value) => ({ uuid: value.uuid, autoTable: value.autoTable })),
    description,
  };
};

export default {
  getParagraphsByUuid,
};
