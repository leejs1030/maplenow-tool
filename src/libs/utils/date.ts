import { fullUuidInfo } from 'custom-type';

const translateDateToDescriptions = (date: Date) =>
  `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDay()}일 업데이트`;

const translateDescriptionToDate = (description: string) => {
  const yend = description.indexOf('년');
  const year = parseInt(description.slice(yend - 4, yend), 10);
  const mend = description.indexOf('월');
  const month = parseInt(description.slice(yend + 1, mend), 10);
  const dend = description.indexOf('일');
  const day = parseInt(description.slice(mend + 1, dend), 10);

  const monthString = month < 10 ? `0${month}` : `${month}`;
  const dayString = day < 10 ? `0${day}` : `${day}`;
  return new Date(`${year}-${monthString}-${dayString}`);
};

const isDate = (date: Date | undefined | fullUuidInfo): date is Date | undefined =>
  date === undefined || date instanceof Date;

export default {
  translateDateToDescriptions,
  translateDescriptionToDate,
  isDate,
};
