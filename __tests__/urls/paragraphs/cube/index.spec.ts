import Urls from '@urls';

const testUuids = (res: { pageUuid: any, subPageUuid: any, paragraphs: { uuid: string, autoTable: any }[] }) => {
  expect(typeof res.pageUuid).toBe('string');
  expect(typeof res.subPageUuid).toBe('string');
  res.paragraphs.forEach((value) => expect(typeof value.uuid).toBe('string'));
  expect(typeof res.paragraphs[0].uuid).toBe('string');
};

describe('test for paragraphs ', () => {
  describe('cube ', () => {
    it('rank up', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeRankUpParagraphsList(false);
      testUuids(res);
    });

    it('option', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeOptionParagraphsList(false);
      testUuids(res);
    });

    it('rank up miracle', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeRankUpParagraphsList(true);
      testUuids(res);
    });

    it('option miracle', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeOptionParagraphsList(true);
      testUuids(res);
    });
    it('option', async () => {
      const res = await paragraphs.getCubeOptionParagraphsList();
      expect(typeof res.pageUuid).toBe('string');
      expect(typeof res.subPageUuid).toBe('string');
      res.paragraphs.forEach((value) => expect(typeof value.uuid).toBe('string'));
      expect(typeof res.paragraphs[0].uuid).toBe('string');
      // console.log(res.paragraphs);
      // res.paragraphs.forEach((value) => console.log(value.autoTable));
    });
  });
});
