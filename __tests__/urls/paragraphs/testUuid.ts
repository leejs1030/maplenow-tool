import { AutoTable } from 'custom-type';

export const testUuids = (res: {
  pageUuid: string,
  subPageUuid: string,
  paragraphs: { uuid: string, autoTable: AutoTable }[],
}) => {
  expect(typeof res.pageUuid).toBe('string');
  expect(typeof res.subPageUuid).toBe('string');
  res.paragraphs.forEach((value) => expect(typeof value.uuid).toBe('string'));
  expect(typeof res.paragraphs[0].uuid).toBe('string');
};
