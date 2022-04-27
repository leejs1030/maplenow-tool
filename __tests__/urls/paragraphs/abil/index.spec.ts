import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs ', () => {
  describe('test for ability', () => {
    it('point', async () => {
      const res = await Urls.Paragraphs.Abils.getAbilPointParagraphList();
      testUuids(res);
    });

    it('circulator', async () => {
      const res = await Urls.Paragraphs.Abils.getAbilCirculatorParagraphList();
      testUuids(res);
    });
  });
});
