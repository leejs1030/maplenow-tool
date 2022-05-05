import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs', () => {
  describe('pet', () => {
    it('wonder berry', async () => {
      const res = await Urls.Paragraphs.Pet.getWonderBerryParagraphList();
      testUuids(res);

      const res1 = await Urls.Paragraphs.Pet.getWonderBerryParagraphList(new Date('2022-01-27'));
      testUuids(res1);

      try {
        await Urls.Paragraphs.Pet.getWonderBerryParagraphList(new Date('2022-01-26'));
      } catch (err) {
        return;
      }
      throw new Error();
    });
    it('crystal sweet', async () => {
      const res = await Urls.Paragraphs.Pet.getCrystalSweetParagraphList();
      testUuids(res);
    });
    it('crystal dream', async () => {
      const res = await Urls.Paragraphs.Pet.getCrystalDreamParagraphList();
      testUuids(res);
    });
  });
});
