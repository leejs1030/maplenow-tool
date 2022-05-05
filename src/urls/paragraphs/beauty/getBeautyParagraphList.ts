import errors from '@errors';
import Subpages from '@urls/subpages';
import baseParagraphs from '../baseParagraphs';

const monthNameMapper = [
  0,
  '제뉴어리',
  '페브러리',
  '마치',
  '에이프릴',
  '메이',
  '쥰',
  '줄라이',
  '어거스트',
  '셉템버',
  '악토버',
  '노벰버',
  '디셈버',
];

const getRoyalHairParagraphList = async (
  isChange: boolean,
  selected: number,
  year?: number,
  month?: number | string,
) => {
  const { pageUuid, subPages } = await Subpages.Beauties.getBeautySubPageList(selected);
  if (!year || !month || subPages.length <= 1)
    return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[0].uuid);
  const monthString = typeof month === 'string' ? month : monthNameMapper[month];
  const searchString = `${year}년 ${monthString} 로얄 헤어`;
  let i;
  for (i = 0; i < subPages.length; i += 1) if (subPages[i].description === searchString) break;
  if (i >= subPages.length) throw new errors.InvalidDateError();
  return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[i].uuid);
};

const getRoyalFaceParagraphList = async (isChange: boolean, selected: number, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Beauties.getBeautySubPageList(selected);
  if (subPages.length <= 1) return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[0].uuid);
  return baseParagraphs.compareWithDateAndGetParagraphs(pageUuid, subPages, date);
};

export default {
  getRoyalHairParagraphList,
  getRoyalFaceParagraphList,
};
