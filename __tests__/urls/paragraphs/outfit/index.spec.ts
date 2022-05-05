import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs', () => {
  describe('outfit', () => {
    it('royal', async () => {
      const res = await Urls.Paragraphs.Outfit.getRoyalStyleParagraphList();
      testUuids(res);
    });

    it('redPiece', async () => {
      const res = await Urls.Paragraphs.Outfit.getRedPieceParagraphList();
      testUuids(res);
    });

    it('blackPiece', async () => {
      const res = await Urls.Paragraphs.Outfit.getBlackPieceParagraphList();
      testUuids(res);
    });
  });
});
