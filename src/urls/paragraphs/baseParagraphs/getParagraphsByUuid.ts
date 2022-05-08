import { paragraphsType } from 'mapletype';
import realaxios from 'axios';
import axios from '../../../libs/axios';
import errors from '../../../errors';

const getParagraphsByUuid = async (pageUuid: string, subPageUuid: string) => {
  const res = await axios.get(`/pages/${pageUuid}?subPageUuid=${subPageUuid}`);
  if (res.status !== 200) throw new errors.NexonNowError();
  let paragraphs = res.data.data.selectedSubPage.paragraphs as paragraphsType;
  let description: string | undefined =
    Array.isArray(paragraphs) && paragraphs.length
      ? ((paragraphs[0] as any)?.wysiwygEditor?.htmlUrl as string)
      : undefined;
  paragraphs = paragraphs
    .filter((value) => value.autoTable)
    .map((value) => ({ uuid: value.uuid, autoTable: value.autoTable }));
  try {
    description = (await realaxios.get(description as string)).data;
  } catch (err) {
    description = paragraphs[0].autoTable.header;
  }
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
