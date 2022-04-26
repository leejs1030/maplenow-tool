import Urls from '@urls';
import { AutoTable } from 'custom-type';

const testUuids = (res: {
  pageUuid: string,
  subPageUuid: string,
  paragraphs: { uuid: string, autoTable: AutoTable }[],
}) => {
  expect(typeof res.pageUuid).toBe('string');
  expect(typeof res.subPageUuid).toBe('string');
  res.paragraphs.forEach((value) => expect(typeof value.uuid).toBe('string'));
  expect(typeof res.paragraphs[0].uuid).toBe('string');
};

describe('test for paragraphs ', () => {
  describe('cube ', () => {
    it('rank up', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeRankUpParagraphList(false);
      testUuids(res);
    });

    it('option', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeOptionParagraphList(false);
      testUuids(res);
    });

    it('rank up miracle', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeRankUpParagraphList(true);
      testUuids(res);
    });

    it('option miracle', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeOptionParagraphList(true);
      testUuids(res);
    });
  });
});
