import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs ', () => {
  describe('test for ability', () => {
    it('point', async () => {
      const res = await Urls.Paragraphs.Abil.getPointParagraphList();
      testUuids(res);
    });

    it('circulator', async () => {
      const res = await Urls.Paragraphs.Abil.getCirculatorParagraphList();
      testUuids(res);
    });
  });
});
