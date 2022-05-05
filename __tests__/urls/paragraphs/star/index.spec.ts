import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs', () => {
  describe('starforce', () => {
    it('normal', async () => {
      const res = await Urls.Paragraphs.Stars.getStarNormalParagraphList();
      testUuids(res);

      const res1 = await Urls.Paragraphs.Stars.getStarNormalParagraphList(new Date('2022-03-03'));
      testUuids(res1);
    });

    it('discount 30%', async () => {
      const res = await Urls.Paragraphs.Stars.getStarDiscountThirtyParagraphList();
      testUuids(res);
    });

    it('5, 10, 15 100%', async () => {
      const res = await Urls.Paragraphs.Stars.getStarMultipleFiveParagraphList();
      testUuids(res);
    });

    it('10성 이하 1 + 1', async () => {
      const res = await Urls.Paragraphs.Stars.getStarUnderTenParagraphList();
      testUuids(res);
    });

    it('샤이닝', async () => {
      const res = await Urls.Paragraphs.Stars.getStarShiningParagraphList();
      testUuids(res);
    });
  });
});
