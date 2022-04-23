import paragraphs from '@urls/paragraphs';

describe('test for paragraphs ', () => {
  describe('cube ', () => {
    it('rank up', async () => {
      const res = await paragraphs.getCubeRankUpParagraphsList();
      expect(typeof res.pageUuid).toBe('string');
      expect(typeof res.subPageUuid).toBe('string');
      expect(typeof res.paragraphs[0].uuid).toBe('string');
    });

    it('option', async () => {
      const res = await paragraphs.getCubeOptionParagraphsList();
      expect(typeof res.pageUuid).toBe('string');
      expect(typeof res.subPageUuid).toBe('string');
      res.paragraphs.forEach((value) => expect(typeof value.uuid).toBe('string'));
      expect(typeof res.paragraphs[0].uuid).toBe('string');
      // res.paragraphs.forEach((value) => console.log(value.autoTable));
    });
  });
});
