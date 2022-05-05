import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs ', () => {
  describe('beauty ', () => {
    it('hair', async () => {
      const res = await Urls.Paragraphs.Beauty.getRoyalHairParagraphList(false);
      testUuids(res);
    });

    it('face', async () => {
      const res = await Urls.Paragraphs.Beauty.getRoyalFaceParagraphList(false);
      testUuids(res);
    });

    it('hair change', async () => {
      const res = await Urls.Paragraphs.Beauty.getRoyalHairParagraphList(true);
      testUuids(res);
    });

    it('face change', async () => {
      const res = await Urls.Paragraphs.Beauty.getRoyalFaceParagraphList(true);
      testUuids(res);
    });
  });
});
