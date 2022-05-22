import { paragraphsType } from 'mapletype';
import realAxios from 'axios';
import { USER_AGENT } from '@config/constants';
import myAxios from '../../../libs/myaxios';
import errors from '../../../errors';

const getParagraphsByUuid = async (pageUuid: string, subPageUuid: string) => {
  const res = await myAxios.get(`/pages/${pageUuid}?subPageUuid=${subPageUuid}`);
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
    description = (
      await realAxios.get(description as string, { headers: { 'User-Agent': USER_AGENT } })
    ).data;
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
