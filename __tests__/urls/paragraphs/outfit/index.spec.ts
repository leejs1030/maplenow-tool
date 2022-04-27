import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs', () => {
  describe('outfit', () => {
    it('royal', async () => {
      const res = Urls.Paragraphs.Outfits.getRoyalParagraphList();
      testUuids(res);
    });

    it('redPiece', async () => {
      const res = Urls.Paragraphs.Outfits.getRedParagraphList();
      testUuids(res);
    });

    it('blackPiece', async () => {
      const res = Urls.Paragraphs.Outfits.getBlackParagraphList();
      testUuids(res);
    });
  });
});
