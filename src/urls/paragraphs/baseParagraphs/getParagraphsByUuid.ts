import { paragraphsType } from 'mapletype';
import axios from '../../../libs/axios';
import errors from '../../../errors';

const getParagraphsByUuid = async (pageUuid: string, subPageUuid: string) => {
  const res = await axios.get(`/pages/${pageUuid}?subPageUuid=${subPageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  return {
    pageUuid,
    subPageUuid,
    paragraphs: (res.data.data.selectedSubPage.paragraphs as paragraphsType)
      .filter((value) => value.autoTable)
      .map((value) => ({ uuid: value.uuid, autoTable: value.autoTable })),
  };
};

export default {
  getParagraphsByUuid,
};
