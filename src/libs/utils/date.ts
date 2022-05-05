const translateDateToDescriptions = (date: Date) =>
  `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDay()}일 업데이트`;

const translateDescriptionToDate = (description: string) => {
  const yend = description.indexOf('년');
  const year = parseInt(description.slice(yend - 4, yend), 10);
  const mend = description.indexOf('월');
  const month = parseInt(description.slice(yend + 1, mend), 10);
  const dend = description.indexOf('일');
  const day = parseInt(description.slice(mend + 1, dend), 10);
  const ret = new Date();
  ret.setFullYear(year);
  ret.setMonth(month - 1);
  ret.setDate(day - 1);
  return ret;
};

export default {
  translateDateToDescriptions,
  translateDescriptionToDate,
};
