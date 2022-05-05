import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs', () => {
  describe('starforce', () => {
    it('normal', async () => {
      const res = await Urls.Paragraphs.Stars.getNormalPragraphList();
      testUuids(res);
    });

    it('discount 30%', async () => {
      const res = await Urls.Paragraphs.Stars.getDiscountThirtyPragraphList();
      testUuids(res);
    });

    it('5, 10, 15 100%', async () => {
      const res = await Urls.Paragraphs.Stars.getMultipleFivePragraphList();
      testUuids(res);
    });

    it('10성 이하 1 + 1', async () => {
      const res = await Urls.Paragraphs.Stars.getUnderTenPragraphList();
      testUuids(res);
    });

    it('샤이닝', async () => {
      const res = await Urls.Paragraphs.Stars.getShiningPragraphList();
      testUuids(res);
    });
  });
});
