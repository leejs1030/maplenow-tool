import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs', () => {
  describe('outfit', () => {
    it('royal', async () => {
      const res = await Urls.Paragraphs.Outfits.getRoyalParagraphList();
      testUuids(res);
    });

    it('redPiece', async () => {
      const res = await Urls.Paragraphs.Outfits.getRedPieceParagraphList();
      testUuids(res);
    });

    it('blackPiece', async () => {
      const res = await Urls.Paragraphs.Outfits.getBlackPieceParagraphList();
      testUuids(res);
    });
  });
});
