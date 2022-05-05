import utils from '../../../libs/utils';
import errors from '../../../errors';
import baseParagraphs from '../baseParagraphs';

const compareWithDateAndGetParagraphs = async (
  pageUuid: string,
  subPages: { uuid: string; description: string }[],
  date?: Date,
) => {
  let newDate;
  if (!date) newDate = new Date();
  else newDate = new Date(date);
  let i;
  for (i = 0; i < subPages.length; i += 1)
    if (utils.translateDescriptionToDate(subPages[i].description) <= newDate) break;
  if (i >= subPages.length) throw new errors.InvalidDateError();
  return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[i].uuid);
};

export default {
  compareWithDateAndGetParagraphs,
};
